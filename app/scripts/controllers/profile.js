'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('ProfileCtrl', function ($scope, $routeParams, session, getUsers) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Inititalization
    $scope.init = function() {
    	// Metoden
    	// $scope.getCurrentUserFunc();
      $scope.getUserFunc();

    };

	$scope.currentUser = {};
  $scope.userId = $routeParams.profileid;

  $scope.getUserFunc = function() {
    getUsers.getUser($scope.userId)
    .then(function(){
      // success
      $scope.currentUser = getUsers.user;
    }, function(){
      // error  
    });    
  };

  $scope.getCurrentUserFunc = function() {
    session.getCurrentUser()
   	.then(function(){
   		// success
   		$scope.currentUser = session.currentUser;
   	}, function(){
   		// error	
   	});
  };

    $scope.init();     

  });
