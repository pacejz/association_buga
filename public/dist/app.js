(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
** Module : rassemble toutes les parties parties de l'application
*/

(function(){

	'use strict';

	var Directives = require('./directives/directives');
	var ConfigRoute = require('./routes/config');
	var Articles = require('./services/articles');
	var Controllers = require('./controllers/controllers');

	angular.module('mainApp', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', ConfigRoute])

		.factory('Articles', ['$http', Articles])

		.directive('toggleMenu', Directives.toggleMenu)
		.directive('scrollCall', Directives.scrollCall)
		.directive('scrollOnMenu', Directives.scrollOnMenu)

		.controller('HeaderController', ['$route', Controllers.HeaderController])
		.controller('AssociationController', ['Articles', Controllers.AssociationController])
		.controller('ImagesController', ['Articles', Controllers.ImagesController]);

})();

},{"./controllers/controllers":2,"./directives/directives":3,"./routes/config":4,"./services/articles":5}],2:[function(require,module,exports){
module.exports = {

	HeaderController: function($route){
		'use strict';

		this.route = $route;
	},

	AssociationController: function(Articles){
		'use strict';

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
	},

	ImagesController: function(Articles){
		'use strict';

		var me = this;
		Articles.get().then(function(data){
			me.articles = data;
		})
	}
}
},{}],3:[function(require,module,exports){

module.exports = {

	toggleMenu: function(){
		'use strict';

		return{
			restrict: 'A', // je restreint la directive aux atributs
			link: function(scope, element){
				element.on("click", function(){ //au click sur les elements qui portent cet attribu (toggle-menu)
					angular.element(document.getElementById('header')).toggleClass("menu-visible"); // je toggle la class
				}) // le reste se fait dans le css
			}
		}
	},

	scrollCall: function($window, $q){
		'use strict';

		return {
			link: function(scope, element, attrs) {
				var offset, scrolling;
				offset = parseInt(attrs.offset, 10) || 10;
				scrolling = false;
				return angular.element($window).bind('scroll', function() {
					if ((this.innerHeight + this.scrollY) >= document.body.offsetHeight) {
						scope.$apply(attrs.scrollCall);
					}
				});
			}
		};
	},

	scrollOnMenu: function($window){
		'use strict';

		return {
			restrict: 'A',
			link:function(scope, element, attrs){
				// console.log(element.find('.menu-item'));
				var a = $window.pageYOffset;
				var menu_items = document.getElementsByClassName("menu-item");

				$window.addEventListener("scroll", function(e) {
	               	up_direction = window.pageYOffset < a || window.pageYOffset <= 0;
	            	var i;
					if(up_direction){
						element[0].style.padding = "45px 30px";
	                 
	                } else{
						element[0].style.padding = "10px 30px";
	                }
	                a = window.pageYOffset;

				});
			}
		}
	}
}
		
},{}],4:[function(require,module,exports){
module.exports = function ($routeProvider, $locationProvider){
	'use strict';

	// ASTUCE : j'ajoute "?1" aux urls des templates pour eviter le cache des navigateurs lors du dev... on peut les enlever après
	$routeProvider
	    .when('/', {
			redirectTo: '/news'
		})
	    .when('/news', {
			templateUrl: 'partials/news.html?1',
			controller: 'AssociationController',
			controllerAs: 'association',
			currentTab: 'news'
		})
		.when('/association', {
			templateUrl: 'partials/association.html?1',
			// controller: 'AssociationController',
			// controllerAs: 'association',
			currentTab: 'association'
		})
		.when('/association/history',{
			templateUrl: 'partials/history.html?1',
			currentTab: 'association',
			currentSubTab: 'history'
		})
		.when('/association/organization',{
			templateUrl: 'partials/organization.html?1',
			currentTab: 'association',
			currentSubTab: 'organization'
		})
		.when('/association/work',{
			templateUrl: 'partials/work.html?1',
			currentTab: 'association',
			currentSubTab: 'work'

		})
		.when('/project', {
			templateUrl: 'partials/project.html?1',
			currentTab: 'project'
		})
		.when('/news', {
			templateUrl: 'partials/news.html?1',
			controller: 'AssociationController',
			controllerAs: 'association',
			currentTab: 'news'
		})
		.when('/multimedia', {
			templateUrl: 'partials/multimedia.html?1',
			// controller: 'PartnershipController',
			currentTab: 'multimedia',
			currentSubTab: 'videos'
		})
		.when('/multimedia/images', {
			templateUrl: 'partials/images.html?1',
			controller: 'ImagesController',
			controllerAs: 'images',
			currentTab: 'multimedia',
			currentSubTab: 'images'
		})
		.when('/multimedia/videos', {
			templateUrl: 'partials/videos.html?1',
			currentTab: 'multimedia',
			currentSubTab: 'images'

		})
		.when('/contact', {
			templateUrl: 'partials/contact.html?1',
			// controller: 'PartnershipController',
			currentTab: 'contact'
		})
		.otherwise({
			templateUrl: 'partials/default.html?1',
			// redirectTo: '/news'
		});
		/*html5mode*/
		$locationProvider.html5Mode(true);

};

},{}],5:[function(require,module,exports){
// Appel des models, pour l'insant les modeles sont dans les factory
module.exports = function ($http){
    'use strict';

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
};

},{}]},{},[1]);
