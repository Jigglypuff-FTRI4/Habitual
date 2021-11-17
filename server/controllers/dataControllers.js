const { UserData } = require('../models');
const path = require('path');


//controller to add mood and comment
dataController.addMoodComment = async (req, res, next) => {


  try {

    return next();
  } catch (err) {
    console.log('Error: in addChecklist middleware', err);
    return next({
      log: 'Express error handler caught in addChecklist middleware',
      message: { err: 'Error in addChecklist' },
    });
  }
};

module.exports = dataController;