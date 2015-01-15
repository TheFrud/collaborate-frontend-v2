'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('MainCtrl', function ($scope, getProjects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Inititalization
    $scope.init = function() {
    	getProjectsFunc();
    }

    // Inititalization end

    $scope.projects = [];

    var getProjectsFunc = function() {
    	getProjects.getProjects()
   		.then(function(res){
   			// success
   			$scope.projects = getProjects.projects;


   		}, function(){
   			// error	
   		});
    }




    $scope.init(); 
  });
