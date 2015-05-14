app.controller('HeaderController', ['$route', function ($route) {

    this.route = $route;
    console.log(this.route);
}])

.controller('AssociationController', ['Articles', function (Articles) {
	var me = this;
    Articles.get().then(function(data){
    	me.articles = data;
    })
}])

.controller('ImagesController', ['Articles', function (Articles){
	var me = this;
    	Articles.get().then(function(data){
    		me.articles = data;
   	 	})

}])