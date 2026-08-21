@echo off
rem ===================================================
rem  Turns the automatic sync off again.
rem    - removes the launcher from the Startup folder
rem    - asks the running copy to stop, which it does
rem      within about ten seconds
rem
rem  Nothing is lost: anything already committed stays
rem  committed, and you can still sync by hand with
rem  auto-push.bat, or turn this back on by running
rem  install-auto-sync.bat again.
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
echo   Turning automatic sync off
echo  ===================================================
echo.

if exist "%STUB%" (
    del /f /q "%STUB%" > nul 2>&1
    echo   [OK] removed the Startup launcher
) else (
    echo   [--] no Startup launcher was installed
)

rem The running copy checks for this flag on every pass.
echo stop > "%STOP%"
echo   [OK] asked the running copy to stop ^(within ~10 seconds^)
echo.
echo   The flag file stop-sync.flag stays in the folder on
echo   purpose: it is what stops a stray copy from starting
echo   again. install-auto-sync.bat deletes it for you.
echo.
pause
