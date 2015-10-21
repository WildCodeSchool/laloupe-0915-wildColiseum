// CONTROLLER QUESTION

var Question = require('../models/question.js');

module.exports 	= function(app) {

	app.post('/questions', Question.create);

}