'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:MyassetsCtrl
 * @description
 * # MyassetsCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('MyassetsCtrl', function ($scope, getAssets) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.userAssets = [];

    var init = function() {
      $scope.getUserAssetsFunc();
    };

    $scope.getUserAssetsFunc = function() {
      console.log('dasd');
      getAssets.getUserAssets()
      .then(function(){
        // success
        $scope.userAssets = getAssets.userAssets;
        console.log($scope.userAssets);


      }, function(){
        // error  
      });
    };

    init();    
  });
