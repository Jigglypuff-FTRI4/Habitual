const db = require('../models');
const path = require('path');
const { ModuleFilenameHelpers } = require('webpack');

const calendarController = {

	getAllData(req, res, next) {

		const getAllQuery =
			``


		db.query(getAllQuery, (err, queryResponse) => {
			if (err) return next(err);

			res.locals.getAll = queryResponse.rows;
			return next();
		})
	}



















};


module.exports = calendarController;