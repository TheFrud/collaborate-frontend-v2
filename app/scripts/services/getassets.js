'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.getAssets
 * @description
 * # getAssets
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('getAssets', function ($http, $q) {
    // Service logic
    // ...

    var service = {};
    var assets = [];

    service.getAssets = function() {
       var defer = $q.defer();
      $http.get('http://localhost:8085/getassets').
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          console.log("Gick bra att hämta assets");
          service.assets = data;
          console.log(data);
          defer.resolve(data);

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log("Gick inte att hämta assets");
          defer.reject();

        });      
        return defer.promise;       
    }

    return service;

  });
