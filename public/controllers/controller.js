var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
      edu1 = {
          school : 'Cal State Los Angeles',
          degree : 'Computer Science',
          last_year : '2016'
      };

      edu2 = {
          school : 'Dummy',
          degree : 'Computer Science',
          last_year : '9999'
      };

      var eduList = [
            {          
                  school : 'Cal State Los Angeles',
                  degree : 'Computer Science',
                  last_year : '2016'
            },
            {
                  school : 'Dummy',
                  degree : 'Computer Science',
                  last_year : '9999'
            },
            {
                  school : 'Dummy',
                  degree : 'Computer Science',
                  last_year : '9999'
            },
            {
                  school : 'Dummy',
                  degree : 'Computer Science',
                  last_year : '9999'
            },
            {
                  school : 'Dummy',
                  degree : 'Computer Science',
                  last_year : '9999'
            }
      ];

      var skillList = [
            {skill : 'HTML'},
            {skill : 'Bootstrap'},
            {skill : 'Javascript'},
            {skill : 'Angular JS'},
            {skill : 'Node JS'},
            {skill : 'Java'},
            {skill : 'Many skills'}
      ];

      var projectList = [
            {
                  title : 'Project Title',
                  description : 'Project Description'
            },
            {
                  title : 'Resume',
                  description : 'This'
            },
            {
                  title : 'Project Title',
                  description : 'Project Description'
            },
            {
                  title : 'Project Title',
                  description : 'Project Description'
            },
            {
                  title : 'Project Title',
                  description : 'Project Description'
            }

      ];

      $scope.eduList = eduList;
      $scope.skillList = skillList;
      $scope.projectList = projectList;
}]);﻿


