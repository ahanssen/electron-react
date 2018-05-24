set PACK_FILE=%1
set BASEDIR=%%~dpF

cd ./ui && npm i && npm run build

IF "%PACK_FILE"=="pack" goto buildpack
IF "%PACK_FILE"!="pack" goto builddist

:buildpack
cd %BASEDIR% && npm i && npm run pack

:builddist
cd %BASEDIR% && npm i && npm run dist