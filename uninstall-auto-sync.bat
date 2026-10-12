@echo off
chcp 65001 > nul
:: Turns the automatic sync off.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0uninstall-auto-sync.ps1"
pause
