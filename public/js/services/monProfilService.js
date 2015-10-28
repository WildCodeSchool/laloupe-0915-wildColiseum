// USERSERVICE

function monProfilService($http){
	return {
		getById : function(id) {
				return $http.get('/users/' + id);
		}
	}
};