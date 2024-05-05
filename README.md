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
