# Task Manager API

This is a Task Manager API that allows users to create, update, and delete tasks. It requires user authentication to access the endpoints.


## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository_url>

2. Install dependencies:

    ```js
    cd task-manager-api
    npm install

3. Set up the environment variables:

    ```js
    PORT=3000
    DATABASE_URL=<your_database_connection_url>
    JWT_SECRET=<your_jwt_secret_key>

4. Start the server:

    ```js
    npm start

>The server will start running at http://localhost:PORT.

# Endpoints
* POST `/signup`

>Register a new user.

* POST `/login`

>Log in an existing user and retrieve an access token.

* POST `/task`

>Create a new task. Requires authentication.

* GET `/find`

>Retrieve all tasks for the authenticated user. Requires authentication.

* DELETE `/delete`

>Delete a task. Requires authentication.

* PATCH `/update`

>Update a task. Requires authentication.

## Authentication
To access the protected endpoints, include an Authorization header in your request with the value "Bearer <access_token>". The access token can be obtained by logging in via the /login endpoint.

## Technology Stack
* Node.js
* Express.js
* Sequelize (ORM for database operations)
* MySQL 
* Contributing
* Contributions are welcome! If you encounter any issues or have suggestions for improvement, please create a new issue or submit a pull  request.







