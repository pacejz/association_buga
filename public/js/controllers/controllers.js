app.controller('HeaderController', ['$route', function ($route) {

    this.route = $route;
}])

.controller('AssociationController', ['Articles', function (Articles) {
	var me = this,
		loading = false;

	me.articles = [];
	me.currentpage = 0;

	me.getArticles = function(){
		if(loading === false){
			loading = true;
			Articles.getpage(me.currentpage).then(function(data){
				if(data.length > 0){
					for(var i=0; i<data.length; i++){
			    		me.articles.push(data[i]);
					}
			    	me.currentpage++;
				}
				else{
					alert("no more articles :)")
				}
		    	loading = false;
		    	console.log(me.currentpage)
			})
		}
	};

	me.getArticles();
    
}])

.controller('ImagesController', ['Articles', function (Articles){
	var me = this;
    	Articles.get().then(function(data){
    		me.articles = data;
   	 	})
}])