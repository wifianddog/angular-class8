;(function() {
	var app = angular.module('wsController', []);
	app.controller('indexCtrl', function($scope, tool) {
		$scope.name = 'wscat';
		console.log(tool.sum(4, 3))
	})
	app.controller('index2Ctrl', function($scope) {
		$scope.name = 'winds';
	})
})();
console.log("123")