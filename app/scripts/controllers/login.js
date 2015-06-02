'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('LoginCtrl', function ($scope, $location, login, logout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.login = function() {
    	console.log('Login function');
    	console.log('Inputs: ' + $scope.email + ' ' + $scope.password);

    	login.login($scope.email, $scope.password);

    };	

    $scope.logout = function() {
    	console.log('Logout function');
    	logout.logout();
    };


  });
