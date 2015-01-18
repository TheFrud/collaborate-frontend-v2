'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.removeProject
 * @description
 * # removeProject
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('removeProject', function ($http) {
    // Service logic
    // ...

    var service = {};

    service.removeProject = function(projectId) {
      $http.post('http://localhost:8085/project/remove', 
        {withCredentials: true, projectId: projectId})
      .success(function(response) {
        console.log('Gick bra att ta bort projekt');
      }).error(function(response) {
        console.log('Gick skit att ta bort projekt');
      });      
    }

    return service;

  });
