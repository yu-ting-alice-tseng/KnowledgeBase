@echo off
rem ===================================================
rem  Tells you what state the automatic sync is in.
rem  Double-click it, read the report, and if anything
rem  says [MISSING] or [FAIL] send the report over.
rem
rem  It only reads and reports. It changes nothing.
rem
rem  KEEP THIS FILE PURE ASCII.
rem ===================================================

setlocal
cd /d "%~dp0"

set "STARTUP=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "STUB=%STARTUP%\KnowledgeBase Auto-Sync.vbs"
set "LOG=%~dp0auto-sync.log"

echo.
echo  ===================================================
echo   Auto-sync check
echo  ===================================================
echo.
echo   folder : %CD%
echo.

echo   --- 1. are the files here? ---
call :have "auto-push.bat"
call :have "auto-sync-run.bat"
call :have "install-auto-sync.bat"
call :have "uninstall-auto-sync.bat"
echo.

echo   --- 2. is it set to start at logon? ---
if exist "%STUB%" (
    echo    [OK]      launcher installed in the Startup folder
) else (
    echo    [MISSING] no launcher - you have not run install-auto-sync.bat yet
)
if exist "%~dp0stop-sync.flag" (
    echo    [STOPPED] stop-sync.flag exists, so the sync is switched off.
    echo              Run install-auto-sync.bat to switch it back on.
)
echo.

echo   --- 3. has it ever run? ---
if exist "%LOG%" (
    echo    [OK]      auto-sync.log exists
) else (
    echo    [MISSING] no auto-sync.log - the sync has not run on this PC yet
)
echo.

echo   --- 4. can Windows run the hidden launcher? ---
rem Windows Script Host is disabled on some locked-down PCs.
rem If that is the case, nothing can start hidden at logon.
del /f /q "%TEMP%\kb_wsh_test.txt" > nul 2>&1
> "%TEMP%\kb_wsh_test.vbs" echo Set f = CreateObject("Scripting.FileSystemObject").CreateTextFile("%TEMP%\kb_wsh_test.txt", True)
>> "%TEMP%\kb_wsh_test.vbs" echo f.WriteLine "ok"
>> "%TEMP%\kb_wsh_test.vbs" echo f.Close
wscript.exe //nologo "%TEMP%\kb_wsh_test.vbs" > nul 2>&1
if exist "%TEMP%\kb_wsh_test.txt" (
    echo    [OK]      Windows Script Host works
) else (
    echo    [FAIL]    Windows Script Host is blocked on this PC.
    echo              The hidden launcher cannot work - tell me and I
    echo              will switch you to a scheduled task instead.
)
del /f /q "%TEMP%\kb_wsh_test.vbs" "%TEMP%\kb_wsh_test.txt" > nul 2>&1
echo.

echo   --- 5. git ---
git rev-parse --is-inside-work-tree > nul 2>&1
if errorlevel 1 (
    echo    [FAIL]    this folder is not a git repository
) else (
    for /f "delims=" %%B in ('git rev-parse --abbrev-ref HEAD') do echo    branch      : %%B
    for /f "delims=" %%C in ('git log -1 --format^=%%h" "%%s') do echo    last commit : %%C
    git diff-index --quiet HEAD -- > nul 2>&1
    if errorlevel 1 (
        echo    local edits : yes, waiting to be pushed
    ) else (
        echo    local edits : none
    )
)
echo.

if exist "%LOG%" (
    echo   --- 6. last lines of auto-sync.log ---
    echo.
    powershell -NoProfile -Command "Get-Content -Path '%LOG%' -Tail 15" 2>nul || type "%LOG%"
    echo.
)

echo  ===================================================
echo.
pause
exit /b 0

rem ---------------------------------------------------
:have
if exist "%~dp0%~1" (
    echo    [OK]      %~1
) else (
    echo    [MISSING] %~1
)
exit /b 0
