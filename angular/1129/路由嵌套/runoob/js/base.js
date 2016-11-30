var app = angular.module('runoob',['ui.router']);
app.config(function($stateProvider){
	$stateProvider.state('index',{
		url:'/index',
		templateUrl:'template/index.html'
	}).state('home',{
		url:'/home',
		templateUrl:'template/home.html'
	}).state('index.a',{
		url:'/a',
		templateUrl:'template/index/a.html'
	}).state('index.b',{
		url:'/b',
		templateUrl:'template/index/b.html'
	}).state('index.b.ba',{
		url:'/ba',
		template:'<div>ba</div>'
	}).state('index.b.bb',{
		url:'/bb',
		template:'<div>bb</div>'
	})
})
app.directive('xnav',function(){
	return {
		templateUrl:'directive/xnav.html'
	}
})
