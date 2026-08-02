@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion
cd /d "%~dp0"

rem ===================================================
rem  Two-way auto sync.
rem    local changes  : commit, pull --rebase, then push
rem    no changes     : still pull every 60s to pick up
rem                     work pushed from anywhere else
rem    success is reported only when push really worked;
rem    failures print git's own error message
rem
rem  KEEP THIS FILE PURE ASCII. cmd.exe reads .bat files
rem  byte by byte, and non-ASCII text combined with
rem  chcp 65001 makes it split lines mid-character and
rem  run the remainder as a command.
rem ===================================================

set "BRANCH=main"
set "INTERVAL=10"
set "RETRY=60"
set "PULL_EVERY=6"
set /a "tick=0"
set /a "PULL_SECS=%PULL_EVERY%*%INTERVAL%"

title Auto-Sync [%BRANCH%] - %~dp0

git rev-parse --is-inside-work-tree > nul 2>&1
if errorlevel 1 (
    echo.
    echo  [ERROR] Not a git repository:
    echo          %CD%
    echo.
    pause
    exit /b 1
)

echo ===================================================
echo  [AUTO-SYNC] two-way sync is running
echo.
echo   folder : %CD%
echo   branch : %BRANCH%
echo   local changes  : checked every %INTERVAL%s, pushed when found
echo   remote updates : pulled every %PULL_SECS%s
echo.
echo   Please leave this window open.
echo ===================================================
echo.

:loop
set "FAILED=0"

call :clean_ini

git add -A
git diff-index --quiet HEAD --
if errorlevel 1 (
    call :sync_up
    if errorlevel 1 set "FAILED=1"
) else (
    set /a "tick+=1"
    if !tick! geq %PULL_EVERY% (
        set /a "tick=0"
        call :do_pull
        if errorlevel 1 set "FAILED=1"
    )
)

if "!FAILED!"=="1" (
    timeout /t %RETRY% > nul
) else (
    timeout /t %INTERVAL% > nul
)
goto loop


rem ---------------------------------------------------
rem  Local changes: commit, rebase onto remote, push
rem ---------------------------------------------------
:sync_up
echo [%time:~0,8%] change detected, syncing...

git commit -m "Auto-update: File changed" > nul
if errorlevel 1 (
    call :warn "commit failed - nothing was saved"
    exit /b 1
)

call :do_pull
if errorlevel 1 exit /b 1

git push origin %BRANCH% > "%TEMP%\autosync_push.log" 2>&1
if errorlevel 1 (
    echo.
    echo  --- git error ---
    type "%TEMP%\autosync_push.log"
    echo  -----------------
    call :warn "push FAILED - changes are committed locally but NOT on GitHub"
    exit /b 1
)

echo [%time:~0,8%] [OK] pushed to GitHub
echo.
exit /b 0


rem ---------------------------------------------------
rem  Pull with rebase; on conflict restore and report
rem ---------------------------------------------------
:do_pull
for /f %%i in ('git rev-parse HEAD') do set "BEFORE=%%i"

git pull --rebase origin %BRANCH% > "%TEMP%\autosync_pull.log" 2>&1
if errorlevel 1 (
    git rebase --abort > nul 2>&1
    echo.
    echo  --- git error ---
    type "%TEMP%\autosync_pull.log"
    echo  -----------------
    call :diag
    call :warn "pull FAILED or conflicted - restored previous state, fix it by hand then reopen this window"
    exit /b 1
)

for /f %%i in ('git rev-parse HEAD') do set "AFTER=%%i"
if not "!BEFORE!"=="!AFTER!" (
    echo [%time:~0,8%] [PULL] got new updates from GitHub
)
exit /b 0


rem ---------------------------------------------------
rem  Remove desktop.ini that OneDrive drops inside .git
rem  (it makes git fail with "bad object refs/desktop.ini")
rem ---------------------------------------------------
:clean_ini
if exist ".git\" del /f /s /q /a ".git\desktop.ini" > nul 2>&1
exit /b 0


rem ---------------------------------------------------
rem  Print enough state to diagnose a failure
rem ---------------------------------------------------
:diag
echo.
echo  --- current state ---
echo  [commits here but not on GitHub]
git log --oneline origin/%BRANCH%..HEAD
echo  [working tree]
git status --short
echo  ---------------------
exit /b 0


rem ---------------------------------------------------
:warn
echo.
echo  ***************************************************
echo   [%time:~0,8%] WARNING: %~1
echo  ***************************************************
echo.
exit /b 0
