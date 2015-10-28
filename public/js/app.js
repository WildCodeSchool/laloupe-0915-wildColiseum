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
		.when('/quiz', {
			templateUrl: 'views/quiz.html',
			controller: 'quizController'
		})
		.when('/postQuestion', {
			templateUrl: 'views/postQuestion.html',
			controller: 'postQuestionController'
		})
		.when('/monProfil', {
			templateUrl: 'views/monProfil.html',
			controller: 'monProfilController'
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
    .controller('postQuestionController', postQuestionController)
    .controller('quizController', quizController)
    .controller('monProfilController', monProfilController)

    .service('connectService', connectService)
    .service('userService', userService)
    .service('postQuestionService', postQuestionService)
    .service('quizService', quizService)
    .service('monProfilService', monProfilService)

    /*.factory('', )*/
    .run(run);


