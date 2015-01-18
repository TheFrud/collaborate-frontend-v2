'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.updateProjectDescription
 * @description
 * # updateProjectDescription
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('updateProjectDescription', function ($http) {
    // Service logic
    // ...

    var service = {};

    service.updateProjectDescription = function(projectId, projectDescription) {
      $http.post('http://localhost:8085/project/description/update', 
        {withCredentials: true, projectId: projectId, projectDescription: projectDescription})
      .success(function(response) {
        console.log('Gick bra');
      }).error(function(response) {
        console.log('Gick skit');
      });
    };

    return service;
  });
