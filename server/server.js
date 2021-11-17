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
const app = express();
const PORT = 3000;

//require controllers
//const dataControllers =  require('./controllers/dataControllers')
const authControllers = require('./controllers/authControllers');
const calendarControllers = require('./controllers/calendarControllers');
const dataController =  require('./controllers/dataControllers');

// ROUTER: Parses incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../dist')))

// ROUTER: serve html file when on root url
app.get('/', (req, res) => {
  return res
    .status(200)
    .type('html')
    .sendFile(path.join(__dirname, '../index.html'));
});

// AUTH/LOGIN APIs
// Create a user if username does not exist in database 
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

// Verify if user exists. If no, send message to front end. If yes, set a cookie.
app.post(
  '/login',
  authControllers.verifyUser,
  authControllers.setCookie,
  (req, res) => {
    res.status(200).json({ userid: res.locals.user.id });
  }
);

//HOMEPAGE APIs
// Get request to check if anything has been submitted that day
app.get('/home/:date/:user_id', dataController.postCheck, (req, res) => {
  console.log("GET request from '/home/:date/:user_id'...");
  console.log(res.locals.postCheck)
  return res.status(200).type('json').json(res.locals.postCheck);
});


// Post requests for mood
app.post('/home', dataController.postMood, (req, res) => {
  console.log("Hit '/home' post request...");

  return res.status(200).type('json').send('Mood post successful');
});


// Post requests for exercise
app.post('/home/exercise', dataController.postExercise, (req, res) => {
  console.log("Hit '/home/exercise' post request...");

  return res.status(200).type('json').send('Exercise post successful');
});


// CALENDER API(s)
// Get request to fetch all mood and exercise data
app.get(
  '/calendar/:userID/:startDate/:endDate',
  calendarControllers.getMoods,
  calendarControllers.getExercise,
  (req, res) => {
    res.status(200).json(res.locals)
  }
);

/* TODO
- edit mood 
- edit exercise 
- delete exercise 
- delete mood 
*/

// Route error handler
app.use((req, res) => {
  return res.status(404).send('404 error');
});



// Global error handler
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
