NAME = datalayer/openldap

.PHONY: all build build-nocache

all: build

build:
	docker build -t $(NAME):${DLAVERSION} --rm .

build-nocache:
	docker build -t $(NAME):$(VERSION) --no-cache --rm .

push: ## push the image.
	@exec docker push \
	    $(NAME):${DLAVERSION}
