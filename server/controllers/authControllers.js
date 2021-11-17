/**
 * ************************************
 *
 * @module authController.js
 * @description Contains all controllers for the authentication/login page (checkUser, createUser, verifyUser, setCookie)
 *
 * ************************************
 */

const db = require('../models');
const authControllers = {};

//Check to see if user exist in database for user creation
authControllers.checkUser = (req, res, next) => {
  // console.log('in checkuser controller');
  const { username } = req.body;

  //Construct query to look for username
  const checkUserQuery = `
    SELECT *
    FROM users 
    WHERE username = $1;
    `;
  const params = [username];

  //Query from DB and store result in res.locals.user
  db.query(checkUserQuery, params, (err, dbResponse) => {
    if (err) {
      next({
        log: 'ERROR: authControllers.checkUser',
        message: { err: err.message },
      });
    }

    console.log('checkuser dbResponse', dbResponse.rows[0]);

    if (dbResponse.rows[0]) {
      return res.send(
        'Username already exists, please login or choose a different username'
      );
    } else {
      return next();
    }
  });
};

//Create user and store new user in res.locals.user
authControllers.createUser = (req, res, next) => {
  //console.log('in createuser controller');
  const { firstName, lastName, username, password } = req.body;

  //Construct query to insert a user into db
  const createUserQuery = `
      INSERT INTO users (first_name, last_name, username, password)
      VALUES ($1, $2, $3, $4)
      RETURNING username;
      `;
  const params = [firstName, lastName, username, password];

  //Query from DB and store result in res.locals.user
  db.query(createUserQuery, params, (err, dbResponse) => {
    if (err) {
      next({
        log: 'ERROR: authControllers.createUser',
        message: { err: err.message },
      });
    }
    console.log('createuser dbResponse', dbResponse.rows[0]);
    res.locals.user = dbResponse.rows[0];
    return next();
  });
};

//Verify if user exist and if password matches what's stored in the database for user login
authControllers.verifyUser = (req, res, next) => {
  console.log('in verifyuser controller');
  const { username, password } = req.body;

  //Construct query to look for username
  const verifyUserQuery = `
    SELECT *
    FROM users 
    WHERE username = $1;
    `;
  const params = [username];

  //Query from DB and store result in res.locals.user
  db.query(verifyUserQuery, params, (err, dbResponse) => {
    if (err) {
      next({
        log: 'ERROR: authControllers.verifyUser',
        message: { err: err.message },
      });
    }
    //console.log('verifyuser dbResponse', dbResponse.rows[0]);

    //if no response is returned, then an entry corresponding to the username does not exist
    if (!dbResponse.rows[0]) {
      return res.send(
        'Username or password is incorrect. Please try again or sign up'
      );
    } else {
      const returnedPassword = dbResponse.rows[0]['password'];
      //console.log({returnedPassword})

      //check to see if the password typed in matches what is in the database. If it matches, then send the user entry details to the cookie controller
      if (returnedPassword === password) {
        //console.log('password matches')
        res.locals.user = dbResponse.rows[0];
        return next();
      } else {
        res.send(
          'Username or password is incorrect. Please try again or sign up'
        );
      }
    }
  });
};

//Set cookie for the user
authControllers.setCookie = (req, res, next) => {
  //console.log('in setcookie controller');
  // Get user's id primary key and save in a variable
  const userID = res.locals.user.id;

  // Set a cookie equal to the user's username
  res.cookie('userID', userID);
  //console.log('set a cookie');
  return next();
};

module.exports = authControllers;
