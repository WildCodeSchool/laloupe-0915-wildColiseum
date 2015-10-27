function profilController($scope, $location, userService){


//VOIR ng-if pour vérification des termes avant l'envoi du formulaire
//  http://www.grafikart.fr/forum/topics/15002
	$scope.send = function(){
		var user = {};
		user.pseudo = $scope.pseudo;
		user.mail = $scope.email;
		user.password = $scope.password;
		user.nom = $scope.nom;
		user.prenom = $scope.prenom;
		
		//ANCIENNEMENT
		// userService.create(user).then(function(res){
		// 	//SUCCESS
		// 	alert('OK');
		// }, function(res){
		// 	//ERROR
		// 	alert('KO');
		// })

		//TEST $LOCATION.PATH SUR BOUTON s'inscrire. POUR fixBug <a>.
		//Test VALIDE..
		userService.create(user).then(function(res){
			//SUCCESS
			if (res){ //Mettre condition pour validation
				alert("Votre compte a été créé avec succés.");
				$location.path('/');
			}
			//ERREUR
			else{
				alert("Erreur lors de la création du compte");
				$location.path('/connect');}
		})

	}


}