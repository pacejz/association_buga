/*
** Module : rassemble toutes les parties parties de l'application
*/

(function(){

	angular.module('mainApp', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', ConfigRoute])

		.factory('Articles', ['$http', Articles])

		.directive('toggleMenu', toggleMenu)
		.directive('scrollCall', scrollCall)
		.directive('scrollOnMenu', scrollOnMenu)

		.controller('HeaderController', ['$route', HeaderController])
		.controller('AssociationController', ['Articles', AssociationController])
		.controller('ImagesController', ['Articles', ImagesController]);

})();


