FROM node:17.0.1

WORKDIR /usr/dev/courses/few2.3/chris-gram

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install

EXPOSE 5000

CMD ["index.js"]