/**
 * ************************************
 *
 * @module dataController.js
 * @description contains all controllers for homepage (postMood, postExercise, postCheck)
 *
 * ************************************
 */

const db = require('../models');
const path = require('path');


const dataController = {

  // Post mood and comment
  postMood(req, res, next) {
    console.log("Hit 'postMoodComment' middlware...");

    const postMoodQuery =
      `INSERT INTO mood (date, mood, comment, user_id)
      VALUES ($1, $2, $3, $4);`

    const values = [
      req.body.date,
      req.body.mood,
      req.body.comment,
      req.body.user_id
    ];

    db.query(postMoodQuery, values, (err, queryResponse) => {
      if (err) return next(err);
      res.locals.postMood = queryResponse.rows[0];
      return next();
    })
  },


  // Post exercise
  postExercise(req, res, next) {

    const postExerciseQuery =
      `INSERT INTO exercise (date, type, duration, user_id)
      VALUES ($1, $2, $3, $4)
      RETURNING type, duration;` // may not need to return all for calendar update
      
    const values = [
      req.body.date,
      req.body.type,
      req.body.duration,
      req.body.user_id
    ];

    db.query(postExerciseQuery, values, (err, queryResponse) => {
      if (err) return next(err);
      res.locals.postExercise = queryResponse.rows[0];
      return next();
    })
  },

  // Get request to check if post has already been submitted
  postCheck(req, res, next) {
    console.log("Hit 'postCheck' middleware...")
    const postCheckQuery =
      `SELECT comment FROM mood
      WHERE date = $1 AND user_id = $2;`

    const values = [
      req.params.date,
      req.params.user_id
    ];

    db.query(postCheckQuery, values, (err, queryResponse) => {
      if (err) return next(err);
      // Logic to check if we got anything back from the DB
      if (queryResponse.rows.length) res.locals.postCheck = true;
      else res.locals.postCheck = false;
      return next();
    })
  }

  //add check for exercise


};



module.exports = dataController;