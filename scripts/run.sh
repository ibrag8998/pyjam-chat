#!/usr/bin/env bash
function runback {
    cd ../backend
    python manage.py runserver &
    cd -
}

function runfront {
    cd ../frontend
    npm run serve
    cd -
}

runback && runfront
