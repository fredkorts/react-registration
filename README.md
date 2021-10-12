# Visioncraft MySQL/Node/React code trial

This part of the project runs the Node backend that recieves requests from the React frontend. It is responsible for the connection to the MySQL database.

## BACKEND Prerequisite.

You need to install a MySQL server on your local before you can proceed with testing this application. Remember your database username and password or leave it as default.

1. Create a database called "authentication" (case-sensitive) or name it something else, but it is important to modify the name of the database in the connection config in index.js on line 16.
2. Create a table called "users" (case-sensitive). DO NOT change this name unless you also change it in the sql queries in index.js
3. Add fields "id", "first_name", "last_name", "email", "password" to the new users table.

This should be enough to run the project.

## Project setup.

Before starting anything, run the script below to install all of the dependencies:

### `npm install`

Now that you have everything installed run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## FRONTEND Prerequisite.

The frontend part of the project.

## Project set up

Before starting anything, run the script below to install all of the dependencies:

### `npm install`

Now that you have everything installed run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.