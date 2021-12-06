# CHRISGRAM

![GitHub commit activity](https://img.shields.io/github/commit-activity/y/chrismlee26/chris-gram)
![GitHub top language](https://img.shields.io/github/languages/top/chrismlee26/chris-gram)
![GitHub repo size](https://img.shields.io/github/repo-size/chrismlee26/chris-gram)

- Add Badges for

  - Image Size
  - Build Status
  - Website Monitoring

- A Full stack Web Application
- Built in React+Redux, MongoDB, Express, Node (MERN)
- UI in MaterialUI

## Description

- chrisgram v0.2.0 is image upload web application and social media platform allowing users to upload, share and like photos.
- Now containerized with Docker Compose & CapRover (PaaS)

- Front-End is hosted on localhost port 3000
- Back-End is hosted on localhost port 5000
- MongoDB server is running on localhost port 27017

## Build Container

To build back-end (node) container, type:

```
docker build -t chris-gram-server
```

To build Front-End (React) Container, type:

```
docker build -t chris-gram-client
```

To build the entire application, type:

```
docker-compose build
```

To start the multi-container system, type:

```
docker-compose up
```

## Run Container

```
TBA
```

## Install Dependencies

```
npm i
```

## Packages and Dependencies

- React + Redux + Thunk
- axios
- momentjs
- dotenv
- Express + Mongoose + Nodemon
- react-file-base64 (file upload)

## Planned Updates

1. Containerize with Docker
2. Deployment with CapRover
3. Remove props drilling with Redux {store}
4. Add CSS styling
5. Authentication with JWT
6. User Accounts & Sign-In
7. Multiple Pages
8. Comments for photos

## Usage

Back-End is in folder Server. To run the express API & mongo server, navigate to /server/ and type:

```
npm start
```

Front-End is in folder Client. To run the React web application, navigate to /client/ and type:

```
npm start
```
