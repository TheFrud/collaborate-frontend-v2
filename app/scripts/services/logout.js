'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.logout
 * @description
 * # logout
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('logout', function ($http, $location, session) {
    // Service logic
    // ...

    var service = {};

    service.logout = function() {
      $http.post('http://localhost:8085/logout').then(function() {
        session.logout();
        $location.path('/landingpage');
      });

    };    

    // Public API here

    return service;
  });
