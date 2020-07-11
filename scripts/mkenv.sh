#!/usr/bin/env bash
function ask_env_vars {
    printf "This project uses PostgreSQL. Fill fields below to connect to database\n\n"

    read -p "DB_NAME: " db_name
    read -p "DB_USER: " db_user
    read -sp "DB_PASSWORD: " db_password

    printf "\nNow, let's talk about host and port\n\n"

    read -p "DB_HOST [localhost]: " db_host
    db_host=${db_host:-localhost}

    read -p "DB_PORT [5432]: " db_port
    db_port=${db_port:-5432}
}

function write_env {
    code="\
SECRET_KEY=\"s%&z)@h2p9kml&s##*(ucgv)_+979ebd%h1ml(yfj%a*xxi8f+\"
DEBUG=True

DB_NAME=$db_name
DB_USER=$db_user
DB_PASSWORD=$db_password
DB_HOST=$db_host
DB_PORT=$db_port"
    echo "$code" > ../.env
}

ask_env_vars

write_env
