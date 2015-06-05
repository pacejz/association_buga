module.exports = {

	HeaderController: function($route){
		'use strict';

		this.route = $route;
	},

	AssociationController: function(Articles){
		'use strict';

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
					else{
						alert("no more articles :)");
					}
					loading = false;
				});
			}
		};
		self.getArticles();
	},

	ImagesController: function(Articles){
		'use strict';

		var self = this;
		Articles.get().then(function(data){
			self.articles = data;
		});
	}
};
