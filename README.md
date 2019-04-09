# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

While waiting for the dependencies to install, create a MySQL database for this app.

To see this example boilerplate in action, create a `.env` file in the root of this project with the following inside:
DB_USERNAME=root
DB_PASSWORD=whateveryourpasswordis
DB_NAME=motivation_development
DB_HOST=127.0.0.1

After both installations complete, run the following command in your terminal:

```
npm run seed
```

Then:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.