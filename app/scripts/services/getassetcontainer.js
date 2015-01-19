'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.getAssetContainer
 * @description
 * # getAssetContainer
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('getAssetContainer', function ($http, $q) {
    // Service logic
    // ...

    var service = {};
    service.assetContainer = null;
    service.assetContainers = [];

    service.getAssetContainer = function(assetContainerId) {
      var defer = $q.defer();
      $http.post('http://localhost:8085/assetcontainer/get', {assetContainerId: assetContainerId}).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          console.log("Gick bra att hämta asset container");
          service.assetContainer = data;
          defer.resolve(data);

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log("Gick inte att hämta asset container");
          defer.reject();

        });      
        return defer.promise;       
    }

    service.getAssetContainers = function() {
      var defer = $q.defer();
      $http.get('http://localhost:8085/getassetcontainers').
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          console.log("Gick bra att hämta asset containers");
          service.assetContainers = data;
          defer.resolve(data);

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log("Gick inte att hämta asset containers");
          defer.reject();

        });      
        return defer.promise;       
    }
    return service;

  });
