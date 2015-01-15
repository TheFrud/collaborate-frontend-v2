'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.login
 * @description
 * # login
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('login', function ($http, $cookies, $location, session) {
    // Service logic
    // ...

    var service = {};

    service.login = function(email, password) {

      $http.post('http://localhost:8085/login', {withCredentials: true, email: email, password: password}).then(function(response) {
        console.log(response.data.authToken);
        console.log(response.data.USER);
        session.login(response.data.authToken, response.data.USER);
        $location.path("/");
      });

    };


    // Public API here
    return service;

  });


/*
        console.log(response.data.authToken);
        $cookieStore.put("AUTH_TOKEN", response.data.authToken);
        var favoriteCookie = $cookieStore.get("AUTH_TOKEN");
        console.log(favoriteCookie);
        $http.defaults.headers.common['X-AUTH-TOKEN'] = response.data.authToken;
        */