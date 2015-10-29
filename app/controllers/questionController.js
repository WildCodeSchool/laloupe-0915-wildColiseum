// CONTROLLER QUESTION

var Question = require('../models/question.js');

var Theme = require('../models/question.js');

module.exports 	= function(app) {

// QUESTION
	app.get('/questions', Question.findAll);

	app.post('/questions', Question.create);

	app.put('/questions/:id', Question.update);

	app.delete('/questions/:id', Question.delete);
  
// THEME

  	app.get('/themes', Theme.findAllTheme);

	app.post('/themes', Theme.createTheme);

	//app.delete('/themes/:id', Theme.delete);
}