//    CONTROLLER POST_QUESTION

function postQuestionController($scope, postQuestionService){


	$scope.sendQuestion = function(){
		var question = {};
		question.question = $scope.question;
		question.choix_1_valide = $scope.choix_1_valide;
		question.choix_2 = $scope.choix_2;
		question.choix_3 = $scope.choix_3;
		question.choix_4 = $scope.choix_4;
		question.enonce_solution = $scope.enonce_solution;
		
		postQuestionService.create(question).then(function(res){
			//SUCCESS
			alert('OK');
		}, function(res){
			//ERROR
			alert('Erreur');
		})
	}

}