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
        .when('/map/:country/:city',
        {
            template:"{{model.message}}",
            controller:"mapCtrl"
        })
        .when('/:unfortunate',
        {
            redirectTo:function(routeParams, path, search){
                console.log(routeParams);
                console.log(path);
                console.log(search);
                return("/");
            }
        })
        .otherwise(
        {
            redirectTo:'/'
        });
});

myApp.controller("appCtrl", function($scope){
    $scope.model = {
        message:"This is my app!!"
    }
});

myApp.controller("mapCtrl", function($scope, $routeParams){
    $scope.model = {
        message: "You live in " + $routeParams.city + " which is in "
            + $routeParams.country[0].toUpperCase() + $routeParams.country.substring(1).toLowerCase()
    }
})