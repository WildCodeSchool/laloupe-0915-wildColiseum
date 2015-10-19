function profilController($scope, userService){


	$scope.send = function(){
		var user = {};
		user.pseudo = $scope.pseudo;
		user.mail = $scope.email;
		user.password = $scope.password;
		user.nom = $scope.nom;
		user.prenom = $scope.prenom;
		
		userService.create(user).then(function(res){
			//SUCCESS
			alert('OK');
		}, function(res){
			//ERROR
			alert('KO');
		})
	}


}