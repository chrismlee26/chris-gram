FROM node:17-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

COPY package-lock.json /usr/src/app/package-lock.json

RUN npm install

ADD . /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]