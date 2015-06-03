
/**
 * Show/hide menu (mobile devices)
 * @return {[type]} [description]
 */
function toggleMenu(){

	return{
		restrict: 'A', // je restreint la directive aux atributs
		link: function(scope, element){
			element.on("click", function(){ //au click sur les elements qui portent cet attribu (toggle-menu)
				angular.element(document.getElementById('header')).toggleClass("menu-visible"); // je toggle la class
			}); // le reste se fait dans le css
		}
	};
}


/**
 * Specify a function to call when bottom is not far...
 * @param  {window} $window : the scroll action is triggered in the window object
 * @return {function}       : parses and calls the function attached
 */
function scrollCall($window){

	return {
		link: function(scope, element, attrs) {
			var offset = parseInt(attrs.offset, 10) || 10; // haw far from bottom it is supposed to call the function (px)
			return angular.element($window).bind('scroll', function() {	
				if ((this.innerHeight + this.scrollY) >= document.body.offsetHeight) {
					scope.$apply(attrs.scrollCall);
				}
			});
		}
	};
}


/**
 * Different header size whether you scroll up or down
 * @param  {window} $window : the scroll action is triggered in the window object
 */
function scrollOnMenu($window){

	return {
		restrict: 'A',
		link:function(scope, element, attrs){
			// console.log(element.find('.menu-item'));
			var a = $window.pageYOffset;
			// var menu_items = document.getElementsByClassName("menu-item");
			var logo = document.getElementById("logo-header");

			$window.addEventListener("scroll", function(e) {
               	up_direction = window.pageYOffset < a || window.pageYOffset <= 0;
            	var i;
				if(up_direction){
					element[0].style.padding = "30px 30px";
					// logo.style.padding = "0";
                 
                } else{
					element[0].style.padding = "15px 30px";
					// logo.style.padding = "20px";
                }
                a = window.pageYOffset;

			});
		}
	};
}



		