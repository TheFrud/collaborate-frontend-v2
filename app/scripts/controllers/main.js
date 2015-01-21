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
    // $scope.assetContainers = [];
    $scope.totalItems = 100;
    $scope.currentPage = 1;
    $scope.maxSize = 2;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;


    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);
    };

    var getProjectsFunc = function() {
    	getProjects.getProjects()
   		.then(function(res){
   			// success
   			$scope.projects = getProjects.projects;
        // $scope.totalItems = $scope.projects.length;
        console.log($scope.totalItems);
        console.log($scope.projects);

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
