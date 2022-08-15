#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 <<-EOSQL
	CREATE USER walter WITH PASSWORD 'white';
	CREATE DATABASE boilerplate;
	GRANT ALL PRIVILEGES ON DATABASE boilerplate TO walter;
EOSQL
