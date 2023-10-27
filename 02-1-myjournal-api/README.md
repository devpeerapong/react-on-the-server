# API Server

## Requirement

Read the requirement setup [here](../README.md#requirement)

## Initial Setup

- run `pnpm install` to install the dependency
- run `pnpm prisma db push` to initialize the database
- run `pnpm seed` to seed the database
- run `pnpm prisma generate` to generate [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)

## Start server

- run `pnpm start`
- visit http://localhost:4444

## API Documentation

| Operation      | HTTP Method | Path                      |
| -------------- | ----------- | ------------------------- |
| List Article   | GET         | http://localhost:4444     |
| Create Article | POST        | http://localhost:4444     |
| Read Article   | GET         | http://localhost:4444/:id |
| Update Article | PUT         | http://localhost:4444/:id |
| Remove Article | DELETE      | http://localhost:4444/:id |
