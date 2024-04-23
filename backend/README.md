# [Node-Typescript-Boilerplate](https://blog.santoshshinde.com/skeleton-for-node-js-apps-written-in-typescript-444fa1695b30)  [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=santoshshinde2012_node-boilerplate&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=santoshshinde2012_node-boilerplate)![Github action workflow status](https://github.com/santoshshinde2012/node-boilerplate/actions/workflows/node.js.yml/badge.svg?branch=master)![CodeQL Analysis](https://github.com/santoshshinde2012/node-boilerplate/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)![njsscan Analysis](https://github.com/santoshshinde2012/node-boilerplate/actions/workflows/njsscan.yml/badge.svg?branch=master)
Skeleton for Node.js applications written in TypeScript


![Introductions](https://i.ibb.co/VHTZKB6/introductions.png)


## Purpose

Our main purpose with this Skeleton is to start server application with node js and typescript.

Try it!! I am happy to hear your feedback or any kind of new features.


## Common Features

- Quick start
    - Simple and Standard scaffolding
    - Based on Typescript Syntax
    - Simple & Global Enviroment Configuration
    - Global Error & Response Handler
    - Easily Add new feature
    - Request/Response Encryption & Decryption Implementation

- Contiuous Integration
    - Added Github Action Workflow
        - [sonarcloud.io](https://sonarcloud.io/summary/new_code?id=santoshshinde2012_node-boilerplate)
        - [snyk.io](https://app.snyk.io/org/santoshshinde2012/project/c040efe4-a06a-451d-9b01-be0be90ee42c)
        - [CodeQL](https://codeql.github.com/)
        - [njsscan](https://opensecurity.in/#engineering) is a static application testing (SAST) tool that can find insecure code patterns in your node.js applications

- Documentation Standards
    - Swagger Documentation Support
    - Postman Collections
    - Readme with instructions

- Test Coverage Maintenance
    - Integrated eslint, prettier and husky
    - Added Unit Test cases and Intgration Test Cases
    - 80% + Code Coverage

- Prodcution Ready Setup 
    - Follwed Production Ready Best Practices: Security
    - Integrated winston Logger
    - Added only used npm modules

## Core NPM Module

- [x] `express`, `@types/express`
- [x] `@types/node`
- [x] `typescript`
- [x] `dotenv`
- [x] `cors`
- [x] `helmet`
- [x] `http-status-codes`
- [x] `winston`

# [Start the application](https://blog.santoshshinde.com/skeleton-for-node-js-apps-written-in-typescript-444fa1695b30)

![Workflow](https://github.com/santoshshinde2012/node-boilerplate/blob/master/wiki/environment.jpg?raw=true)

## Start The application in Development Mode

- Clone the Application `git clone https://github.com/santoshshinde2012/node-boilerplate.git`
- Install the dependencies `npm install`
- Start the application `npm run dev`

## Start The application in Production Mode

- Install the dependencies `npm install`
- Create the build `npm run build`
- Start the application `npm run start`
- Before starting make sure to update your `.env` values for your refrence just check `.env.example`


## Project Structure

| Name                         | Description                                                 |
| ---------------------------- | ----------------------------------------------------------- |
| **wiki/**                    | You can add project documentation and insructions file here |
| **src/**                     | Source files                                                |
| **src/abstractions**         | Abstarct classes and Interfaces                             |
| **src/components**           | REST API Components & Controllers                           |
| **src/lib**                  | Reusable utilises and library source code like a logger     |
| **src/middleware/**          | Express Middlewares like error handler feature              |
| **build/**                   | Compiled source files will be placed here                   |
| **tests/**                   | Test cases will be placed here                              |
| **tests/helpers/**           | Helpers for test cases will be placed here                  |
| **tests/unit-tests/**        | Unit Test cases will be placed here                         |
| **tests/integration-tests/** | API routes (Integration) Test cases will be placed here     |

## Workflow

![Workflow](https://github.com/santoshshinde2012/node-boilerplate/blob/master/wiki/boilerplate-components.jpg?raw=true)


## Encryption

Set the `APPLY_ENCRYPTION` environment variable to `true` to enable encryption.

## Swagger API Documentation

The swagger documentation is available at the following url `${host}/docs`:  

[http://localhost:8080/docs](http://localhost:8080/docs)
## Default System Health Status API

- `${host}/api/system/info` - Return the system information in response
- `${host}/system/time` - Return the current time in response
- `${host}/system/usage` - Return the process and system memory usage in response
- `${host}/system/process` -  Return the process details in response
- `${host}/system/error` - Return the error generated object in response

![Swagger API Documentation](https://github.com/santoshshinde2012/node-boilerplate/blob/master/wiki/swagger-api-documentation.jpg?raw=true)

### [Postman Collections](wiki/postman/node-boilerplate.postman_collection.json)

## Refrences

- [Skeleton for Node.js Apps written in TypeScript](https://javascript.plainenglish.io/skeleton-for-node-js-apps-written-in-typescript-444fa1695b30)
- [Setup Eslint Prettier and Husky in Node JS Typescript Project](https://gist.github.com/santoshshinde2012/e1433327e5f7a58f98fe3e6651c4d5de)

## Notes

### 1. Why is my git pre-commit hook not executable by default?

- Because files are not executable by default; they must be set to be executable.

```
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

### 2. [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html)

- Don’t use deprecated or vulnerable versions of Express
- Use TLS
- Use Helmet
- Use cookies securely
- Prevent brute-force attacks against authorization
- Ensure your dependencies are secure
- Avoid other known vulnerabilities
- Additional considerations

### 3. Tutorials 
- [Skeleton for Node.js Apps written in TypeScript (with Setup Instructions for ESLint, Prettier, and Husky)](https://blog.santoshshinde.com/skeleton-for-node-js-apps-written-in-typescript-444fa1695b30)
- [Global Error and Response Handler in Node JS with Express and Typescript](https://blog.santoshshinde.com/global-error-and-response-handler-in-node-js-with-express-and-typescript-913ec06d74b3)
- [Testing with Jest in TypeScript and Node.js for Beginners](https://blog.santoshshinde.com/beginners-guide-to-testing-jest-with-node-typescript-1f46a1b87dad)
- [Static Code Analysis for Node.js and TypeScript Project using SonarQube](https://blog.santoshshinde.com/static-code-analysis-for-node-js-and-typescript-project-using-sonarqube-8f90799add06)
- [Visualization of Node.js Event Emitter](https://blog.santoshshinde.com/visualization-of-node-js-event-emitter-4f7c9fe3a477)

<hr/>

### Connect with me on
<div id="badges">
  <a href="https://twitter.com/shindesan2012">
    <img src="https://img.shields.io/badge/shindesan2012-black?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
  </a>
  <a href="https://www.linkedin.com/in/shindesantosh/">
    <img src="https://img.shields.io/badge/shindesantosh-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
   <a href="https://blog.santoshshinde.com/">
    <img src="https://img.shields.io/badge/Blog-black?style=for-the-badge&logo=medium&logoColor=white" alt="Medium Badge"/>
  </a>
  <a href="https://www.buymeacoffee.com/santoshshin" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/default-black.png" alt="Buy Me A Coffee" height="28" width="100">
    </a>
</div>