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

    service.createAsset = function(assetContainerId, assetName, assetDescription) {
      $http.post('http://localhost:8085/asset/create', 
        {withCredentials: true, assetContainerId: assetContainerId, assetName: assetName, assetDescription: assetDescription })
      .success(function(response) {
        console.log('Gick bra att skapa asset');
      }).error(function(response) {
        console.log('Gick skit att skapa asset');
      });     
    }

    return service;

  });
