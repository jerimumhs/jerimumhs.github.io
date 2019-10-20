################################################################################
# Docker-compose vue service commands for dev
################################################################################

dist:
	docker-compose run vue npm run build

lint:
	docker-compose run vue npm run lint

test:
	docker-compose run vue npm run test

bash:
	docker-compose run django bash

up:
	docker-compose up -d

logs:
	docker-compose logs -f

down:
	docker-compose down

build:
	docker-compose build
