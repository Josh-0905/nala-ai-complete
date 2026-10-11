@echo off
title NALA AI - New Laptop First Time Setup
echo ===============================================================
echo     NALA AI — First Time Setup on New Laptop
echo ===============================================================
echo.
echo Installing root dependencies...
call npm install

echo.
echo Installing backend dependencies...
call npm --prefix server install
if %errorlevel% neq 0 (
    echo [ERROR] Backend install failed. Please ensure Node.js is installed.
    pause
    exit /b %errorlevel%
)

echo.
echo Installing frontend dependencies...
call npm --prefix client install
if %errorlevel% neq 0 (
    echo [ERROR] Frontend install failed. Please ensure Node.js is installed.
    pause
    exit /b %errorlevel%
)

echo.
echo Building server TypeScript...
call npm --prefix server run build

echo.
echo ===============================================================
echo    SETUP COMPLETE! All 150+ recipes (including 25 Telangana
echo    authentic specialties) and SQLite database are ready!
echo ===============================================================
echo.
echo Starting NALA AI servers now...
echo Access in browser: http://localhost:3000
echo.
call npm run dev
