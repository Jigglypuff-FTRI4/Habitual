const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
// const dataController =  require('./controllers/dataControllers')

const PORT = 3000;

// Parses incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')))

//serve html file when on root url
app.get('/', (req, res) => {
  return res.status(200).type('html').sendFile(path.join(__dirname, '../index.html'));
});

//login APIs


//home page APIs


//calendar page APIs




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


app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});
