var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
	return {message:"I'm data from a service"}
});

function firstCtrl($scope, Data) {
	$scope.data = Data;
}

function secondCtrl($scope, Data) {
	$scope.data = Data;
}