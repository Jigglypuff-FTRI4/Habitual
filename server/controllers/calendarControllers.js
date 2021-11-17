/**
 * ************************************
 *
 * @module calendarController
 * @description Contains all controllers for the calendar page
 *
 * ************************************
 */

const db = require('../models');
const calendarControllers = {};

calendarControllers.getMoods = (req, res, next) => {
  console.log('in get moods');
  const { userID, startDate, endDate } = req.params;

  // const {username} = req.params;

  //Construct query to get moods
  const getMoodsQuery = `
    SELECT m.date, m.mood, m.comment 
    FROM mood m
    LEFT JOIN users u
    ON m.user_id = u.id
    WHERE u.id = $1
    AND date BETWEEN $2 AND $3
    ORDER BY date ASC;
  `;
  const params = [userID, startDate, endDate];

  db.query(getMoodsQuery, params, (err, dbResponse) => {
    if (err) {
      next({
        log: 'ERROR: calendarControllers.getMoods',
        message: { err: err.message },
      });
    }

    console.log('getMoods dbResponse', dbResponse);
    res.locals.moods = dbResponse.rows;
    return next();
  });
};

calendarControllers.getExercise = (req, res, next) => {
  console.log('in get exercise');
  const { userID, startDate, endDate } = req.params;

  //Construct query to get moods
  const getExerciseQuery = `
    SELECT e.date, e.type, e.duration
    FROM exercise e
    LEFT JOIN users u
    ON e.user_id = u.id
    WHERE u.id = $1
    AND date BETWEEN $2 AND $3
    ORDER BY date ASC;
  `;
  const params = [userID, startDate, endDate];

  db.query(getExerciseQuery, params, (err, dbResponse) => {
    if (err) {
      next({
        log: 'ERROR: calendarControllers.getMoods',
        message: { err: err.message },
      });
    }

    console.log('getExercise dbResponse', dbResponse);
    res.locals.exercise = dbResponse.rows;
    return next();
  });
};

module.exports = calendarControllers;
