// MODEL USER

var Sequelize = require('sequelize');
var db = require('../../config/database.js');

var User = db.define('user', {
  pseudo: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  nom: Sequelize.STRING,
  prenom: Sequelize.STRING
});

User.sync().then(function(){});


module.exports.create = function(req, res) {
	User.create({
		pseudo: req.body.pseudo,
  		email: req.body.mail,
  		password: req.body.password,
  		nom: req.body.nom,
  		prenom: req.body.prenom
	}).then(function(){
		res.sendStatus(200);
	})
};

module.exports.find = function(req, res){
  User.findOne({
    where: {
      pseudo: req.body.pseudo,
      password: req.body.password
    }
  }).then(function(user){
    res.json(user);
  })
}
