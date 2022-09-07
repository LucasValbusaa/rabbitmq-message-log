<h2 align="center">RabbitMQ logs messages</h2>

## 📋 Description

### This application is for simulate a log message use Rabbitmq between an Express and Nestjs servers.

## 💻 Technologies Used

- Typescript
- Nestjs
- Nodejs
- Docker
- RabbitMQ

## 📝 Clone and use

```bash
   # Clone the repository
   $ git clone https://github.com/LucasValbusaa/rabbitmq-message-log.git

   # Enter in folder
   $ cd rabbitmq

   # Run docker-compose
   $ docker-compose up
```

<br>

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Use express route to login with a valid user

- url: http://localhost:3001/api/login
- example_login_user: { name: 'lucas, password: '123' }

### Use express route to generate a log message on rabbitmq

- url: http://localhost:3001/api/data

<br>

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)

### Use nestjs route to obtain rabbitmq logs

- url: http://localhost:3000/rabbitmq/logs

<br>

![RabbitMQ](https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)

### Log in Rabbitmq UI

- url: http://localhost:15672
- user: guest
- password: guest

### Create a queue

- queue_name: nest

### Bind queue nest to a Exchenge amq.direct

- routing_key: nest_route
