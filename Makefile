#!/usr/bin/make -f

.PHONY: setup
setup:
	gem install bundle
	bundle install

.PHONY: serve
serve:
	bundle exec jekyll serve

.PHONY: build
build:
	bundle exec jekyll build

.PHONY: deploy
deploy: build empty-bucket
	aws s3 cp _site s3://michael.johnsey.me --recursive --profile personal

.PHONY: empty-bucket
empty-bucket:
	aws s3 rm s3://michael.johnsey.me/* --profile personal
