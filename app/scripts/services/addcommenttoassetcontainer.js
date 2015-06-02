'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.addCommentToAssetContainer
 * @description
 * # addCommentToAssetContainer
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('addCommentToAssetContainer', function ($http, $q) {
    // Service logic
    // ...

    var service = {};

    service.addCommentToAssetContainer = function(projectId, assetContainerId, assetContainerComment) {
      var defer = $q.defer();
      $http.post('http://localhost:8085/assetcontainer/add/comment', 
        {withCredentials: true, projectId: projectId, assetContainerId: assetContainerId, assetContainerComment: assetContainerComment })
      .success(function() {
        defer.resolve();
        console.log('Gick bra att lägga till kommentar till asset container.');
      }).error(function() {
        defer.reject();
        console.log('Gick skit att lägga till kommentar till asset container.');
      });  
      return defer.promise;     
    };


    return service;
  });
