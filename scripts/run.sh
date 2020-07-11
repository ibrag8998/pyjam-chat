#!/usr/bin/env bash
function runfront {
    cd ../frontend
    npm run serve &
    cd -
}

function runback {
    cd ../backend
    python manage.py runserver &
    cd -
}

runfront && runback
