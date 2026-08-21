@echo off
rem ===================================================
rem  Double-click once. From then on the two-way sync
rem  starts by itself every time you log in to Windows,
rem  with no window and nothing to remember.
rem
rem  It works by putting one small .vbs launcher into
rem  your Startup folder. No admin rights, no scheduled
rem  task, nothing installed outside your own account.
rem
rem  To undo it: run uninstall-auto-sync.bat.
rem
rem  KEEP THIS FILE PURE ASCII.
rem ===================================================

setlocal
cd /d "%~dp0"

set "STARTUP=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "STUB=%STARTUP%\KnowledgeBase Auto-Sync.vbs"
set "STOP=%~dp0stop-sync.flag"

echo.
echo  ===================================================
echo   Installing automatic sync
echo  ===================================================
echo.

if not exist "%~dp0auto-push.bat" (
    echo  [ERROR] auto-push.bat is missing from
    echo          %~dp0
    echo          Run this file from inside the repository folder.
    echo.
    pause
    exit /b 1
)

if not exist "%~dp0auto-sync-run.bat" (
    echo  [ERROR] auto-sync-run.bat is missing from
    echo          %~dp0
    echo.
    pause
    exit /b 1
)

if not exist "%STARTUP%" (
    echo  [ERROR] Startup folder not found:
    echo          %STARTUP%
    echo.
    pause
    exit /b 1
)

git rev-parse --is-inside-work-tree > nul 2>&1
if errorlevel 1 (
    echo  [ERROR] This folder is not a git repository:
    echo          %CD%
    echo.
    pause
    exit /b 1
)

rem Clear any stop flag left behind by a previous uninstall.
if exist "%STOP%" del /f /q "%STOP%" > nul 2>&1

rem Write the launcher. The two extra quotes around the path
rem are how VBScript escapes a quote inside a string, so the
rem path still survives spaces and OneDrive folders.
> "%STUB%" echo ' Starts the KnowledgeBase two-way sync with no visible window.
>> "%STUB%" echo ' Created by install-auto-sync.bat. Deleting this file stops it starting at logon.
>> "%STUB%" echo CreateObject("WScript.Shell").Run """%~dp0auto-sync-run.bat""", 0, False

if not exist "%STUB%" (
    echo  [ERROR] Could not write the launcher into the Startup folder.
    echo.
    pause
    exit /b 1
)

rem Start it now so you do not have to reboot.
start "" wscript.exe //nologo "%STUB%"

echo   [OK] Installed.
echo.
echo   folder    : %CD%
echo   launcher  : %STUB%
echo   log file  : %~dp0auto-sync.log
echo.
echo   From now on:
echo     - the sync starts by itself when you log in
echo     - it runs with no window at all
echo     - local edits are pushed within about 10 seconds
echo     - updates made anywhere else arrive within a minute
echo.
echo   It is already running, so you do not need to reboot.
echo.
echo   Do NOT also double-click auto-push.bat from now on:
echo   two copies running at once will fight over the same
echo   repository. Use auto-sync.log to see what it is doing.
echo.
echo   To stop it   : uninstall-auto-sync.bat
echo   To check it  : open auto-sync.log
echo.
pause
