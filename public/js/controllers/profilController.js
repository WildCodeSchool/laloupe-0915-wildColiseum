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
		}else if($scope.signin.pseudo.$valide != true){
			alert('Erreur dans le champs "pseudo".');
		}else if($scope.signin.email.$valide != true){
			alert('Erreur dans le champs "email".');
		}else if($scope.signin.password.$valide != true){
			alert('Erreur dans le champs "password".');
		}else if($scope.signin.nom.$valide != true){
			alert('Erreur dans le champs "nom".');
		}else if($scope.signin.prénom.$valide != true){
			alert('Erreur dans le champs "prénom".');
		}
		else{
			alert("Erreur lors de la création du compte, merci de renseigner tous les champs");
			$location.path('/profil');
		}
	}

}

