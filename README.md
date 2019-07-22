# Silent Action

Silent Action is a platform where users can host online auctions to benefit a member of their community facing medical expenses. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This application utilizes React, Redux, Node.js, PostgreSQL, and Material-UI. 
Run: 
```
npm install
```

### Installing

Fork and clone this repo. 

Run:
```
npm install
```

To open the project, run: 
```
npm run server
```

And in a new tab, run:
```
npm run client
```

You will have to create an account to log in to the application. 

## Deployment

1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create an Heroku Postgres database
4. Connect to the Heroku Postgres database from Postico
5. Create the necessary tables
6. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
7. In the deploy section, select manual deploy


## Built With

*React
*Redux
*PostgreSQL
*Material-UI


## Authors
Kellen Baker

## License
This project is for demonstration purposes only. 

## Acknowledgments

* My mom
* My mentors and friends at Prime
