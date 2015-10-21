function quizService($http){
	return {
		get : function() {
			return $http.get('/questions');
		},
	}
}