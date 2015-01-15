'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.createProject
 * @description
 * # createProject
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('createProject', function ($http) {
    // Service logic
    // ...

    var service = {};

    service.createProject = function(projectTitle, projectDescription, projectTags, projectSecurityPolicy) {
      $http.post('http://localhost:8085/project/create', 
        {withCredentials: true, projectTitle: projectTitle, projectDescription: projectDescription, projectTags: projectTags, projectSecurityPolicy: projectSecurityPolicy})
      .success(function(response) {
        console.log('Gick bra');
      }).error(function(response) {
        console.log('Gick skit');
      });
    };

    return service;

  });
