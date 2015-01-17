'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('MainCtrl', function ($scope, getProjects, getAssets, getAssetContainer) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Inititalization
    $scope.init = function() {
    	getProjectsFunc();
      getAssetContainersFunc();
    }

    // Inititalization end

    $scope.projects = [];
    $scope.assetContainers = [];

    var getProjectsFunc = function() {
    	getProjects.getProjects()
   		.then(function(res){
   			// success
   			$scope.projects = getProjects.projects;


   		}, function(){
   			// error	
   		});
    }

    var getAssetContainersFunc = function() {
      getAssetContainer.getAssetContainers()
      .then(function(res){
        // success
        $scope.assetContainers = getAssetContainer.assetContainers;


      }, function(){
        // error  
      });
    }

    $scope.init(); 
  });
