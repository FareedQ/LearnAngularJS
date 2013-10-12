var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
	return {message:"I'm data from a service"}
});

myApp.filter('reverse', function(Data){
	return function (input) {
		return input.split("").reverse().join("") + " " + Data.message;
	}
})

function firstCtrl($scope, Data) {
	$scope.data = Data;
}

function secondCtrl($scope, Data) {
	$scope.data = Data;
}