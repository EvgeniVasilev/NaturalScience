schollarApp.config(['$routeProvider', function ($routeProvider) {
	'use strict';
	$routeProvider.
	when('/', {
		templateUrl: './templates/brand.html'
	}).
	when('/math', {
		templateUrl: './math/views/math.html'
	}).
	when('/it', {
		templateUrl: './it/views/it.html'
	}).
	when('/chemistry', {
		templateUrl: './chemistry/views/chemistry.html'
	}).
	when('/physics', {
		templateUrl: './physics/views/physics.html'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);