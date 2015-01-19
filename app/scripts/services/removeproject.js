'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.removeProject
 * @description
 * # removeProject
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('removeProject', function ($http, $q) {
    // Service logic
    // ...

    var service = {};

    service.removeProject = function(projectId) {
      var defer = $q.defer();
      $http.post('http://localhost:8085/project/remove', 
        {withCredentials: true, projectId: projectId})
      .success(function(response) {
        console.log('Gick bra att ta bort projekt');
        defer.resolve();
      }).error(function(response) {
        console.log('Gick skit att ta bort projekt');
        defer.reject();
      });  
      return defer.promise;       
    }

    return service;

  });
