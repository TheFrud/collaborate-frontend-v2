'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.addCommentToAsset
 * @description
 * # addCommentToAsset
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('addCommentToAsset', function ($http) {
    // Service logic
    // ...

    var service = {};

    service.addCommentToAsset = function(projectId, assetContainerId, assetId, assetComment) {
      $http.post('http://localhost:8085/addcommenttoasset', 
        {withCredentials: true, projectId: projectId, assetContainerId: assetContainerId, assetId: assetId, assetComment: assetComment })
      .success(function(response) {
        console.log('Gick bra att lägga till kommentar till asset.');
      }).error(function(response) {
        console.log('Gick skit att lägga till kommentar till asset.');
      });       
    }


    return service;

  });
