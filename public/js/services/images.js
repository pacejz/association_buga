module.exports = function($http){
	'use strict';
	return {
        get: function(){
            return $http.get('/api/images').then(function(res){
                return res.data;
            });
        },
        getpage: function(which){
            return $http.get('/api/images/' + which).then(function(res){
                return res.data.articlesData;
            });
        }
    };
};