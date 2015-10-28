//PROFIL Controller
function monProfilController($scope, $http, $rootScope, $location, monProfilService) {

    function load(){
        monProfilService.getById($rootScope.user.id).then(function(res){
            $scope.pseudo = res.data.pseudo;
        });
    }

      load()
}
        