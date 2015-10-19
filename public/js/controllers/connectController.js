// MAIN CONTROLLER
function connectController($scope, $http, $location, connectService) {
	$scope.title = "Wild coliseum"; //regarder doc angular.js $location
	

	$scope.connect = function(){
		var login = {};
		login.pseudo = $scope.pseudo;
		login.password = $scope.password;
		connectService.login(login).then(function(res){
			//SUCCESS
			if (res.data){
				alert("bienvenue");
				$location.path('/accueil');
			}else{
				alert("pseudo ou mot de passe incorrect");
				$location.path('/connect');}
		}, function(){
			//ERROR
		})
	}
}
