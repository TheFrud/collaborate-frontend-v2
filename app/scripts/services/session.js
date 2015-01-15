'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.session
 * @description
 * # session
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('session', function ($cookies, $http, $location, $q, $rootScope) {
    // Service logic
    // ...

    var service = {}
    service.currentUser = null;

    /*
    service.getCurrentUser = function() {
      var defer = $q.defer();
        $http.get('http://localhost:8085/currentUser').
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          console.log("Gick bra att hämta user");
          service.currentUser = data;
          defer.resolve(data);

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log("Gick inte att hämta user");
          defer.reject(err);

        });      
        return defer.promise;      
    }
  */
    service.cookieExist = function() {
      var cookie = $cookies.authToken;
      console.log(cookie.length);
      console.log(cookie);
      var deferred = $q.defer();
      if(cookie.length == 36) {
        $http.defaults.headers.common['X-AUTH-TOKEN'] = $cookies.authToken;
        console.log("Cookie found.");
        deferred.resolve("Cookie found yo");
        
      }
      else {
        console.log("Cookie not found.");
        deferred.resolve("Cookie NOT found yo");
        $location.path("/landingpage");
      }      
      return deferred.promise;
    }

    service.login = function(authToken, USER) {
        console.log(authToken);
        service.currentUser = USER;
        $rootScope.$broadcast('userLoggedIn', USER);
        $cookies.authToken = authToken;
        $cookies.currentUser = USER.fullName;
        $http.defaults.headers.common['X-AUTH-TOKEN'] = authToken;  
        console.log("Front end: Logged in");    
    }

    service.logout = function() {
        $cookies.authToken = undefined;
        $cookies.currentUser = undefined;
        $rootScope.$broadcast('userLoggedOut', null);
        $http.defaults.headers.common['X-AUTH-TOKEN'] = null;   
        console.log("Utloggad");   
    }

    return service;


  });
