'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:UsersettingsCtrl
 * @description
 * # UsersettingsCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('UsersettingsCtrl', function ($scope, $location, session) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Inititalization
    $scope.init = function() {
    	// Metoden
    	$scope.getCurrentUserFunc();
    };

	$scope.currentUser = {};
	$scope.editBio = true;

    $scope.getCurrentUserFunc = function() {
    	session.getCurrentUser()
   		.then(function(){
   			// success
   			$scope.currentUser = session.currentUser;

   		}, function(){
   			// error	
   		});
    };

    $scope.editUserFunc = function() {
    	session.editUser($scope.currentUser.bio)
      .then(function(){
        // success
        $location.path('/profile/' + $scope.currentUser.id + '/' + $scope.currentUser.username);
      }, function(){
        // error  
      });       
      
    };

    $scope.toggleEditBio = function() {
      if($scope.editBio === false) {
        $scope.editBio = true;
      }
      else {
        $scope.editBio = false;
      }
    };

    $scope.init();  	
  });
