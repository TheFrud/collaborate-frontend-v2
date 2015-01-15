'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.register
 * @description
 * # register
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('register', function ($http, $location) {
    // Service logic
    // ...

    var service = {};

    service.register = function(email, password, fullname) {
      $http.post('http://localhost:8085/register', {email: email, password: password, fullname: fullname}).then(function(response) {
      $location.path("/login");
      });        
    }

    // Public API here

    return service;

  });
