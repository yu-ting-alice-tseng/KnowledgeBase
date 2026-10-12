# ------------------------------------------------------------------
#  KnowledgeBase - folder watcher and automatic sync
#
#  Runs auto-sync.bat one minute after the LAST change (every new
#  change restarts the countdown), plus a safety sync every 30 minutes
#  to pull commits pushed to GitHub from elsewhere.
#
#  Started at logon by the task "KnowledgeBase Auto Sync".
#  KEEP THIS FILE PURE ASCII.
# ------------------------------------------------------------------

$ErrorActionPreference = 'Continue'

$root  = Split-Path -Parent $MyInvocation.MyCommand.Path
$log   = Join-Path $root 'auto-sync.log'
$sync  = Join-Path $root 'auto-sync.bat'

$debounceSeconds = 60      # wait after the last change
$fullSyncMinutes = 30      # safety net: regular pull

function Write-Log($message) {
    "[{0}] {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $message |
        Add-Content -Path $log -Encoding UTF8
}

# Only one instance at a time
$isNew = $false
$mutex = New-Object System.Threading.Mutex($true, 'Local\KnowledgeBaseAutoWatch', [ref]$isNew)
if (-not $isNew) { exit 0 }

function Test-Ignored([string]$path) {
    if ([string]::IsNullOrWhiteSpace($path)) { return $true }
    if ($path -like '*\.git\*' -or $path -like '*\.git')      { return $true }
    if ($path -like '*\node_modules\*')                        { return $true }
    $name = Split-Path $path -Leaf
    if ($name -eq 'auto-sync.log')                             { return $true }
    if ($name -eq 'desktop.ini')                               { return $true }
    if ($name -like '~$*' -or $name -like '*.tmp' -or
        $name -like '*.swp' -or $name -like '*.crdownload')     { return $true }
    return $false
}

function Invoke-Sync([string]$reason) {
    Write-Log "Sync triggered ($reason)."
    try {
        Start-Process -FilePath $sync -WindowStyle Hidden -Wait
    } catch {
        Write-Log "FAILED to start auto-sync.bat: $($_.Exception.Message)"
    }
}

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path                  = $root
$watcher.Filter                = '*'
$watcher.IncludeSubdirectories = $true
$watcher.NotifyFilter          = [System.IO.NotifyFilters]::FileName -bor
                                 [System.IO.NotifyFilters]::DirectoryName -bor
                                 [System.IO.NotifyFilters]::LastWrite -bor
                                 [System.IO.NotifyFilters]::Size
$watcher.EnableRaisingEvents   = $true

foreach ($type in 'Changed', 'Created', 'Deleted', 'Renamed') {
    Register-ObjectEvent -InputObject $watcher -EventName $type -SourceIdentifier "kb_$type" | Out-Null
}

Write-Log "Watcher active (sync $debounceSeconds s after the last change)."

$pending      = $false
$lastChange   = Get-Date
$lastFullSync = Get-Date

Invoke-Sync 'startup'

while ($true) {
    Start-Sleep -Seconds 3

    foreach ($evt in @(Get-Event | Where-Object { $_.SourceIdentifier -like 'kb_*' })) {
        $path = $evt.SourceEventArgs.FullPath
        Remove-Event -EventIdentifier $evt.EventIdentifier
        if (Test-Ignored $path) { continue }
        if (-not $pending) {
            Write-Log "Change detected: $(Split-Path $path -Leaf)"
        }
        $pending    = $true
        $lastChange = Get-Date
    }

    if ($pending -and ((Get-Date) - $lastChange).TotalSeconds -ge $debounceSeconds) {
        $pending = $false
        Invoke-Sync 'changes settled'
        $lastFullSync = Get-Date
    }

    if (((Get-Date) - $lastFullSync).TotalMinutes -ge $fullSyncMinutes) {
        Invoke-Sync 'periodic check'
        $lastFullSync = Get-Date
    }
}
