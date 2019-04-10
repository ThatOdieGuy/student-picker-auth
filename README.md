# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku. And adds basic authentication!

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Live Demo

https://student-picker-auth.herokuapp.com/

Go to the Registration Page to register a new user. Login. Add students. Logout.

Once logged in, you can add students in the "User Home Page". And each registered user will have their own list of students.

## Docs

Here's some key files to look at:

* client/src/components/
  - LoginBox
  - RegistratonBox
  - NavBar 
    - Hides/Shows navigation based on logged in status
          (also uses `withRouter` from `react-router-dom` to provide access to props.history)
    
* client/src/
  - App.js 
    - Tries to validate the user on load, uses listeners to watch if the user logs in or out

* client/controllers/
  - LoginController.js 
    - Holds the bulk of the client authentication code

* routes/api/
  - authMiddleware.js 
    - a callback that sits between Express routes and your standard callback, it validates your user information
  - user.js 
    - Routes that deal with registration & login
  - students.js 
    - Modified to use authMiddleware and users.user_id to determine which user you are and what student list to send you

* models/Users.js 
  - Users table with username/password

* server.js 
  - Session setup and storage in the db.

* Modules added
  - bcrypt - For hashing passwords so they aren't insecurely stored in the database
  - express-session - Holding session information
  - cookie-parser - For reading cookie information in express (edited) 

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
