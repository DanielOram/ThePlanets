# ThePlanets
Angular 2 app that displays information about the planets in our solar system

##Build

In order to build the application cd into the project and run `npm install` and then `npm install --prefix ./client`

This will install the dependencies from both the `package.json` file in the root directory for the express server 
and also the dependencies from the `package.json` file within the `client/` directory for the angular2 app.

##Run

In order to run the application for development, `cd` into the `client/` directory and run `ng serve`. 
This is the quickest and simplest way.

The project will be running on port `:4200`

##Deploying to Heroku

The app is currently up at https://planets-ng2.herokuapp.com/

The project is configured for deployment to heroku
