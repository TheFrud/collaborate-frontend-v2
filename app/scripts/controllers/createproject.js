'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:CreateprojectCtrl
 * @description
 * # CreateprojectCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('CreateprojectCtrl', function ($scope, $http, createProject) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.projectTags = [
        { text: 'Add' },
        { text: 'Tags' }
    ];

    $scope.securityPolicyOptions =
    [
        "Open",
        "Closed"
    ]; 

    $scope.loadTags = function(query) {
         return $http.get('/tags?query=' + query);
    };

    // Metod: createProject
    $scope.createProject = function() {
    	console.log('Create Project Method Activated');
      createProject.createProject($scope.projectTitle, $scope.projectDescription, $scope.projectTags, $scope.projectSecurityPolicy);
    };

  });
