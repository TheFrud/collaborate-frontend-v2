'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:ProjectviewCtrl
 * @description
 * # ProjectviewCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('ProjectviewCtrl', function ($scope, $routeParams, $cookies, getProjects, createAssetContainer) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Inititalization
    $scope.init = function() {
    	getProjectFunc();
    }

    $scope.id = $routeParams.id;
    $scope.project;
    $scope.userId = $cookies.currentUserId;
    $scope.isUserAdmin = false;
    console.log($cookies.currentUserId);

    $scope.isUserAdminOfProject = function() {
      
      for(var i = 0; i < $scope.project.owners.length; i++) {
        if($scope.userId == $scope.project.owners[i].id) {
          $scope.isUserAdmin = true;
        }
      }
    }

    var getProjectFunc = function() {
    	getProjects.getProject($scope.id)
   		.then(function(res){
   			// success
   			$scope.project = getProjects.project;
   			console.log($scope.project);
        $scope.isUserAdminOfProject();
   		}, function(){
   			// error	
   		});    	
    }



    $scope.init();
  });
