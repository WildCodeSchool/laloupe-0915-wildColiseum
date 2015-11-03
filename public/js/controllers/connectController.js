// MAIN CONTROLLER
function connectController($scope, $rootScope, $http, $location, connectService) {
	$scope.title = "Wild Code Coliseum"; //regarder doc angular.js $location
	

	$scope.connect = function(){
		var login = {};
		login.pseudo = $scope.pseudo;
		login.password = $scope.password;

		connectService.login(login).then(function(res){
			//SUCCESS
			if (!res.data){
				alert("pseudo ou mot de passe incorrect");
				$location.path('/connect');
			}
			//ERREUR
			else{
				alert("bienvenue");
				$rootScope.user = res.data;
				$location.path('/quiz'); //  $location est natif angular. Est placé en paramètre.
				console.log($rootScope.user);
			}
		})
	}
}
