start startset.bat
timeout /t 43200 /nobreak
taskkill /FI "WINDOWTITLE eq startset"
timeout /t 5 /nobreak
start start.bat
exit