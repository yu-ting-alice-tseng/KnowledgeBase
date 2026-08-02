@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion
cd /d "%~dp0"

rem ===================================================
rem  雙向自動同步
rem    - 本機有變動 -> commit + pull --rebase + push
rem    - 沒有變動時 -> 每 60 秒仍會 pull 一次遠端更新
rem    - 成功訊息依實際結果顯示，失敗會明確警告
rem ===================================================

set "BRANCH=main"
set "INTERVAL=10"
set "RETRY=60"
set "PULL_EVERY=6"
set /a "tick=0"
set /a "PULL_SECS=%PULL_EVERY%*%INTERVAL%"

title Auto-Sync [%BRANCH%] - %~dp0

rem --- 啟動前檢查 ---
git rev-parse --is-inside-work-tree > nul 2>&1
if errorlevel 1 (
    echo.
    echo  [錯誤] 這個資料夾不是 git repository：
    echo         %CD%
    echo.
    pause
    exit /b 1
)

echo ===================================================
echo  [AUTO-SYNC] 雙向同步監控中
echo.
echo   資料夾 : %CD%
echo   分支   : %BRANCH%
echo   本機變動 每 %INTERVAL% 秒檢查一次，有變動就上傳
echo   遠端更新 每 %PULL_SECS% 秒自動拉取一次
echo.
echo   請不要關閉這個視窗
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
rem  本機有變動：commit -> pull --rebase -> push
rem ---------------------------------------------------
:sync_up
echo [%time:~0,8%] 偵測到變動，開始同步...

git commit -m "Auto-update: File changed" > nul
if errorlevel 1 (
    call :warn "commit 失敗，變動尚未儲存"
    exit /b 1
)

call :do_pull
if errorlevel 1 exit /b 1

git push origin %BRANCH% > "%TEMP%\autosync_push.log" 2>&1
if errorlevel 1 (
    echo.
    echo  --- git 的實際錯誤訊息 ---
    type "%TEMP%\autosync_push.log"
    echo  --------------------------
    call :warn "push 失敗！變動已在本機 commit，但沒有上傳到 GitHub"
    exit /b 1
)

echo [%time:~0,8%] [OK] 已上傳到 GitHub
echo.
exit /b 0


rem ---------------------------------------------------
rem  從遠端拉取（rebase 模式，衝突時自動還原並警告）
rem ---------------------------------------------------
:do_pull
for /f %%i in ('git rev-parse HEAD') do set "BEFORE=%%i"

git pull --rebase origin %BRANCH% > "%TEMP%\autosync_pull.log" 2>&1
if errorlevel 1 (
    git rebase --abort > nul 2>&1
    echo.
    echo  --- git 的實際錯誤訊息 ---
    type "%TEMP%\autosync_pull.log"
    echo  --------------------------
    call :diag
    call :warn "pull 失敗或發生衝突，已還原成原本的狀態，請手動處理後再重開此視窗"
    exit /b 1
)

for /f %%i in ('git rev-parse HEAD') do set "AFTER=%%i"
if not "!BEFORE!"=="!AFTER!" (
    echo [%time:~0,8%] [下載] 已取得 GitHub 上的新更新
)
exit /b 0


rem ---------------------------------------------------
rem  清掉 OneDrive 在 .git 內產生的 desktop.ini
rem  （它會讓 git 報 "fatal: bad object refs/desktop.ini"）
rem ---------------------------------------------------
:clean_ini
if exist ".git\" del /f /s /q /a ".git\desktop.ini" > nul 2>&1
exit /b 0


rem ---------------------------------------------------
rem  失敗時印出足以判斷原因的現場資訊
rem ---------------------------------------------------
:diag
echo.
echo  --- 目前狀態 ---
echo  [本機有、遠端沒有的 commit]
git log --oneline origin/%BRANCH%..HEAD
echo  [工作區]
git status --short
echo  ----------------
exit /b 0


rem ---------------------------------------------------
:warn
echo.
echo  ***************************************************
echo   [%time:~0,8%] 警告：%~1
echo  ***************************************************
echo.
exit /b 0
