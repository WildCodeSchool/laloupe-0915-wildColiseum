function postQuestionService($http){
	return {
		get : function() {
			return $http.get('/questions');
			},
		get : function() {
			return $http.get('/theme');
			},
		update : function(id, question){
			return $http.put('/questions/' + id, question);
		},
		create: function(question){
			return $http.post('/questions', question);
		},
		delete : function(id) {
			return $http.delete('/questions/' + id);
		}
	}
}