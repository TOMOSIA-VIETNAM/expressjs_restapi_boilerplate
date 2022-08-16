# Example how to use Express and TypeORM with TypeScript

1. clone repository 
2. run `npm i`
3. edit `ormconfig.json` and change your database configuration (you can also change a database type, but don't forget to install specific database drivers)
4. run `npm start`
5. open `http://localhost:3000/posts` and you'll empty array
6. use curl, postman or other tools to send http requests to test your typeorm-based API

## How to use CLI?

1. install `typeorm` globally: `npm i -g typeorm`
2. run `typeorm -h` to show list of available commands

## Use docker for development

* Build all services

```
$ docker-compose up -d
```

* Running migrations

```
$ docker-compose run node sh -c "npm run migration:run"
```

* Running seeder

```
$ docker-compose run node sh -c "npm run seed:run"
```

* Access to pgAdmin

```
http://localhost:5050/

user: postgres@admin.com
password: postgres
```
