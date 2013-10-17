var app = angular.module("app", []);

app.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
            templateUrl: "lesson29-2.html",
            controller: "ViewCtrl",
            resolve: {
                app: function($q, $timeout){
                    var defer = $q.defer();
                    $timeout(function(){
                        defer.reject("network is down");
                    }, 2000);
                    return defer.promise;
                }
            }
        })
});

app.controller("AppCtrl", function($rootScope){
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
        console.log(rejection);
    })
});

app.controller("ViewCtrl", function($scope, $q){

    var defer = $q.defer();
    defer.promise
        .then(function(weapon){
            alert("You can have my " + weapon)
            return "bow"
        })
        .then(function(weapon){
            alert("and my " + weapon)
            return "axe"
        })
        .then(function(weapon){
            alert("and my " + weapon)
        })

    defer.resolve("sword");

    $scope.model = {
        message: "This is my app!!"
    }
});