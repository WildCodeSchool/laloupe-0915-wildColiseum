function quizService($http){
	return {
		get : function() {
			return $http.get('/questions');
		},
		send_res : function() {
			return $http.get ('/response');
		}

	}
}