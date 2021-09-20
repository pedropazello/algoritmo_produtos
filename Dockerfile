FROM node:16.8.0

RUN mkdir /myapp
WORKDIR /myapp

COPY . /myapp
