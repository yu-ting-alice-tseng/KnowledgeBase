@echo off
chcp 65001 > nul
:: Installs the automatic folder sync (run once).
:: All the logic lives in install-auto-sync.ps1.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0install-auto-sync.ps1"
pause
