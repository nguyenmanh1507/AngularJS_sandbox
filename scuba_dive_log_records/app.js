(function($) {
	'use strict';

	angular.module('diveLog', [])
		.controller('diveLogCtrl', DiveLogCtrl)
	;

	function DiveLogCtrl($scope) {
		$scope.dives = dives;
	}

}(jQuery));
