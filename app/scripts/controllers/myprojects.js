'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:MyprojectsCtrl
 * @description
 * # MyprojectsCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('MyprojectsCtrl', function ($scope, getProjects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Inititalization
    $scope.init = function() {
    	// Metoden
    	$scope.getProjectWhereUserIsOwner();
    }

    $scope.userProjects = [];

    $scope.getProjectWhereUserIsOwner = function() {
    	getProjects.getProjectWhereUserIsOwner()
   		.then(function(res){
   			// success
   			$scope.userProjects = getProjects.userProjects;


   		}, function(){
   			// error	
   		});
    }

    $scope.init(); 
  });
