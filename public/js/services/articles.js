//Appel des models, pour l'insant les modeles sont direct dans les factory

app.factory('Articles', ['$http', function ($http) {
    return {
        get: function(){
            return $http.get('/api/articles').then(function(res){
                return res.data;
            })
        },
        getpage: function(which){
            return $http.get('/api/articles/' + which).then(function(res){
                return res.data.articlesData;
            })
        }
    }
}])
