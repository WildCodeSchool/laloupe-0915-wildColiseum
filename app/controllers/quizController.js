// CONTROLLER QUIZ

var Question = require('../models/quiz.js');

module.exports 	= function(app) {

	app.get('/questions', Question.find);

}