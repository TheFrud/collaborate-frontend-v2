'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:ProjectviewCtrl
 * @description
 * # ProjectviewCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('ProjectviewCtrl', function ($scope, $routeParams, getProjects, createAssetContainer) {
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

    var getProjectFunc = function() {
    	getProjects.getProject($scope.id)
   		.then(function(res){
   			// success
   			$scope.project = getProjects.project;
   			console.log($scope.project);


   		}, function(err){
   			// error	
   		});    	
    }

    $scope.createAssetContainerFunc = function() {
      createAssetContainer.createAssetContainer($scope.id, $scope.assetContainerName, $scope.assetContainerDescription);
      console.log("Försökte skapa asset container");
    }

    $scope.init();
  });
