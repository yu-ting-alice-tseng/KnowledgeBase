@echo off
chcp 65001 > nul
setlocal EnableExtensions

:: ------------------------------------------------------------------
::  Fixes the error "fatal: bad object refs/desktop.ini"
::  Windows / OneDrive drops desktop.ini files inside .git, and git
::  takes them for references and refuses to work.
::  This script deletes them (only inside .git) and checks the repo.
::  KEEP THIS FILE PURE ASCII.
:: ------------------------------------------------------------------

cd /d "%~dp0"

if not exist ".git" (
    echo This folder does not contain a git repository.
    pause
    exit /b 1
)

echo Deleting desktop.ini files inside .git...
del /s /f /q /a ".git\desktop.ini"

echo.
echo Checking the repository...
git fsck --no-progress --connectivity-only

echo.
echo Test sync...
git pull --rebase --autostash origin main

echo.
echo Done.
pause
