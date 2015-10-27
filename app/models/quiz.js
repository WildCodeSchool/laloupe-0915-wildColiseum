var Sequelize = require('sequelize');
var db = require('../../config/database.js');

module.exports.find = function(req, res){
  Question.findOne({
    where: {
      question: req.body.question,
      choix_1_valide: req.body.choix_1_valide,
      choix_2: req.body.choix_2,
      choix_3: req.body.choix_3,
      choix_4: req.body.choix_4,
      enonce_solution : req.body.enonce_solution
    }
  }).then(function(question){
    res.json(question);
  })
}

// module.exports.verify = function(req, res){
//   if(req == )
// }

module.exports.verify = function(req, res){
  Question.findOne({
    where: {
      question: req.body.question,
      choix_1_valide: req.body.selectedChoice
    }
  }).then(function(question, choix_1_valide){
    res.json(question, choix_1_valide);
  })
}