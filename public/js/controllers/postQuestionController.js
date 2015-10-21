//    CONTROLLER POST_QUESTION

function postQuestionController($scope, $http, postQuestionService){


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
			//load();
		});
	}

	function load(){
		postQuestionService.get().then(function(res){
			$scope.questions = res.data;
			});

	}

	$scope.update = function(question){
		postQuestionService.update(question.id, todo).then(function(res){
			load();
		});
	}

	$scope.delete = function(question){
		postQuestionService.delete(question.id).then(function(res){
			load();
		});
	}
	
	load();
}