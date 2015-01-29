'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.addCommentToProject
 * @description
 * # addCommentToProject
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('addCommentToProject', function ($http) {
    // Service logic
    // ...

    var service = {};

    service.addCommentToProject = function(projectId, projectComment) {
      $http.post('http://localhost:8085/project/add/comment', 
        {withCredentials: true, projectId: projectId, projectComment: projectComment})
      .success(function() {
        console.log('Gick bra att lägga till kommentar till projekt.');
      }).error(function() {
        console.log('Gick skit att lägga till kommentar till projekt.');
      });       
    };


    return service;

  });
