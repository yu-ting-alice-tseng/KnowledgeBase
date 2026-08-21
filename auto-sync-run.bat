@echo off
rem ===================================================
rem  Hidden runner for auto-push.bat.
rem
rem  install-auto-sync.bat drops a shortcut in the
rem  Startup folder that launches this file with no
rem  window, so the sync just runs from logon onwards.
rem  Everything auto-push.bat would have printed goes
rem  into auto-sync.log next to this file.
rem
rem  KEEP THIS FILE PURE ASCII. cmd.exe reads .bat files
rem  byte by byte, and non-ASCII text can make it split
rem  a line mid-character and run the rest as a command.
rem ===================================================

cd /d "%~dp0"

set "LOG=%~dp0auto-sync.log"
set "STOP=%~dp0stop-sync.flag"

rem A hidden window can never answer a credential prompt,
rem so make git fail fast instead of hanging out of sight.
set "GIT_TERMINAL_PROMPT=0"

rem Keep the log from growing forever: start fresh past ~1 MB.
if exist "%LOG%" for %%A in ("%LOG%") do if %%~zA GTR 1000000 del /f /q "%LOG%" > nul 2>&1

:run
echo. >> "%LOG%"
echo =================================================== >> "%LOG%"
echo  auto-sync started %date% %time% >> "%LOG%"
echo =================================================== >> "%LOG%"

call "%~dp0auto-push.bat" >> "%LOG%" 2>&1

rem The flag is only ever created by uninstall-auto-sync.bat,
rem so its presence means "stopped on purpose". Anything
rem else that ends the loop is a crash worth restarting.
if exist "%STOP%" goto done

echo [%time:~0,8%] sync ended unexpectedly - restarting in 60s >> "%LOG%"
call :sleep 60
goto run

:done
echo [%time:~0,8%] stopped on request - will not restart until you run install-auto-sync.bat >> "%LOG%"

goto :eof


rem ---------------------------------------------------
rem  Wait N seconds. timeout needs a console it can read
rem  from, which a hidden run may not have, so fall back
rem  to ping rather than spinning the CPU.
rem ---------------------------------------------------
:sleep
timeout /t %~1 /nobreak > nul 2>&1
if errorlevel 1 ping -n %~1 -w 1000 127.0.0.1 > nul 2>&1
exit /b 0
