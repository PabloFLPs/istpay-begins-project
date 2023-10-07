# Node.js Project with Prisma and PostgreSQL in Docker

This is a NodeJS simple shopping project that uses Prisma as Object-Relational Mapping (ORM) and PostgreSQL as database provider, running in a Docker container. Follow the guide below to set up and run the project.

## Prerequisites

Be sure that you have NodeJS, Yarn and Docker installed on your PC:

- [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/)
- [Docker](https://docs.docker.com/get-docker/)

## Installing dependencies

1. Run the following command to install the dependencies:

```
yarn
```

## Setting up PostgreSQL Database with Docker

1. Run the `docker-compose.yml` file to mount a Docker container by using:

```
docker-compose up
```

## Setting up the Database with Prisma

1. Prisma will create the database tables utilizing the models (`Users`, `Products`, `PurchaseOrders` and `PurchaseOrderItems`) specified on "schema.prisma" file. It is done by using:

```
yarn prisma db push
```

If no error was thrown, then you can finally run the application using one of the following commands:

```
yarn dev // this one uses Nodemon for fast refreshing (development environment).

yarn start // this one uses Node to run the index.js.
```
