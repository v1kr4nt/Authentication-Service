# Authentication Service Project

This is the README.md file for an authentication service project that provides two routes for user registration and login. The project uses @hapi/joi for validation, MongoDB for the database, and JSON Web Tokens (JWT) for authentication. Below are the key components and files used in this project.

## Table of Contents

- [Project Overview](#project-overview)
- [Routes](#routes)
  - [Register](#register)
  - [Login](#login)
- [Validation](#validation)
- [Middleware](#middleware)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)

---

## Project Overview

The authentication service project is a Node.js application that allows users to register and log in. It uses JWT for secure authentication, MongoDB for storing user data, and @hapi/joi for request data validation.

## Routes

### Register

- Route: `/register`
- Method: POST
- Description: Allows users to create an account by providing their name, email, and password. The provided data is validated, and if valid, the user is stored in the database after hashing the password.

Example request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword"
}
```

### Login

- Route: `/login`
- Method: POST
- Description: Allows registered users to log in. Users must provide their email and password, which are validated, and upon successful validation, a JWT token is generated and returned.

Example request:
```json
{
  "email": "john@example.com",
  "password": "securePassword"
}
```

## Validation

The project uses @hapi/joi for request data validation. Two validation functions are provided:

- `registerValidation`: Validates the data provided during registration (name, email, password).
- `loginValidation`: Validates the data provided during login (email, password).

## Middleware

The project includes a middleware for verifying JWT tokens, ensuring secure access to protected routes. The middleware is applied to routes that require authentication. It checks for the presence of a valid JWT token in the request header.

## Dependencies

The project depends on the following Node.js packages, which are specified in the `package.json` file:

- express: Web framework for Node.js.
- mongoose: A MongoDB object modeling tool.
- @hapi/joi: A data validation library.
- jsonwebtoken: Library for generating and verifying JSON Web Tokens (JWT).
- bcryptjs: A library for hashing and comparing passwords.
- dotenv: Used for loading environment variables from a .env file.

## Getting Started

To run the project, follow these steps:

1. Clone the repository.

2. Create a `.env` file in the project root directory with the following environment variables:

   ```
   MONGO_URI=<your_mongodb_connection_string>
   TOKEN_SECRET=<your_secret_key_for_jwt>
   ```

3. Install project dependencies:

   ```
   npm install
   ```

4. Start the server:

   ```
   npm start
   ```

The server will be accessible at `http://localhost:3000`.

Make sure to adapt the project to your specific needs and configurations. This README provides a high-level overview of the authentication service project, and you can explore the code in the provided files for more details.