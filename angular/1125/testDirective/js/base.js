var app = angular.module('bootstrapApp', []);
//ng-click
app.directive('ngXheader', function() {
	return {
		link: function(scope, ele, attr) {
			console.log(ele);
			ele.css('color', 'red')
			ele.bind('click', function() {
				alert("click")
			})
		}
	}
})
app.directive('ngDownload', function() {
	return {
	
		link: function(scope, ele, attr) {
			ele.addClass("abcd")
		}
	}
})