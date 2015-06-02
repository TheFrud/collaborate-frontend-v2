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

    var service = {};
    service.currentUser = null;

    /*
    service.getCurrentUser = function() {
      var defer = $q.defer();
        $http.get('http://localhost:8085/currentUser').
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('Gick bra att hämta user');
          service.currentUser = data;
          defer.resolve(data);

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('Gick inte att hämta user');
          defer.reject(err);

        });      
        return defer.promise;      
    }
  */
    service.isUserAdminOfProject = function(projectId) {
      var defer = $q.defer();
      $http.post('http://localhost:8085/isuseradminofproject', 
        {withCredentials: true, projectId: projectId})
      .success(function() {
        console.log('User is admin!');
        defer.resolve();
      }).error(function() {
        console.log('User is not admin!');
        defer.reject();
      });
      return defer.promise;
    };

    service.editUser = function(bio) {
      var defer = $q.defer();
      $http.post('http://localhost:8085/user/edit', 
        {withCredentials: true, bio: bio})
      .success(function() {
        console.log('Gick bra att redigera användare.');
        defer.resolve();
      }).error(function() {
        console.log('Gick skit att redigera användare');
        defer.reject();
      });
      return defer.promise;
    };      

    service.getCurrentUser = function() {
      var defer = $q.defer();
      $http.get('http://localhost:8085/getcurrentuser').
        success(function(data) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('Gick bra att hämta användare');
          service.currentUser = data;
          defer.resolve(data);

        }).
        error(function() {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('Gick inte att hämta användare');
          defer.reject();

        });      
        return defer.promise;          
    };

    service.cookieExist = function() {
      var cookie = $cookies.authToken;
      var deferred = $q.defer();
      if(typeof cookie === 'undefined'){
        console.log('Cookie is undefined.');
        deferred.resolve('Cookie is undefined yo.');
        $location.path('/landingpage');
      }
      else if(cookie.length === 36) {
        $http.defaults.headers.common['X-AUTH-TOKEN'] = $cookies.authToken;
        console.log('Cookie found.');
        deferred.resolve('Cookie found yo');
        
      }
      else {
        console.log('Cookie not found.');
        deferred.resolve('Cookie NOT found yo');
        $location.path('/landingpage');
      }      
      return deferred.promise;
    };

    service.login = function(authToken, USER) {
        console.log(authToken);
        service.currentUser = USER;
        $rootScope.$broadcast('userLoggedIn', USER);
        $cookies.authToken = authToken;
        $cookies.currentUserName = USER.fullName;
        $cookies.currentUserId = USER.id;
        $http.defaults.headers.common['X-AUTH-TOKEN'] = authToken;  
        console.log('Front end: Logged in');    
    };

    service.logout = function() {
        $cookies.authToken = undefined;
        $cookies.currentUserName = undefined;
        $cookies.currentUserId = undefined;
        $rootScope.$broadcast('userLoggedOut', null);
        $http.defaults.headers.common['X-AUTH-TOKEN'] = null;   
        console.log('Utloggad');   
    };

    return service;


  });
