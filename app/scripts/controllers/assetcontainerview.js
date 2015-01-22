'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:AssetcontainerviewCtrl
 * @description
 * # AssetcontainerviewCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('AssetcontainerviewCtrl', function ($scope, $routeParams, getAssetContainer, createAsset, ngDialog, getProjects, session, markAssetContainerAsCompleted) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.assetContainerId = $routeParams.assetcontainerid;
    $scope.assetContainerTitle = $routeParams.assetcontainertitle;
    $scope.projectId = $routeParams.projectid;
    $scope.projectTitle = $routeParams.projecttitle;
    $scope.addAssetForm = false;
    $scope.isUserAdmin = false;
    $scope.project = {};
    $scope.currentUser = {};

    $scope.assetContainer = null;

    // Inititalization
    $scope.init = function() {
    	getAssetContainerFunc();
      getProjectFunc();
    }

    $scope.id = $routeParams.id;
    
    var getProjectFunc = function() {
      getProjects.getProject($scope.projectId)
      .then(function(res){
        // success
        $scope.project = getProjects.project;
        console.log($scope.project);
        $scope.getCurrentUserFunc();
      }, function(){
        // error  
      });     
    }

    $scope.getCurrentUserFunc = function() {
      session.getCurrentUser()
      .then(function(res){
        // success
        $scope.currentUser = session.currentUser;
        $scope.isUserAdminOfProject();
      }, function(){
        // error  
      });
    }


    $scope.isUserAdminOfProject = function() {
      console.log("Is user admin method before loop");
      for(var i = 0; i < $scope.project.owners.length; i++) {
        console.log("En loop.");
        if($scope.currentUser.id == $scope.project.owners[i].id) {
          console.log("Hittade som admin");
          $scope.isUserAdmin = true;
        }
      }
    }



    $scope.createAssetFunc = function() {
    	createAsset.createAsset($scope.projectId, $scope.assetContainerId, $scope.assetName, $scope.assetDescription, $scope.assetUrl);
      ngDialog.close();
    }

    var getAssetContainerFunc = function() {
    	getAssetContainer.getAssetContainer($scope.assetContainerId)
   		.then(function(res){
   			// success
   			$scope.assetContainer = getAssetContainer.assetContainer;
   			console.log($scope.assetContainer);


   		}, function(){
   			// error	
   		});    	
    } 

    /*
    $scope.toggleAddAssetForm = function() {
      if($scope.addAssetForm == false) {
        $scope.addAssetForm = true;
      }
      else {
        $scope.addAssetForm = false;
      }
    }
    */

    $scope.markAssetContainerAsCompleted = function() { 
      markAssetContainerAsCompleted.markAssetContainerAsCompleted($scope.projectId, $scope.assetContainerId);
      ngDialog.close();    
    }    

    // DIALOG FUNCTIONS
   $scope.addAssetDialog = function() {
      ngDialog.open({template: 'views/dialogs/addassetdialog.html', controller: 'AssetcontainerviewCtrl'});
    }    

    $scope.markAssetContainerAsCompletedDialog = function () {
        ngDialog.open({ template: 'views/dialogs/markassetcontainerascompleted.html', controller: 'AssetcontainerviewCtrl' });
    };

    $scope.init();
  });
