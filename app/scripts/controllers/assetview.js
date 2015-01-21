'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:AssetviewCtrl
 * @description
 * # AssetviewCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('AssetviewCtrl', function ($scope, $routeParams, getAssets) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projectId = $routeParams.projectid;
    $scope.projectTitle = $routeParams.projecttitle;
    $scope.assetContainerId = $routeParams.assetcontainerid;
    $scope.assetContainerTitle = $routeParams.assetcontainertitle;
    $scope.assetId = $routeParams.assetid;
    $scope.assetTitle = $routeParams.assettitle;

    $scope.asset = {};

    var init = function() {
      $scope.getAssetFunc();
    }

    $scope.getAssetFunc = function() {
      getAssets.getAsset($scope.assetId)
      .then(function(res){
        // success
        $scope.asset = getAssets.asset;

      }, function(){
        // error  
      });        
    }


    init();

  });
