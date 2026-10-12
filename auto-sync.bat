@echo off
chcp 65001 > nul
setlocal EnableExtensions

:: ------------------------------------------------------------------
::  KnowledgeBase - automatic sync with GitHub (branch main)
::  One pass = local commit -> pull --rebase -> push
::  Started by the Windows task "KnowledgeBase Auto Sync" through
::  auto-watch.ps1 (see install-auto-sync.bat). Can also be run by hand.
::
::  KEEP THIS FILE PURE ASCII: cmd.exe misreads non-ASCII text.
:: ------------------------------------------------------------------

cd /d "%~dp0"
set "LOG=%~dp0auto-sync.log"

:: Windows / OneDrive sometimes drops desktop.ini files inside .git,
:: which breaks git ("fatal: bad object refs/desktop.ini").
if exist ".git" del /s /f /q /a ".git\desktop.ini" > nul 2>&1
set GIT_TERMINAL_PROMPT=0
git config gc.auto 0

call :log "--- Sync started ---"

:: 0. Always work on main
for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set "BRANCH=%%b"
if not "%BRANCH%"=="main" (
    call :log "Current branch is %BRANCH% - switching to main."
    git checkout main >> "%LOG%" 2>&1
    if errorlevel 1 (
        call :log "FAILED to check out main - sync aborted."
        goto :end
    )
)

:: 1. Commit local changes, if any
git add -A
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "Auto-update: %date% %time%" >> "%LOG%" 2>&1
    call :log "Local changes committed."
) else (
    call :log "No local changes."
)

:: 2. Fetch remote commits BEFORE pushing
git pull --rebase --autostash origin main >> "%LOG%" 2>&1
if errorlevel 1 (
    git rebase --abort > nul 2>&1
    call :log "Pull FAILED (conflict or network) - nothing was pushed, fix by hand."
    goto :end
)

:: 3. Push to GitHub
git push origin main >> "%LOG%" 2>&1
if errorlevel 1 (
    call :log "Push FAILED - will retry on the next pass."
) else (
    call :log "Sync finished."
)

:end
endlocal
exit /b 0

:log
>> "%LOG%" echo [%date% %time%] %~1
exit /b 0
