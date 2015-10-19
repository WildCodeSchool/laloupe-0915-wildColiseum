function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/connect.html',
			controller: 'connectController'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
		})
		.when('/profil', {
			templateUrl: 'views/profil.html',
			controller: 'profilController'
		})
		.when('/accueil', {
			templateUrl: 'views/accueil.html',
			
		})
		.otherwise({
			redirectTo: '/'
		});
}

function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}

angular.module('app', ['ngRoute'])
    .config(config)
    .controller('connectController', connectController)
    .controller('profilController', profilController)
    .service('connectService', connectService)
    .service('userService', userService)
    /*.factory('', )*/
    .run(run);


