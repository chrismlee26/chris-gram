# CHRISGRAM

![GitHub commit activity](https://img.shields.io/github/commit-activity/y/chrismlee26/chris-gram)
![GitHub top language](https://img.shields.io/github/languages/top/chrismlee26/chris-gram)
![GitHub repo size](https://img.shields.io/github/repo-size/chrismlee26/chris-gram)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/chrismlee26/chris-gram/latest)
![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/chrismlee26/chris-gram)
![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fchrisgram-client.dev.chrislee.wtf)

- A Full stack Web Application
- Built in React+Redux, MongoDB, Express, Node (MERN)
- UI in MaterialUI
- ~~Deployed with Docker -> CapRover -> DigitalOcean~~
  - Removed deployment, code refactoring to serverless.
<br>
- View serverless v2 [here](https://github.com/chrismlee26/chris-gram-next)

## Description

- chrisgram v0.3.1 is image upload web application and social media platform allowing users to upload, share and like photos.
- Now containerized with Docker Compose
- ~~Deployed to CapRover (PaaS) and Digital Ocean (VM)~~

- ~~Front-End is hosted on https://chrisgram-client.dev.chrislee.wtf // http://localhost:3000~~
- ~~Back-End is hosted on https://chrisgram-server.dev.chrislee.wtf // http://localhost:5000~~
- ~~MongoDB server is running on http://localhost:27017 // port 27017~~

## Build Container

To build back-end (node) container, type:

```
docker build -t chrisgram-server
```

To build front-end (React) container, type:

```
docker build -t chrisgram-client
```

To build the entire application, type:

```
docker-compose build
```

## Run Container

To run the multi-container system, type:

```
docker-compose up
```

To run the back-end (node), type:

```
docker run -p 5000:5000 chrisgram-client
```

To run the front-end (React), type:

```
docker run -p 3000:3000 chrisgram-client
```

## Install Dependencies

```
npm i
```

## Installed Packages and Dependencies

- React + Redux + Thunk
- axios
- momentjs
- dotenv
- Express + Mongoose + Nodemon
- react-file-base64 (file upload)

## Planned Updates

✅ Containerize with Docker
✅ Deployment with CapRover
3. Remove props drilling with Redux {store}
4. Add CSS styling
5. Authentication with JWT
6. User Accounts & Sign-In
7. Multiple Pages
8. Comments for photos

## Run Application

Back-End is in folder Server. To run the node/express server, navigate to /server/ and type:

```
npm start
```

Front-End is in folder Client. To run the React web application, navigate to /client/ and type:

```
npm start
```
