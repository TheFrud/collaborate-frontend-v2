'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('SignupCtrl', function ($scope, register) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.register = function() {
    	register.register($scope.email, $scope.password, $scope.fullname);
    }
  });
