const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const dataController =  require('./controllers/dataControllers');

const PORT = 3000;

// ROUTER: Parses incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')))

// ROUTER: serve html file when on root url
app.get('/', (req, res) => {
  return res.status(200).type('html').sendFile(path.join(__dirname, '../index.html'));
});


//LOGIN APIs



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


//CALENDAR APIs


 

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


app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});
