#!/usr/bin/env bash
cd ..
printf " => Installing base python requirements ...\n\n"
pip install -r requirements.txt
printf "\n => Installing base python requirements ...\n\n"
pip install -r requirements_dev.txt
cd -

cd ../frontend
printf "\n => Installing node packages ...\n\n"
npm i
cd -
