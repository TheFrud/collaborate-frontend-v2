'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.createProject
 * @description
 * # createProject
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('createProject', function ($http, $q) {
    // Service logic
    // ...

    var service = {};

    service.createProject = function(projectTitle, projectDescription, projectTags, projectSecurityPolicy) {
      var defer = $q.defer();
      $http.post('http://localhost:8085/project/create', 
        {withCredentials: true, projectTitle: projectTitle, projectDescription: projectDescription, projectTags: projectTags, projectSecurityPolicy: projectSecurityPolicy})
      .success(function(response) {
        defer.resolve();
        console.log('Gick bra');
      }).error(function(response) {
        defer.reject();
        console.log('Gick skit');
      });
      return defer.promise; 
    };

    return service;

  });
