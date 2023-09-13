docker_compose = docker compose --file ./container/docker/docker-compose.yaml --env-file ./container/docker/.env

# Mute all `make` specific output. Comment this out to get some debug information.
.SILENT:

# .DEFAULT: If the command does not exist in this makefile
.DEFAULT: help

help:
	@echo "Usage:"
	@echo "     make [command]"
	@echo
	@echo "Available commands:"
	@grep '^[^#[:space:]].*:' Makefile | grep -v '^default' | grep -v '^\.' | grep -v '=' | grep -v '^_' | sed 's/://' | xargs -n 1 echo ' -'

########################################################################################################################
build:
	sudo $(docker_compose) build

up:
	sudo $(docker_compose) up -d

down:
	sudo $(docker_compose) down

top:
	$(docker_compose) top

shell-redis:
	$(docker_compose) exec redis bash
