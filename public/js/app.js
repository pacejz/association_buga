/*
** Module : rassemble toutes les parties parties de l'application
*/

var app = angular.module('mainApp', ['ngRoute'])

// ASTUCE : j'ajoute "?1" aux urls des templates pour eviter le cache des navigateurs lors du dev... on peut les enlever après

.config( ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {


    $routeProvider
	.when('/association', {
		templateUrl: 'partials/association.html?1',
		controller: 'AssociationController',
		controllerAs: 'association',
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
	
	.when('/contact', {
		templateUrl: 'partials/default.html?1',
		// controller: 'PartnershipController',
		currentTab: 'contact'
	})


	.otherwise({
		redirectTo: '/association'
	});



	/*html5mode*/
	$locationProvider.html5Mode(true);
  }])