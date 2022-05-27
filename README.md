# BB Desafio
Projeto Desafio BB quarkus + Angular

## Getting Started with script

Run this script to build Quarkus, Angular and to bring up docker-compose:
```bash
$ chmod +x run-after-local-build.sh
$ ./run-with-local-build.sh
```

## Getting Started manually

Build the Quarkus project:
```bash
$ cd quarkus/
$ ./mvnw package
```

Build the Angular project:
```
$ cd angular/
$ npm install
$ ng build
```

Bring up the following docker-compose.yml:

```yml
version: "3.8"

services:
  
  quarkus-desafio:
    container_name: quarkus-desafio
    image: quarkus-desafio/quarkus-jvm:1.0
    build:
      context: ./quarkus/
      dockerfile: ./src/main/docker/Dockerfile.jvm
    ports:
      - 8080:8080
    networks:
      - indicator
    
  bb-indicadores:
    container_name: bb-indicadores
    image: bb-indicadores/angular:1.0
    build:
      context: ./angular/
      dockerfile: ./Dockerfile
    ports:
      - 80:80
    networks:
      - indicadores
    depends_on:      
      - heroku-quarkus
    environment:      
      - API_URL=http://localhost:8080
      - PORT=80

networks:
  heroku-net:
    driver: bridge
```

Access the Quarkus Swagger UI at http://localhost:8080/q/swagger-ui and the Angular front end at http://localhost