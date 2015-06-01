function HeaderController($route){

	this.route = $route;
}

function AssociationController(Articles){

	var me = this
		,loading = false;

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
}

function ImagesController(Articles){

	var me = this;
	Articles.get().then(function(data){
		me.articles = data;
	})
}
