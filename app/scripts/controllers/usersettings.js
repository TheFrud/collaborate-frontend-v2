'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:UsersettingsCtrl
 * @description
 * # UsersettingsCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('UsersettingsCtrl', function ($scope, session) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Inititalization
    $scope.init = function() {
    	// Metoden
    	$scope.getCurrentUserFunc();
    }

	$scope.currentUser = {};
	$scope.editBio = true;

    $scope.getCurrentUserFunc = function() {
    	session.getCurrentUser()
   		.then(function(res){
   			// success
   			$scope.currentUser = session.currentUser;

   		}, function(){
   			// error	
   		});
    }

    $scope.editUserFunc = function() {
    	console.log("dsada");
    	session.editUser($scope.currentUser.bio);
    }

    $scope.toggleEditBio = function() {
      if($scope.editBio == false) {
        $scope.editBio = true;
      }
      else {
        $scope.editBio = false;
      }
    }

    $scope.init();  	
  });
