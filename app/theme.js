// THEME question

var Sequelize = require('sequelize');
var db = require('../../config/database.js');

var Theme = db.define('theme', {
  theme: Sequelize.STRING
});

Theme.sync().then(function(){});

module.exports.findAll = function(req, res) {
  Theme.findAll().then(function (data) {
    res.json(data); 
  });
};

module.exports.create = function(req, res) {
	Theme.create({
		theme: req.body.theme
	}).then(function(){
		res.sendStatus(200);
	})
};

module.exports.delete = function(req, res){
  Theme.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(){
    res.sendStatus(200);
  })
};