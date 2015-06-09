schollarApp.directive('brandHeader', function () {
	'use strict';
	return {
		restrict: 'EA',
		templateUrl: '../templates/brand_header.html'
	}
});

schollarApp.directive('brandNav', function () {
	return {
		restrict: 'EA',
		templateUrl: '../templates/brand_nav.html'
	}
})
