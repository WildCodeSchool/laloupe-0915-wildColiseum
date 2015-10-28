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
	
		if ($scope.signin.$valid){
			userService.create(user).then(function(){
				alert("Votre compte a été créé avec succés.");
				$location.path('/');
			});
		} else {
			alert("Erreur lors de la création du compte, merci de renseigner tous les champs"); // Ne s'affiche jamais
			$location.path('/profil');
		}	
	}

}

//  FÎNIR ELSE IF... ERREUR: conditions non prises en charges.

// ETABLIR CRITÈRE DE VALIDATION POUR FORMULAIRE DE DEPÔT DE QUESTION.
