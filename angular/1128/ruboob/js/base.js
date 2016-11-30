var app = angular.module('runoobApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.when('/index',{
		templateUrl:'template/index.html'
	}).when('/home',{
		templateUrl:'template/home.html'
	})
})

//控制器跟控制器之间传递数据
//通过服务，通过$rootScope
app.controller('homeCtrl',function($scope,$rootScope,exchange){
	$scope.Click = function(){
		alert("Click")
	}
	$scope.name = 'mingzi';
	exchange.name = $rootScope.exchange = $scope.name;
})
app.controller('indexCtrl',function($scope,$rootScope,exchange){
	$scope.name = exchange.name;
})
app.service('exchange',function(){
	return {
		
	}
})