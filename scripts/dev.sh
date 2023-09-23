#!/bin/bash

# create .env file
if [ ! -f .env ]; then
	cp .env.example .env
fi

docker run --name pg-nc -p  5432:5432 -e POSTGRES_PASSWORD=hello -e POSTGRES_USER=hello -e POSTGRES_DB=nepaliConnect -d postgres

docker start pg-nc

yarn install

nodemon index.js
