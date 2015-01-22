'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.getUsers
 * @description
 * # getUsers
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('getUsers', function ($http, $q) {
    // Service logic
    // ...

    var service = {};
    service.users = [];
    service.user = {};

    service.getUser = function(userId) {
      var defer = $q.defer();
      $http.post('http://localhost:8085/getuser', {userId: userId}).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          console.log("Gick bra att hämta användaren (specifik)");
          service.user = data;
          defer.resolve(data);

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log("Gick inte att hämta användaren (specifik)");
          defer.reject();

        });      
        return defer.promise;      
    }

    service.getUsers = function() {
      var defer = $q.defer();
      $http.get('http://localhost:8085/getusers').
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          console.log("Gick bra att hämta användare");
          service.users = data;
          defer.resolve(data);

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log("Gick inte att hämta användare");
          defer.reject();

        });      
        return defer.promise;       
    }    

    return service;

  });
