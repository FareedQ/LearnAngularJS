var app = angular.module('choreApp', []);

app.controller('ChoreCtrl', function($scope){
    $scope.logChore = function(chore){
        alert(chore + " is done!")
    }
});

app.directive("kid", function(){
    return{
        restrict:"E",
        scope:{
            done:"&" //for functions
        },
        template: "<input type='text' ng-model='chore'>" +
            "{{chore}}" +
            "<div class='button' ng-click='done({chore:chore})'>I\'m done!<div>"
    }
})

app.directive("drink", function(){
    return{
        restrict:"E",
        scope:{
            flavour:"@" //for attribute value
        },
        template:"<div>{{flavour}}</div>"
    }
})

app.controller('SnackCtrl', function($scope){
    $scope.ctrlSnack = "Snickers"
})

app.directive("snack", function(){
    return{
        restrict:"E",
        scope:{
            flavour:"="
        },
        template:"<input type='text' ng-model='flavour'/>"
    }
})

app.controller("AppCtrl", function($scope){
    $scope.callHome = function(message){
        alert(message);
    }
})

app.directive("phone", function(){
    return{
        restrict:"E",
        scope:{
            dial:"&"
        },
        template:"<div class='button' ng-click='dial({message:value})'>Call Home!</div>" +
            "<input type='text' ng-model='value'>"
    }
})