var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
	var Data = {}
	Data.message = "I'm data from a service";
	Data.superHeros = [
		{
			secretIdentity: "Bruce Bannar",
			hero: "Hulk"
		},
		{
			secretIdentity: "Bruce Wayne",
			hero: "Batman"
		},
		{
			secretIdentity: "Clark Kent",
			hero: "Superman"
		}
	];
	return Data;
});

myApp.filter('reverse', function(Data){
	return function (input) {
		return input.split("").reverse().join("");
	}
});

myApp.directive("batman", function(){
	return {
		restrict: "E",
		template: "<div>Here I am to save the day</div>"
	}
});

myApp.directive("superman", function(){
	return {
		restrict: "A",
		link: function(){
			alert("Here I am to save the day")
		}
	}
});

myApp.directive("flash", function(){
	return {
		restrict: "C",
		link: function(){
			alert("Here I am to save the day")
		}
	}
});

function firstCtrl($scope, Data) {
	$scope.data = Data;
}

function secondCtrl($scope, Data) {
	$scope.data = Data;
}

function thirdCtrl($scope, Data) {
	$scope.superHeros = Data.superHeros;
}