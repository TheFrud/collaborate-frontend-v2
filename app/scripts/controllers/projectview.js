'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:ProjectviewCtrl
 * @description
 * # ProjectviewCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('ProjectviewCtrl', function ($scope, $routeParams, $cookies, $interval, ngDialog, getProjects, createAssetContainer, addCommentToProject) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Polling
    var poller = $interval(function() {
      getProjectFunc();
    }, 5000);

    // Destroy Poller at Route Change
    $scope.$on('$destroy', function() {
          if (poller) {
              $interval.cancel(poller);
          }
    });


    // Inititalization
    $scope.init = function() {
    	getProjectFunc();
    };

    $scope.id = $routeParams.id;
    $scope.project = {};
    $scope.userId = $cookies.currentUserId;
    $scope.isUserAdmin = false;
    console.log($cookies.currentUserId);

    $scope.isUserAdminOfProject = function() {
      
      for(var i = 0; i < $scope.project.owners.length; i++) {
        if($scope.userId == $scope.project.owners[i].id) {
          $scope.isUserAdmin = true;
        }
      }
    };

    var getProjectFunc = function() {
    	getProjects.getProject($scope.id)
   		.then(function(){
   			// success
   			$scope.project = getProjects.project;
   			console.log($scope.project);
        $scope.isUserAdminOfProject();
   		}, function(){
   			// error	
   		});    	
    };

    $scope.addCommentToProjectFunc = function() {
      addCommentToProject.addCommentToProject($scope.project.id, $scope.projectComment);
      ngDialog.close();
    };

    // DIALOG FUNCTIONS
    $scope.addCommentToProjectDialog = function () {
        ngDialog.open({ template: 'views/dialogs/addcommenttoprojectdialog.html', controller: 'ProjectviewCtrl' });
    };



    $scope.init();
  });
