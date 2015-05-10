app.controller('HeaderController', ['$route', function ($scope, $route) {

    this.route = $route;
}])

app.controller('AssociationController', ['Articles', function (Articles) {
	var me = this;
    Articles.get().then(function(data){
    	me.articles = data;
    })
}])