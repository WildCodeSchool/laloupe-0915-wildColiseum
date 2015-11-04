function postQuestionService($http){
	return {
		get : function() {
			return $http.get('/questions');
		},
		update : function(id, question){
			return $http.put('/questions/' + id, question);
		},
		create : function(question){
			return $http.post('/questions', question);
		},
		delete : function(id) {
			return $http.delete('/questions/' + id);
		},
		createTheme : function(theme){
			return $http.post('/themes', theme);
		},
		getTheme : function() {
			return $http.get('/themes');
		},
		getQuestionsByTheme: function(idTheme){
			return $http.get('/questions/theme/' + idTheme);
		}
		// ,
		// deleteTheme : function(id) {
		// 	return $http.deleteTheme('/themes/' + id);
		// }
	}
}