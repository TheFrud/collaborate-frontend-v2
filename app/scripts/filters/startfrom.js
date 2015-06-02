'use strict';

/**
 * @ngdoc filter
 * @name collaborateApp.filter:startFrom
 * @function
 * @description
 * # startFrom
 * Filter in the collaborateApp.
 */
angular.module('collaborateApp')
  .filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
  });
