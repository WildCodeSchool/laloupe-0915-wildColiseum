// MODEL question

var Sequelize = require('sequelize');
var db = require('../../config/database.js');

var Question = db.define('question', {
  question: Sequelize.STRING,
  choix_1_valide: Sequelize.STRING,
  choix_2: Sequelize.STRING,
  choix_3: Sequelize.STRING,
  choix_4: Sequelize.STRING,
  enonce_solution: Sequelize.STRING,
});

Question.sync().then(function(){});


module.exports.create = function(req, res) {
	Question.create({
		question: req.body.question,
  		choix_1_valide: req.body.choix_1_valide,
  		choix_2: req.body.choix_2,
  		choix_3: req.body.choix_3,
  		choix_4: req.body.choix_4,
  		enonce_solution: req.body.enonce_solution
	}).then(function(){
		res.sendStatus(200);
	})
};

// module.exports.find = function(req, res){
//   Question.findOne({
//     where: {
//       question: req.body.question,
//       choix_1_valide: req.body.choix_1_valide
//     }
//   }).then(function(question){
//     res.json(question);
//   })
// }