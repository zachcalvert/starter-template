#!/bin/bash

# Pull changes from the main branch of the git repository
git pull origin main

# Build the Docker images
sudo docker compose build

# Stop and remove any existing containers
docker compose down

# Start the containers in detached mode
docker compose up -d
