FROM node:10.16-alpine

WORKDIR /usr/dev/courses/few2.3/chris-gram

COPY ./package.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]