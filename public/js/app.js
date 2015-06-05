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
