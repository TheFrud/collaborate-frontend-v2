'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('ProfileCtrl', function ($scope, session) {
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

    $scope.getCurrentUserFunc = function() {
    	session.getCurrentUser()
   		.then(function(res){
   			// success
   			$scope.currentUser = session.currentUser;

   		}, function(){
   			// error	
   		});
    }

    $scope.init();     

  });
