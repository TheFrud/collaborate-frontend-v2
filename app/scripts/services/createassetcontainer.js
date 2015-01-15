'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.createAssetContainer
 * @description
 * # createAssetContainer
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('createAssetContainer', function ($http) {
    // Service logic
    // ...

    var service = {};

    service.createAssetContainer = function(projectId, assetContainerName, assetContainerDescription) {
      $http.post('http://localhost:8085/project/assetcontainer/add', 
        {withCredentials: true, projectId: projectId, assetContainerName: assetContainerName, assetContainerDescription: assetContainerDescription})
      .success(function(response) {
        console.log('Gick bra att lägga till asset container.');
      }).error(function(response) {
        console.log('Gick skit att lägga till asset container');
      });      
    }

    return service;

  });
