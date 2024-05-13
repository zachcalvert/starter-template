This repo is a starter template for building dockerized full-stack applications utilizing Django and React. 

![Screenshot 2024-05-13 at 9 05 55 AM](https://github.com/zachcalvert/starter-template/assets/9372390/0b7f5cff-c5ba-4c00-b6ad-23d315b3b7c9)


## Setup

### Build the services
`docker-compose -f docker-compose-dev.yml build`

### Start the services
`docker-compose -f docker-compose-dev.yml up`

### Create an admin user
In a new terminal: `docker-compose -f docker-compose-dev.yml run --rm django python manage.py createsuperuser`

### Local URLs
- Web client is accessible at: `http://localhost:3000/`
- Django admin is accessible at: `http://localhost:8000/admin/`
- API root is accessible at: `http://localhost:8000/api/`

### Run the tests
`docker compose -f docker-compose-dev.yml run --rm tests`
