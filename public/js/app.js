/*
** Module : rassemble toutes les parties parties de l'application
*/

var app = angular.module('mainApp', ['ngRoute'])

// ASTUCE : j'ajoute "?1" aux urls des templates pour eviter le cache des navigateurs lors du dev... on peut les enlever après

.config( ['$routeProvider', function($routeProvider) {


    $routeProvider
	.when('/association', {
		templateUrl: 'partials/association.html?1',
		controller: 'AssociationController',
		currentTab: 'association'
	})

	.when('/project', {
		templateUrl: 'partials/default.html?1',
		// controller: 'ProjectController',
		currentTab: 'project'
	})

	.when('/partnership', {
		templateUrl: 'partials/default.html?1',
		// controller: 'PartnershipController',
		currentTab: 'partnership'
	})
	
	.when('/multimedia', {
		templateUrl: 'partials/default.html?1',
		// controller: 'PartnershipController',
		currentTab: 'multimedia'
	})
	
	.when('/contact', {
		templateUrl: 'partials/default.html?1',
		// controller: 'PartnershipController',
		currentTab: 'contact'
	})


	.otherwise({
		redirectTo: '/association'
	});

  }])