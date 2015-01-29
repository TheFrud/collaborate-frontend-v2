'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('MainCtrl', function ($scope, $log, $interval, getProjects, getAssets, getAssetContainer) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Polling
    var poller = $interval(function() {
      getProjectsFunc();
      getAssetContainersFunc();
    }, 15000);

    // Destroy Poller at Route Change
    $scope.$on('$destroy', function() {
          if (poller) {
              $interval.cancel(poller);
          }
    }); 


    // Inititalization
    $scope.init = function() {
    	getProjectsFunc();
      getAssetContainersFunc();
    };

    // Inititalization end

    $scope.projects = [];
    $scope.totalNumberOfAssetContainers = 0;

    // Pagination stuff
    $scope.currentPageProjects = 0;
    $scope.pageSizeProjects = 4;

    $scope.currentPageAssetContainers = 0;
    $scope.pageSizeAssetContainers = 2;


    $scope.numberOfPagesProjects=function(){
        return Math.ceil($scope.projects.length/$scope.pageSizeProjects);                
    }

    $scope.numberOfPagesAssetContainers=function(){
        return Math.ceil($scope.totalNumberOfAssetContainers/$scope.pageSizeAssetContainers);                
    }


    // Pagination stuff ENDS

    var totalNumberOfAssetContainersFunc = function(projects) {
      
      var numAssetContainers = 0;

      for(var i = 0; i < projects.length; i++) {

        for(var j = 0; j < projects[i].assetContainers.length; j++) {
          numAssetContainers += 1;
        }

      }

      $scope.totalNumberOfAssetContainers = numAssetContainers;
    }

    var getProjectsFunc = function() {
    	getProjects.getOpenProjects()
   		.then(function(){
   			// success
   			$scope.projects = getProjects.openProjects;
        totalNumberOfAssetContainersFunc($scope.projects);
        console.log($scope.totalNumberOfAssetContainers);

   		}, function(){
   			// error	
   		});
    };

    var getAssetContainersFunc = function() {
      getAssetContainer.getAssetContainers()
      .then(function(){
        // success
        $scope.assetContainers = getAssetContainer.assetContainers;


      }, function(){
        // error  
      });
    };

    $scope.init(); 
  });
