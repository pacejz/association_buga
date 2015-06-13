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
