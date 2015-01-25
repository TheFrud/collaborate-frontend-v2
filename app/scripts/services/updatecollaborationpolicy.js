'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.updateCollaborationPolicy
 * @description
 * # updateCollaborationPolicy
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('updateCollaborationPolicy', function ($http, $q) {
    // Service logic
    // ...

    var service = {};

    service.updateCollaborationPolicy = function(projectId, projectSecurityPolicy) {
      var defer = $q.defer();
      $http.post('http://localhost:8085/project/update/collaborationpolicy', 
        {withCredentials: true, projectId: projectId, projectSecurityPolicy: projectSecurityPolicy})
      .success(function(response) {
        defer.resolve();
        console.log('Gick bra att ändra collaboration policy');
      }).error(function(response) {
        defer.reject();
        console.log('Gick skit att ändra collaboration policy');
      });    
      return defer.promise;   
    }


    return service;

  });
