'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.createAsset
 * @description
 * # createAsset
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('createAsset', function ($http) {
    // Service logic
    // ...

    var service = {};

    service.createAsset = function(projectId, assetContainerId, assetName, assetDescription, assetUrl) {
      $http.post('http://localhost:8085/asset/create', 
        {withCredentials: true, projectId: projectId, assetContainerId: assetContainerId, assetName: assetName, assetDescription: assetDescription, assetUrl: assetUrl })
      .success(function() {
        console.log('Gick bra att skapa asset');
      }).error(function() {
        console.log('Gick skit att skapa asset');
      });     
    };

    return service;

  });
