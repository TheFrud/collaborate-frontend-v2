'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.createAssetContainer
 * @description
 * # createAssetContainer
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('createAssetContainer', function ($http, $q) {
    // Service logic
    // ...

    var service = {};

    service.createAssetContainer = function(projectId, assetContainerName, assetContainerDescription,projectAssetContainerCategory) {
      var defer = $q.defer();
      $http.post('http://localhost:8085/project/assetcontainer/add', 
        {withCredentials: true, projectId: projectId, assetContainerName: assetContainerName, assetContainerDescription: assetContainerDescription, projectAssetContainerCategory: projectAssetContainerCategory})
      .success(function(response) {
        defer.resolve();
        console.log('Gick bra att lägga till asset container.');
      }).error(function(response) {
        defer.reject();
        console.log('Gick skit att lägga till asset container');
      });   
      return defer.promise;   
    }

    return service;

  });
