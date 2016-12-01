# Node starter kit

## Features:

- Docker for production and dev
- Unittests
- linter
- healthz
- ssl
- newrelic

## Development

To run service in dev mode run command:
```
docker-compose up
```

To access app container run
```
 docker-compose exec app bash
```

From it install npm deps
```
npm i
```
and run
```
npm run dev
```
to start service in dev mode.

## Project structure

- index.js - entrypoint, webserver
- /src - production code
- /\__tests\__ - unittests

## Enviroment variables

- PORT
- SSLCERT_KEY
- SSLCERT_CRT
- NR_APPNAME
- NR_LICENCEKEY
