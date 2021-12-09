FROM node:17-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

COPY package-lock.json /usr/src/app/package-lock.json

RUN npm install --silent

ADD . /usr/src/app

EXPOSE 5000

CMD ["npm","start"]