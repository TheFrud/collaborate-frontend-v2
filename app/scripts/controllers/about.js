'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
