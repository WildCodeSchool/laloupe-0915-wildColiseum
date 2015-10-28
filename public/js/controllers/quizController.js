//    CONTROLLER QUIZ

function quizController($scope, $rootScope, $http, $location, quizService){
	
	$scope.choices = [];

	var max = 0;
	$scope.random = function() {
		return Math.floor(Math.random() * 4)
	};

	function superRandom(exclude){
		var i = Math.floor(Math.random() * 4);
		if ( exclude.indexOf(i) > -1 )
			return superRandom(exclude);
		else
			return i;
	}

	function load(){
		$scope.disableQuiz = false;
		quizService.get().then(function(res){
			// $scope.questions = res.data;
			max = res.data.length;			
			var id =  Math.floor(Math.random() * max);
			$scope.question = res.data[id];
			

			$scope.choix_1 = res.data[id].choix_1_valide;
			$scope.choix_2 = res.data[id].choix_2;
			$scope.choix_3 = res.data[id].choix_3;
			$scope.choix_4 = res.data[id].choix_4;

			
			var i = superRandom([-1]);
			console.log(i);
			$scope.choices[i] = {id:0, message:res.data[id].choix_1_valide};
			
			var j  = superRandom([i]);
			console.log(j);
			$scope.choices[j] = {id: 1, message:res.data[id].choix_2};

			var k  = superRandom([i,j]);
			console.log(k);
			$scope.choices[k] = {id: 2, message:res.data[id].choix_3};

			var l  = superRandom([i,j, k]);
			console.log(l);
			$scope.choices[l] = {id: 3, message:res.data[id].choix_4};

			});
	}
	load();

	$scope.send_res = function(){
		var response = {};
		response.selectedChoice = $scope.selectedChoice;
		response.question = $scope.question;
		//console.log($scope.selectedChoice);
		quizService.send_res(response).then(function(res){
			//SUCCESS
			if ($scope.selectedChoice.id == 0){
				alert("Bravo");
				$location.path('/quiz');
				$scope.enonceOk = false;
				load(); //changer de question quand réponse correct.
			}
			//ERREUR
			else{
				$scope.disableQuiz = true;
				$scope.enonceOk = true;
			}
		})
	}

	$scope.load = function(){
		$scope.enonceOk = false;
		load();
	}
}