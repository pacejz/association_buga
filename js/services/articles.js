//Appel des models, pour l'insant les modeles sont direct dans les factory

app.factory('Articles', ['$http', function ($http) {
    return {
        get: function(){
            return $http.get('fake-server/data.json').then(function(res){
                return res.data;
            })

        }
    }
}])
