'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:AssetviewCtrl
 * @description
 * # AssetviewCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('AssetviewCtrl', function ($scope, $routeParams, $interval, getAssets, ngDialog, addCommentToAsset, getProjects, approveAsset, session) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Polling
    var poller = $interval(function() {
      $scope.getAssetFunc();
      getProjectFunc();
    }, 5000);

    // Destroy Poller at Route Change
    $scope.$on('$destroy', function() {
          if (poller) {
              $interval.cancel(poller);
          }
    });  

    //

    $scope.projectId = $routeParams.projectid;
    $scope.projectTitle = $routeParams.projecttitle;
    $scope.assetContainerId = $routeParams.assetcontainerid;
    $scope.assetContainerTitle = $routeParams.assetcontainertitle;
    $scope.assetId = $routeParams.assetid;
    $scope.assetTitle = $routeParams.assettitle;

    $scope.asset = {};
    $scope.project = {};
    $scope.isUserAdmin = false;
    $scope.currentUser = {};

    var init = function() {
      $scope.getAssetFunc();
      getProjectFunc();
    };

    $scope.getAssetFunc = function() {
      getAssets.getAsset($scope.assetId)
      .then(function(){
        // success
        $scope.asset = getAssets.asset;

      }, function(){
        // error  
      });        
    };

    var getProjectFunc = function() {
      getProjects.getProject($scope.projectId)
      .then(function(){
        // success
        $scope.project = getProjects.project;
        console.log($scope.project);
        $scope.getCurrentUserFunc();
      }, function(){
        // error  
      });     
    };

    $scope.getCurrentUserFunc = function() {
      session.getCurrentUser()
      .then(function(){
        // success
        $scope.currentUser = session.currentUser;
        $scope.isUserAdminOfProject();
      }, function(){
        // error  
      });
    };


    $scope.isUserAdminOfProject = function() {
      console.log('Is user admin method before loop');
      for(var i = 0; i < $scope.project.owners.length; i++) {
        console.log('En loop.');
        if($scope.currentUser.id === $scope.project.owners[i].id) {
          console.log('Hittade som admin');
          $scope.isUserAdmin = true;
        }
      }
    };

    $scope.addCommentToAssetFunc = function() {
      addCommentToAsset.addCommentToAsset($scope.projectId, $scope.assetContainerId, $scope.assetId, $scope.assetComment);
      ngDialog.close();
    };

    $scope.approveAssetFunc = function() {
      approveAsset.approveAsset($scope.projectId, $scope.assetContainerId, $scope.assetId);  
      ngDialog.close();    
    };

    // DIALOG FUNCTIONS
    $scope.addCommentToAssetDialog = function () {
        ngDialog.open({ template: 'views/dialogs/addcommenttoassetdialog.html', controller: 'AssetviewCtrl' });
    };

    $scope.approveAssetDialog = function () {
        ngDialog.open({ template: 'views/dialogs/approveassetdialog.html', controller: 'AssetviewCtrl' });
    };

    init();

  });
