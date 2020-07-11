# PyJAM Chat

Chatting application built with Python, JavaScript, APIs, Markup. In development.

## How To Launch

First of all, make sure you have following packages installed:

- OS packages:

  - postgresql
  - node
  - npm
  - python3
  - pip

- PostgreSQL configuration:

  - Install postgres: [link](https://www.postgresql.org/download/)

  - Open `psql` shell with `postgres` user:

    ```shell
    sudo -u postgres psql postgres
    ```

  - Set postgres admin password:

    ```psql
    \password postgres
    ```

  - Create and configure new user. Replace `_` with username you want:

    ```psql
    create user _ with password 'your-password-here';
    alter role _ set client_encoding to 'utf8';
    alter role _ set default_transaction_isolation to 'read committed';
    alter role _ set timezone to 'Europe/Moscow';
    ```

  - Create database. Replace `_` with username from previous step:

    ```psql
    create database your_db owner _;
    ```

  - Leave console:

    ```psql
    \q
    ```

- Python packages:

  - See `requirements.txt` and `requirements_dev.txt`. From root directory run:

    ```shell
    pip install -r requirements.txt
    pip install -r requirements_dev.txt
    ```

- NodeJS packages:

  - From root directory, change to `frontend` and run:

    ```shell
    npm i
    ```

Now, head over to `scripts` directory and run `./mkenv.sh` (make sure it is executable)

Create superuser and run, split your terminal and run both `./frontrun.sh` and `./backrun.sh`
from `scripts` directory
