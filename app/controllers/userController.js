// CONTROLLER USER

var User = require('../models/user.js');

module.exports 	= function(app) {

	app.post('/login', User.find)
	app.post('/users', User.create);

}