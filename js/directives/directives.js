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