// Appel des models, pour l'insant les modeles sont dans les factory
module.exports = function ($http){
    'use strict';

    return {
        get: function(){
            return $http.get('/api/articles').then(function(res){
                return res.data;
            });
        },
        getpage: function(which){
            return $http.get('/api/articles/' + which).then(function(res){
                return res.data.articlesData;
            });
        }
    };
};
