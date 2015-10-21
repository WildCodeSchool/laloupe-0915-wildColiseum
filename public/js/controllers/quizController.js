//    CONTROLLER QUIZ

function quizController($scope, $http, quizService){
	var max = 0;
	$scope.random = function() {
		return Math.floor(Math.random() * 4)
	};

	function load(){
		quizService.get().then(function(res){
			// $scope.questions = res.data;
			max = res.data.length;			
			var id =  Math.floor(Math.random() * max);
			$scope.question = res.data[id];
			
			$scope.choix_1 = res.data[id].choix_1_valide;
			$scope.choix_2 = res.data[id].choix_2;
			$scope.choix_3 = res.data[id].choix_3;
			$scope.choix_4 = res.data[id].choix_4;

			$scope.choices = [res.data[id].choix_1_valide, 
								res.data[id].choix_2, 
								res.data[id].choix_3, 
								res.data[id].choix_4];
			});

	}
	load();

}