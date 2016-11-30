var app = angular.module('news', ['ui.router']);
app.config(function($stateProvider) {
	$stateProvider.state('index', {
		url: '/index',
		templateUrl: 'template/index.html'
	}).state('search',{
		url:'/search',
		templateUrl: 'template/search.html'
	}).state('index.tuijian',{
		url:'/tuijian',
		templateUrl:'template/index/tuijian.html'
	}).state('index.video',{
		url:'/video',
		templateUrl:'template/index/video.html'
	})
})
app.controller('indexCtrl', function($scope) {
})