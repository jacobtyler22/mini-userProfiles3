var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {
	var deferred = $q.defer();

    this.getUsers = function() {
	    $http({
	        method: 'GET',
	        url: 'http://reqr.es/api/users?page=1'
	    }).then(function(res){
	    	res = res.data.data;
	    	for(var i = 0; i < res.length; i++){
	    		res[i].first_name = 'Ralf';
	    	}
	    	deferred.resolve(res);
	    });

	    return deferred.promise;
    };
});