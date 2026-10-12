# Turns the automatic sync off: removes the scheduled task and stops
# the watcher that is currently running.
# KEEP THIS FILE PURE ASCII.

$task = 'KnowledgeBase Auto Sync'

if (Get-ScheduledTask -TaskName $task -ErrorAction SilentlyContinue) {
    Unregister-ScheduledTask -TaskName $task -Confirm:$false
    Write-Host "Task removed."
} else {
    Write-Host "No task to remove."
}

Get-CimInstance Win32_Process |
    Where-Object { $_.CommandLine -like '*auto-watch.ps1*' } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }

Write-Host "Automatic sync turned off."
