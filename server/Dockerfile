FROM node:10.16-alpine

RUN mkdir -p /usr/dev/courses/few2.3/chris-gram
WORKDIR /usr/dev/courses/few2.3/chris-gram

COPY ./package.json ./

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]