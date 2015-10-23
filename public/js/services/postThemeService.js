//SERVICE POST_THEME

function postThemeService($http){
	return {
		getTheme : function() {
			return $http.get('/theme');
		}
	}
}