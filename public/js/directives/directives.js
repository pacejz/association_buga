app.directive('toggleMenu', function(){
	return{
		restrict: 'A', // je restreint la directive aux atributs
		link: function(scope, element){
			element.on("click", function(){ //au click sur les elements qui portent cet attribu (toggle-menu)
				angular.element(document.getElementById('header')).toggleClass("menu-visible") // je toggle la class
			}) // le reste se fait dans le css
		}
	}
})


.directive('scrollCall', function($window, $q) {
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
});