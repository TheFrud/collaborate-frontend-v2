'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:AssetcontainerviewCtrl
 * @description
 * # AssetcontainerviewCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('AssetcontainerviewCtrl', function ($scope, $routeParams, getAssetContainer, createAsset) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.assetContainerId = $routeParams.id;
    $scope.assetContainerTitle = $routeParams.title;
    $scope.addAssetForm = false;

    $scope.assetContainer = null;

    // Inititalization
    $scope.init = function() {
    	getAssetContainerFunc();

    }

    $scope.id = $routeParams.id;
    $scope.project;

    $scope.createAssetFunc = function() {
    	createAsset.createAsset($scope.assetContainerId, $scope.assetName, $scope.assetDescription, $scope.assetUrl);
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

    $scope.toggleAddAssetForm = function() {
      if($scope.addAssetForm == false) {
        $scope.addAssetForm = true;
      }
      else {
        $scope.addAssetForm = false;
      }
    }

    $scope.init();
  });
