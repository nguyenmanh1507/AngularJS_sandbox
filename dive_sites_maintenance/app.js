(function() {
	'use strict';

	angular.module('maintenance', [])
		.controller('siteEditCtrl', SiteEditCtrl)
	;

	function SiteEditCtrl($scope) {
		$scope.sites = sites;
		$scope.startAdd = startAdd;
		$scope.startEdit = startEdit;
		$scope.startRemove = startRemove;
		$scope.cancel = cancel;
		$scope.add = add;
		$scope.save = save;
		$scope.remove = remove;
		$scope.getSelected = getSelected;

		var selected = -1;

		setView('list');

		function setView(view) {
			$scope.view = view;
		}

		function startAdd() {
			$scope.siteBox = '';
			setView('add');
		}

		function startEdit(index) {
			selected = index;
			$scope.siteBox = $scope.sites[index];
			setView('edit');
		}

		function startRemove(index) {
			selected = index;
			setView('delete');
		}

		function cancel() {
			setView('list');
		}

		function add() {
			$scope.sites.push($scope.siteBox);
			setView('list');
		}

		function save() {
			$scope.sites[selected] = $scope.siteBox;
			setView('list');
		}

		function remove() {
			$scope.sites.splice(selected, 1);
			setView('list');
		}

		function getSelected() {
			return $scope.sites[selected];
		}
	}


}());