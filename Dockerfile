FROM node:16-alpine

WORKDIR /usr/front-bookhub/app

COPY . .

EXPOSE 8085
