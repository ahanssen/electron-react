#!/bin/bash

mkdir compiled

cd electron-ui

npm i && npm run build

cp ./build ../compiled