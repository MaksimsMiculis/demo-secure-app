### Installation

Install all dependencies from the root and frontend/backend directories

`npm install`

### Start docker containers with Postgress DB and Adminer (database managment tools)
`cd ./demo-secure-app$ docker-compose up`

### Start local nest.js backend
`cd ./demo-secure-app/backend$ npm run start`

### Start local angular frontend
`cd ./demo-secure-app/frontend$ ng serve`

### Database managing
Navigate to `localhost:8081` and select:
```
System : PostreSQL

Server : database

Username : demo

Password : demo

Database : demo
```
### Navigation

`localhost:4200` - home page

`localhost:4200/secure` - secured page (user:user)

`localhost:4200/public` - page displaying data from the database
