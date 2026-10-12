# ------------------------------------------------------------------
#  Installs the Windows task "KnowledgeBase Auto Sync".
#
#  It starts auto-watch.ps1 (folder watcher) at every logon, with no
#  window. A trigger every 30 minutes is a safety net: if the watcher
#  has stopped, it starts again; otherwise the run is simply ignored.
#
#  It also removes the older Startup-folder launcher (auto-push.bat),
#  so the two never fight over the same git folder.
#  KEEP THIS FILE PURE ASCII.
# ------------------------------------------------------------------

$ErrorActionPreference = 'Stop'

$task   = 'KnowledgeBase Auto Sync'
$folder = Split-Path -Parent $MyInvocation.MyCommand.Path
$vbs    = Join-Path $folder 'auto-watch-hidden.vbs'

if (-not (Test-Path $vbs)) {
    Write-Host "File not found: $vbs" -ForegroundColor Red
    exit 1
}

# Retire the previous mechanism, if it is still around
$oldStub = Join-Path ([Environment]::GetFolderPath('Startup')) 'KnowledgeBase Auto-Sync.vbs'
if (Test-Path $oldStub) {
    Remove-Item $oldStub -Force -ErrorAction SilentlyContinue
    Write-Host "Removed the old Startup launcher."
}
Get-CimInstance Win32_Process -ErrorAction SilentlyContinue |
    Where-Object { $_.CommandLine -like '*auto-push.bat*' -or $_.CommandLine -like '*auto-sync-run.bat*' } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
Remove-Item (Join-Path $folder 'stop-sync.flag') -Force -ErrorAction SilentlyContinue

try {
    $action = New-ScheduledTaskAction -Execute 'wscript.exe' -Argument ('//B ' + [char]34 + $vbs + [char]34)

    $triggers = @(
        New-ScheduledTaskTrigger -AtLogOn
        New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1) -RepetitionInterval (New-TimeSpan -Minutes 30)
    )

    $settings = New-ScheduledTaskSettingsSet `
        -AllowStartIfOnBatteries `
        -DontStopIfGoingOnBatteries `
        -StartWhenAvailable `
        -MultipleInstances IgnoreNew `
        -ExecutionTimeLimit ([TimeSpan]::Zero)

    Register-ScheduledTask -TaskName $task -Action $action -Trigger $triggers -Settings $settings -Force | Out-Null
    Start-ScheduledTask -TaskName $task

    Write-Host ""
    Write-Host "Done. Nothing else to open:" -ForegroundColor Green
    Write-Host "  - file changed -> sync 1 minute after the last change"
    Write-Host "  - safety check every 30 minutes (pulls remote commits)"
    Write-Host "  - starts automatically at every Windows logon"
    Write-Host ""
    Write-Host "Log: auto-sync.log"
    Write-Host "Uninstall: uninstall-auto-sync.bat"
}
catch {
    Write-Host ""
    Write-Host "FAILED: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Run install-auto-sync.bat again with right click > Run as administrator."
    exit 1
}
