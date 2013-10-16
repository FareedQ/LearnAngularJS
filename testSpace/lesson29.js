var myApp = angular.module("app", []);

myApp.config(function($routeProvider){
    $routeProvider.when('/',
        {
            templateUrl:"lesson29-2.html",
            controller:"appCtrl"
        })
        .when('/pizza',
        {
            template:"yum!!"
        })
        .otherwise(
        {
            template:"no go!!"
        });
});

myApp.controller("appCtrl", function($scope){
    $scope.model = {
        message:"This is my app!!"
    }
});