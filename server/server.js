/**
 * ************************************
 *
 * @module server.js
 * @description serves static files to the client and contains all APIs for auth/login, home, and calendar pages
 *
 * ************************************
 */

//require packages
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

//require controllers
//const dataControllers =  require('./controllers/dataControllers')
const authControllers = require('./controllers/authControllers');
const calendarControllers = require('./controllers/calendarControllers');

// initialize express server and declare a port for the server
const PORT = 3000;
const app = express();

//insert global parsers for incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../dist')));

//serve html file when on root url
app.get('/', (req, res) => {
  return res
    .status(200)
    .type('html')
    .sendFile(path.join(__dirname, '../index.html'));
});

//login APIs

/* Create User 
1. Check if the username specified in the req.body is found in the Users database: 
  if found: in the controller return res.send('Username exists, please login or choose a different username')
  if not found: 
    create the user 
    then set cookie
*/
app.post(
  '/createUser',
  authControllers.checkUser,
  authControllers.createUser,
  authControllers.setCookie,
  (req, res) => {
    //console.log('in createUser API')
    res.status(200).json({ userid: res.locals.user.id });
  }
);

/* Create User 
1. Check if the username specified in the req.body is found in the Users database: 
  if found: in the controller return res.send('Username exists, please login or choose a different username')
  if not found: 
    create the user 
    then set cookie
*/
app.post(
  '/login',
  authControllers.verifyUser,
  authControllers.setCookie,
  (req, res) => {
    res.status(200).json({ userid: res.locals.user.id });
  }
);

//home page APIs

//calendar page APIs
app.get(
  '/calendar/:userID/:startDate/:endDate',
  calendarControllers.getMoods,
  calendarControllers.getExercise,
  (req, res) => {
    res.status(200).json(res.locals)
  }
);

//route error handler
app.use((req, res) => {
  return res.status(404).send('404 error');
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
