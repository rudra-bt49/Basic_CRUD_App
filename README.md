# Basic_CRUD_App
This is my basic application for performing and testing CRUD operations.

# Tech Stack
Javascript 
NodeJS
ExpressJS
Postgresql - databse
Postman - API Testing
Docker - (Using postgres:latest image)

# Docker
:O docker run --name pg-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=rudra12345678 -e POSTGRES_DB=videotube -p 5432:5432 -v pgdata:/var/lib/postgresql/data -d postgres

:O docker-compose.yml to run multiple docker containers together
:O docker compose up -d : to run the my-postgres-db container

# .gitignore

# package.json
:O start script added

# server.js
:O NodeJS sever creation

# Basic Project Setup
:O models - database schema
:O routes - routing
:O controllers - Business Logic
:O utils - utilities
:O config - Database connection
:O middleware - functions
:O public - storing assets : images, audio, video, files
