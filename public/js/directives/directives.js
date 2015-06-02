
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
		