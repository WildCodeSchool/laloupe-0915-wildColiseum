// CONTROLLER QUESTION

var Question = require('../models/question.js');

module.exports 	= function(app) {

	app.get('/questions', Question.findAll);

	app.post('/questions', Question.create);

	app.put('/questions/:id', Question.update);

	app.delete('/questions/:id', Question.delete);

}