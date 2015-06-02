'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.markAssetContainerAsCompleted
 * @description
 * # markAssetContainerAsCompleted
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('markAssetContainerAsCompleted', function ($http) {
    // Service logic
    // ...

    var service = {};

    service.markAssetContainerAsCompleted = function(projectId, assetContainerId) {
     $http.post('http://localhost:8085/assetcontainer/markascompleted', 
        {withCredentials: true, projectId: projectId, assetContainerId: assetContainerId})
      .success(function() {
        console.log('Gick bra att godkänna asset');
      }).error(function() {
        console.log('Gick skit att godkänna asset');
      });        
    };

    return service;

  });
