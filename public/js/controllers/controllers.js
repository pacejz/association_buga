function HeaderController($route){

	this.route = $route;
}

function AssociationController(Articles){

	var self = this,
		loading = false;

	self.articles = [];
	self.currentpage = 0;

	self.getArticles = function(){
		if(loading === false){
			loading = true;
			Articles.getpage(self.currentpage).then(function(data){
				if(data.length > 0){
					for(var i=0; i<data.length; i++){
			    		self.articles.push(data[i]);
					}
			    	self.currentpage++;
				}
				
		    	loading = false;
		    	// console.log(self.currentpage);
			});
		}
	};
	self.getArticles();
}

function ImagesController(Articles){

	var self = this;
	Articles.get().then(function(data){
		self.articles = data;
	});
}
