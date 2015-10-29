// CONTROLLER QUESTION

var Question = require('../models/question.js');

var Theme = require('../models/question.js');

module.exports 	= function(app) {

// QUESTION
	app.get('/questions', Question.findAll);

	app.post('/questions', Question.create);

	app.put('/questions/:id', Question.update);

	app.delete('/questions/:id', Question.delete);

  	app.get('/questions/theme/:id', Question.findQuestionByTheme)

	app.post('/response', Question.verify);  	
// THEME

  	app.get('/themes', Theme.findAllTheme);

	app.post('/themes', Theme.createTheme);

	//app.delete('/themes/:id', Theme.delete);
}