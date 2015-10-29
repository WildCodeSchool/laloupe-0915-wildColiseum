// MODEL question

var Sequelize = require('sequelize');
var db = require('../../config/database.js');

var Question = db.define('question', {
  question: Sequelize.STRING,
  idTheme: Sequelize.BIGINT,
  choix_1_valide: Sequelize.STRING,
  choix_2: Sequelize.STRING,
  choix_3: Sequelize.STRING,
  choix_4: Sequelize.STRING,
  enonce_solution: Sequelize.STRING
});

Question.sync().then(function(){});


module.exports.create = function(req, res) {
	Question.create({
		question: req.body.question,
		choix_1_valide: req.body.choix_1_valide,
		choix_2: req.body.choix_2,
		choix_3: req.body.choix_3,
		choix_4: req.body.choix_4,
		enonce_solution: req.body.enonce_solution,
    idTheme: req.body.idTheme
	}).then(function(){
		res.sendStatus(200);
	})
};

module.exports.findAll = function(req, res) {
  Question.findAll().then(function (data) {
    res.json(data); 
  });
};

module.exports.update = function(req, res){
  Question.update({
    question: req.body.question,
    choix_1_valide: req.body.choix_1_valide,
    choix_2: req.body.choix_2,
    choix_3: req.body.choix_3,
    choix_4: req.body.choix_4,
    enonce_solution: req.body.enonce_solution
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(){
    res.sendStatus(200);
  })
};

module.exports.delete = function(req, res){
  Question.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(){
    res.sendStatus(200);
  })
};

// THEME question

var db = require('../../config/database.js');

var Theme = db.define('theme', {
  theme: Sequelize.STRING
});

Theme.sync().then(function(){});

module.exports.findAllTheme = function(req, res) {
  Theme.findAll().then(function (data) {
    res.json(data); 
  });
};

module.exports.createTheme = function(req, res) {
  Theme.create({
    theme: req.body.theme
  }).then(function(){
    res.sendStatus(200);
  })
};

// module.exports.deleteTheme = function(req, res){
//   Theme.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(){
//     res.sendStatus(200);
//   })
// };