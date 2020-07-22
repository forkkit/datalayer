# Copyright (c) Datalayer https://datalayer.io
# Distributed under the terms of the Apache License, Version 2.0
# https://www.apache.org/licenses/LICENSE-2.0.txt

.DEFAULT_GOAL := default

.SILENT: init

.PHONY: port-forward

help: ## display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

default: help ## default target is help

build: endpoints-build ui-deps ui-build ## build

clean: endpoints-clean ui-clean ## clean

ui-clean: ## ui-clean
#	yarn clean
	find . -name node_modules | xargs rm -fr {} || true
	find . -name lib | xargs rm -fr {} || true
	find . -name build | xargs rm -fr {} || true
	find . -name yarn.lock | xargs rm {} || true
	find . -name yarn-error.log | xargs rm {} || true
	find . -name tsconfig.tsbuildinfo | xargs rm {} || true

ui-ls: ## ui-ls
	yarn ls

ui-deps: ## ui-deps
#	cd jupyter/react/themes/light && yarn build
# 	cd ./dsp/storybook && yarn install && cd node_modules/\@datalayer && rm -fr widgets && ln -s ./../../../dsp/widgets && cd ./../../ && yarn build
#	cd ./jupyter/react/storybook && yarn install && cd node_modules && mkdir \@datalayer && cd \@datalayer && ln -s ./../../../themes/light jupyter-react-mui-theme-light && yarn build
#	sed 's|useEslintrc: false|useEslintrc: true|g' node_modules/@react-workspaces/react-scripts/config/webpack.config.js > /tmp/webpack.config.js
#	mv /tmp/webpack.config.js node_modules/@react-workspaces/react-scripts/config/webpack.config.js
	yarn install
	rm -fr ./node_modules/\@types/react-native

ui-build: ## ui-build
#	cd ${DLAHOME}/src/dsp/widgets && yarn build && cd ${DLAHOME}/src && yarn build
#	cd dsp/widgets && yarn build
	yarn build

endpoints: endpoints-build ## endpoints

endpoints-clean: ## endpoints-clean

endpoints-build: ## endpoints-build
	@exec dla env-dev endpoints

pf: ## port-forward
	yarn pf

start: ## start
	@exec yarn start

ui: ui-clean ui-deps ui-build ## ui

all: endpoints ui ## all

warning:
	echo "\x1b[34m\x1b[43mEnsure you have run \x1b[1;37m\x1b[41m conda deactivate \x1b[22m\x1b[34m\x1b[43m before invoking this.\x1b[0m"

build: ## build
	@exec ./../bin/dla build

clean: ## clean
	@exec ./../bin/dla clean

env-rm: warning ## env-rm
	conda remove -y --name datalayer --all || true
	conda remove -y --name py38 --all || true
	conda remove -y --name py27 --all || true
	conda remove -y --name node8 --all || true

env: warning ## env
	SLUGIFY_USES_TEXT_UNIDECODE=yes conda create -y -n py27 python=2.7
	SLUGIFY_USES_TEXT_UNIDECODE=yes conda create -y -n py38 python=3.8
	SLUGIFY_USES_TEXT_UNIDECODE=yes conda env create -n datalayer -f ${DLAHOME}/etc/conda/datalayer-dev.yml
	@exec echo "You can now further populate the datalayer environment."
	@exec echo "-------------------------------------------------------"
	@exec echo "conda activate datalayer"
	@exec echo "export PATH=/opt/miniconda3/envs/datalayer/bin:${PATH}"
	@exec echo "make env-dev"
	@exec echo "-------------------------------------------------------"

env-dev: ## env-dev
	@exec ./../bin/dla env-dev all
	$(MAKE) env-status

env-status: ## env-status
	@exec ./../bin/dla env-status

init: ## init
	eval $(DOCKER_ENV)
	
install: ## install
	@exec ./../bin/dla install
