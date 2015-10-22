// CONTROLLER QUESTION

var Theme = require('../models/theme.js');

module.exports 	= function(app) {

	app.get('/theme', Theme.findAll);
}