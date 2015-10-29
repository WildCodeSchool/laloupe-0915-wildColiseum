// CONTROLLER QUESTION

var Theme = require('../models/theme.js');

module.exports 	= function(app) {

	app.get('/themes', Theme.findAll);

	app.post('/themes', Theme.create);

	app.delete('/themes/:id', Theme.delete);

}


	