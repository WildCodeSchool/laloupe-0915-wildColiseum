//    CONTROLLER POST_QUESTION

function postQuestionController($scope, $http, postQuestionService){

//Load Question
	function load(){
		postQuestionService.get().then(function(res){
			$scope.questions = res.data;
		});
	}

//Load Question By Theme
	function load2(){
		postQuestionService.getQuestionsByTheme($scope.theme_choice).then(function(res){
				$scope.questions = res.data;
		})
	}

	$scope.selectTheme = function(){
		load2();
	}

	$scope.select = function(){
		load2();
	}

//Load Theme
	function loadTheme(){
		postQuestionService.getTheme().then(function(res){
			$scope.themes = res.data;
		});
	}

	$scope.sendQuestion = function(){
		var question = {};
		question.question = $scope.question;
		question.choix_1_valide = $scope.choix_1_valide;
		question.choix_2 = $scope.choix_2;
		question.choix_3 = $scope.choix_3;
		question.choix_4 = $scope.choix_4;
		question.enonce_solution = $scope.enonce_solution;
		question.idTheme = $scope.theme;  // RECUPERE L'ID DU THEME SELECTIONNER
		
		postQuestionService.create(question).then(function(res){
			//SUCCESS
			alert('Question ajouté');
			load2();
		}, function(res){
			//ERROR
			alert("Erreur dans l'ajout de la question");
		});
	}


	$scope.update = function(question){
		postQuestionService.update(question.id, question).then(function(res){
			load2();
		});
	}

	$scope.delete = function(question){
		postQuestionService.delete(question.id).then(function(res){
			load2();
		});
	}

	$scope.sendTheme = function(){
		var data = {};
		data.theme = $scope.theme_post;
		postQuestionService.createTheme(data).then(function(res){
			//SUCCESS
			alert('Thème ajouté');
			loadTheme();
		}, function(res){
			//ERROR
			alert("Erreur dans l'ajout du thème");
		});
	}

	$scope.deleteTheme = function(theme){
		postQuestionService.deleteTheme(theme.id).then(function(res){
			load();
		});
	}

	load();
	loadTheme();
}