'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:ProjectviewadminCtrl
 * @description
 * # ProjectviewadminCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('ProjectviewadminCtrl', function ($scope, $routeParams, $location, $interval, $timeout, ngDialog, createAssetContainer, getProjects, removeProject, updateProjectDescription, getUsers, addUserToProject, updateCollaborationPolicy) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  // Polling
  var poller = $interval(function() {
    getProjectFunc();
    getUsersFunc();
  }, 5000);

  // Destroy Poller at Route Change
  $scope.$on('$destroy', function() {
        if (poller) {
            $interval.cancel(poller);
        }
  });  

  //

  var init = function() {
      getProjectFunc();
      getUsersFunc();
  };

	$scope.id = $routeParams.projectid;
	$scope.project = {};
  $scope.users = [];
      
  $scope.securityPolicyOptions =
  [
      'Open',
      'Closed'
  ]; 

  /*
  $interval(function() {
    getProjectFunc();
  }, 3000)

  timeout(function() {
    getProjectFunc();
  }, 3000)  
  */

  var getProjectFunc = function() {
      getProjects.getProject($scope.id)
      .then(function(){
        // success
        $scope.project = getProjects.project;
      }, function(){
        // error  
      });     
    };

  $scope.addOwnerToProject = function() {
    addUserToProject.addOwnerToProject($scope.selected, $scope.project.id)
    .then(function(){
      $scope.init();
      ngDialog.close();
    }, function() {
      ngDialog.close();
    });    
  };

  $scope.assetContainerCategoryOptions =
    [
        'Sprite',
        'Sound effect',
        'Music'
  ]; 

  var getUsersFunc = function() {
    getUsers.getUsers()
    .then(function(){
      $scope.users = getUsers.users;
    }, function() {

    });    
  };

  $scope.createAssetContainerFunc = function() {
      createAssetContainer.createAssetContainer($scope.id, $scope.assetContainerName, $scope.assetContainerDescription, $scope.projectAssetContainerCategory)
      .then(function(){
        // success
        ngDialog.close();    

      }, function(){
        // error  
      });     

  };    

  $scope.removeProjectFunc = function() {
    removeProject.removeProject($scope.project.id)
    .then(function(){
      ngDialog.close();
      $location.path('/main');
    }, function() {
      ngDialog.close();
      $location.path('/main');
    });

  };

  $scope.updateProjectDescriptionFunc = function() {
    updateProjectDescription.updateProjectDescription($scope.project.id, $scope.project.description);
  };

  $scope.updateCollaborationPolicyFunc = function() {
    updateCollaborationPolicy.updateCollaborationPolicy($scope.project.id, $scope.projectSecurityPolicy);
  };



    // DIALOG FUNCTIONS
  $scope.removeProjectDialog = function () {
      ngDialog.open({ template: 'views/dialogs/removeprojectdialog.html', controller: 'ProjectviewadminCtrl' });
  };

  $scope.addAssetContainerDialog = function() {
      ngDialog.open({template: 'views/dialogs/addassetcontainerdialog.html', controller: 'ProjectviewadminCtrl'});
  };   

  $scope.addOwnerToProjectDialog = function() {
      ngDialog.open({template: 'views/dialogs/addprojectownerdialog.html', controller: 'ProjectviewadminCtrl'});
  };  

  $scope.updateCollaborationPolicyDialog = function() {
      ngDialog.open({template: 'views/dialogs/updatecollaborationpolicydialog.html', controller: 'ProjectviewadminCtrl'});
  };

  init();   

  });

