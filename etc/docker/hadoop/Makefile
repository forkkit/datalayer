# Copyright (c) Datalayer https://datalayer.io
# Distributed under the terms of the Apache License, Version 2.0
# https://www.apache.org/licenses/LICENSE-2.0.txt

.PHONY: clean build push start connect stop rm

help: ## display this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

default: all ## default target is all.

all: clean install build ## make clean install build.

clean: ## clean.

build: ## build the image.
	cd base && ./build.sh && cd ..
	cd dn && ./build.sh && cd ..
	cd nn && ./build.sh && cd ..

push: ## push the image.
	cd base && ./push.sh && cd ..
	cd dn && ./push.sh && cd ..
	cd nn && ./push.sh && cd ..

start: ## start the container.

connect: ## connect to the container.

logs: ## show container logs
	docker logs hdfs -f

stop: ## stop the container.
	docker stop hdfs

rm: ## remove the container.
	docker -f rm hdfs
