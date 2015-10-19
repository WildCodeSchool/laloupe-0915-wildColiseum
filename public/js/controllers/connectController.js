// MAIN CONTROLLER
function connectController($scope, $http, connectService) {
	$scope.title = "Wild coliseum";
	

	$scope.connect = function(){
		var login = {};
		login.pseudo = $scope.pseudo;
		login.password = $scope.password;
		connectService.login(login).then(function(res){
			//SUCCESS
			if (res.data)
				alert("bienvenue");
			else
				alert("pseudo ou mot de passe incorrect");
		}, function(){
			//ERROR
		})
	}
}
