'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:ProjectviewadminCtrl
 * @description
 * # ProjectviewadminCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('ProjectviewadminCtrl', function ($scope, $routeParams, $location, ngDialog, createAssetContainer, getProjects, removeProject, updateProjectDescription) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.init = function() {
      getProject();
  }
	$scope.id = $routeParams.id;
	$scope.project = {};

  $scope.assetContainerCategoryOptions =
    [
        "Sprite",
        "Sound effect",
        "Music"
  ]; 

  $scope.createAssetContainerFunc = function() {
      createAssetContainer.createAssetContainer($scope.id, $scope.assetContainerName, $scope.assetContainerDescription, $scope.projectAssetContainerCategory);
      console.log("Försökte skapa asset container");
      ngDialog.close();
  }    

  $scope.removeProjectFunc = function() {
    removeProject.removeProject($scope.project.id)
    .then(function(){
      ngDialog.close();
      $location.path("/main");
    }, function() {
      ngDialog.close();
      console.log("Gick inte att ta bort projektet.");
      $location.path("/main");
    });

  }

  $scope.updateProjectDescriptionFunc = function() {
    console.log("dsadsa");
    updateProjectDescription.updateProjectDescription($scope.project.id, $scope.project.description);
  }

  var getProject = function() {
      getProjects.getProject($scope.id)
      .then(function(res){
        // success
        $scope.project = getProjects.project;
        console.log($scope.project);

      }, function(){
        // error  
      });     
    }

    // DIALOG FUNCTIONS
  $scope.removeProjectDialog = function () {
      ngDialog.open({ template: 'views/dialogs/removeprojectdialog.html', controller: 'ProjectviewadminCtrl' });
  };

  $scope.addAssetContainerDialog = function() {
      ngDialog.open({template: 'views/dialogs/addassetcontainerdialog.html', controller: 'ProjectviewadminCtrl'});
  }    

    $scope.init();   

  });

