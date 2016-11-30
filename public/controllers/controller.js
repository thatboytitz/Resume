var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
      console.log("Hello World from controller");
      $http.get('/resume').success(function(response){
           console.log("I got the data I requested");
           $scope.resume = response;
      });

}]);﻿


