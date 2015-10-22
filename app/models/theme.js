// THEME question

var Sequelize = require('sequelize');
var db = require('../../config/database.js');

var Theme = db.define('theme', {
  theme: Sequelize.STRING
});

Theme.sync().then(function(){
	Theme.findOrCreate({where : {
		theme: "HTML"
	}})
	Theme.findOrCreate({where : {
		theme: "CSS"
	}})
	Theme.findOrCreate({where : {
		theme: "JavaScript"
	}})
	Theme.findOrCreate({where : {
		theme: "Ruby"
	}})
	Theme.findOrCreate({where : {
		theme: "PHP"
	}})
});

module.exports.findAll = function(req, res) {
  Theme.findAll().then(function (data) {
    res.json(data); 
  });
};