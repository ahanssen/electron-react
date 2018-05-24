#!/bin/bash

PACK_FILE=$1
BASEDIR=$(pwd)

cd ./ui && npm i && npm run build

if [ "$PACK_FILE" = "pack" ]; then
	cd $BASEDIR && npm i && npm run pack
else
	cd $BASEDIR && npm i && npm run dist
fi
