//angular.module定义一个angular程序的模块，然后将它跟视图上ng-app
var app = angular.module("runoob",[]);
app.controller("headerCtrl",function($scope,$http){
	$http.get("header.json").success(function(data){
		//model
		//model->$scope  view->{{}}
		$scope.navs = data;
	})
})
app.controller("asideCtrl",function($scope,$http){
	$http.get("aside.json").success(function(data){
		//model
		$scope.navs = data;
	})
})
//angular vue react backbone mvc
app.controller("contentCtrl",function($scope,$http,$sce){
	$scope.toggle = function(e){
		$http.get("json/"+e+".json").success(function(data){
			//model
			//$scope.navs = data;
			console.log(data)
			$scope.html = data.html;
			$scope.html = $sce.trustAsHtml($scope.html);
		})
	}
	
	/*$scope.html = '<p>123AngularJS 通过新的属性和表达式扩展了 HTML。</p>'+
	+'<p>AngularJS 可以构建一个单一页面应用程序（SPAs：Single Page Applications）。</p>'
	+'<p>AngularJS 学习起来非常简单。</p>'
	+'<p><strong><a href="http://www.runoob.com/angularjs/angularjs-intro.html">现在开始学习 AngularJS！</a></strong></p>';
	$scope.html = $sce.trustAsHtml($scope.html);*/
})