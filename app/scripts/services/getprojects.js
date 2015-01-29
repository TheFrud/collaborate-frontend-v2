'use strict';

/**
 * @ngdoc service
 * @name collaborateApp.getProjects
 * @description
 * # getProjects
 * Factory in the collaborateApp.
 */
angular.module('collaborateApp')
  .factory('getProjects', function ($http, $q) {
    // Service logic
    // ...

    var service = {};
    service.projects = [];
    service.openProjects = [];
    service.userProjects = [];
    service.project = null;

    

    service.getProjectWhereUserIsOwner = function() {
      var defer = $q.defer();
      $http.get('http://localhost:8085/projects/getuserprojects').
        success(function(data) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('Gick bra att hämta användarens projekt projekt');
          service.userProjects = data;
          console.log(data);
          defer.resolve(data);

        }).
        error(function() {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('Gick inte att hämta användarens projekt');
          defer.reject();

        });      
        return defer.promise;       
    };

    service.getProject = function(projectId) {
      var defer = $q.defer();
        $http.post('http://localhost:8085/project/get', {projectId: projectId}).
        success(function(data) {
          // this callback will be called asynchronously
          // when the response is available
          // console.log('Gick bra att hämta projektet');
          service.project = data;
          defer.resolve(data);

        }).
        error(function() {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          // console.log('Gick inte att hämta projektet');
          defer.reject();

        });      
        return defer.promise;     
    };

    service.getProjects = function() {
      var defer = $q.defer();
      $http.get('http://localhost:8085/projects/get').
        success(function(data) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('Gick bra att hämta projekt');
          service.projects = data;
          defer.resolve(data);

        }).
        error(function() {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('Gick inte att hämta projekt');
          defer.reject();

        });      
        return defer.promise; 
    };

    service.getOpenProjects = function() {
      var defer = $q.defer();
      $http.get('http://localhost:8085/projects/get/open').
        success(function(data) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('Gick bra att hämta öppna projekt');
          service.openProjects = data;
          defer.resolve(data);

        }).
        error(function() {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('Gick inte att hämta öppna projekt');
          defer.reject();

        });      
        return defer.promise; 
    };

    return service;

  });
