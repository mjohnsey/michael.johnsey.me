#!/usr/bin/make -f

.PHONY: setup
setup:
	gem install bundle
	bundle install

.PHONY: serve
serve:
	bundle exec jekyll serve -d _site

.PHONY: build
build:
	bundle exec jekyll build -d docs
