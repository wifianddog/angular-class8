
var app = angular.module("doingApp",[]);
app.controller("doingCtrl",function($scope){
    $scope.username = "abc";
    $scope.password = 123;

    $scope.login = function() {
       console.log($scope.username);
    }
});