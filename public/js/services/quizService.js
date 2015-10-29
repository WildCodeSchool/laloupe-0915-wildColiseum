function quizService($http){
	return {
		get : function() {
			return $http.get('/questions');
		},
		send_res : function() {
			return $http.get ('/response');
		},
		getTheme : function() {
			return $http.get('/themes');
		},
		getQuestionsByTheme: function(idTheme){
			return $http.get('/questions/theme/' + idTheme);
		}
	}
}