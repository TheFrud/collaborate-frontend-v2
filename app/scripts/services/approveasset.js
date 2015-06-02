'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.approveAsset
 * @description
 * # approveAsset
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('approveAsset', function ($http) {
    // Service logic
    // ...

    var service = {};

    service.approveAsset = function(projectId, assetContainerId, assetId) {
     $http.post('http://localhost:8085/asset/approve', 
        {withCredentials: true, projectId: projectId, assetContainerId: assetContainerId, assetId: assetId })
      .success(function() {
        console.log('Gick bra att godkänna asset');
      }).error(function() {
        console.log('Gick skit att godkänna asset');
      });       
    };


    return service;

  });
