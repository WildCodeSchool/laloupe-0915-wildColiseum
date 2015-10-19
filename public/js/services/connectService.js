function connectService($http){
	return {
		login: function(user){
			return $http.post('/login', user);
		}
	}
}