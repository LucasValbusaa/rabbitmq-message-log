FROM node:16.17.0-alpine3.15

RUN apk update && apk upgrade && apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

USER node

WORKDIR /home/node/express  