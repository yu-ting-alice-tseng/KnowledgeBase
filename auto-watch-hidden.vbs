' Starts auto-watch.ps1 with no window at all.
' Used by the scheduled task "KnowledgeBase Auto Sync".
Dim shell, fso, folder
Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
folder = fso.GetParentFolderName(WScript.ScriptFullName)
shell.Run "powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File """ & folder & "\auto-watch.ps1""", 0, False
