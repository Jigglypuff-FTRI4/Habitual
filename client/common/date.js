/**
 * ************************************
 *
 * @module date.jsx
 * @description creates todays date formatted for posting to postgreSQL database
 *
 * ************************************
 */

const formattedDate = () => {
	
	const today = new Date();
	
	const createDate = date => {
		let newDate = new Date(date);
		let month = '' + (newDate.getMonth() + 1);
		let day = '' + newDate.getDate();
		let year = newDate.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	};
	return createDate(today.toLocaleDateString("en-US"));
};


module.exports = formattedDate;