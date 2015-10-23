//    CONTROLLER POST_THEME

function postThemeController($scope, $http, postThemeService){

	function load(){
		postThemeService.getTheme().then(function(res){
			$scope.theme = res.data;
		});
	}

	$scope.sendTheme = function(){
		var theme = {};
		theme.theme = $scope.theme;
		
		postThemeService.create(theme).then(function(res){
			//SUCCESS
			alert('OK');
			load();
		}, function(res){
			//ERROR
			alert('Erreur');
		});
	}


	// $scope.update = function(theme){
	// 	postThemeService.update(theme.id, theme).then(function(res){
	// 		load();
	// 	});
	// }

	// $scope.delete = function(theme){
	// 	postThemeService.delete(theme.id).then(function(res){
	// 		load();
	// 	});
	// }
	
	load();
}