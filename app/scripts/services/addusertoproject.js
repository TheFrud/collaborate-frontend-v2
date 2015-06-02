'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.addUserToProject
 * @description
 * # addUserToProject
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('addUserToProject', function ($http, $q) {
    // Service logic
    // ...

    var service = {};

    service.addOwnerToProject = function(userEmail, projectId) {
      var defer = $q.defer();
      $http.post('http://localhost:8085/addownertoproject', 
        {withCredentials: true, userEmail: userEmail, projectId: projectId})
      .success(function() {
        defer.resolve();
        console.log('Gick bra att lägga till användare till projekt (som ägare)');
      }).error(function() {
        defer.reject();
        console.log('Gick skit att lägga till användare till projekt (som ägare)');
      });    
      return defer.promise;   
    };

    return service;

  });
