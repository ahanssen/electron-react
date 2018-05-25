set PACK_FILE=%1
set BASEDIR=%cd%

cd ./ui && npm i && npm run build

IF "%PACK_FILE%"=="pack" (
  cd "%BASEDIR%" && npm i && npm run pack
) ELSE (
  cd "%BASEDIR%" && npm i && npm run dist
)
