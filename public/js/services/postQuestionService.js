function postQuestionService($http){
	return {
		create: function(question){
			return $http.post('/questions', question);
		}
	}
}