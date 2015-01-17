'use strict';

/**
 * @ngdoc function
 * @name collaborateApp.controller:AppcontrollerCtrl
 * @description
 * # AppcontrollerCtrl
 * Controller of the collaborateApp
 */
angular.module('collaborateApp')
  .controller('AppCtrl', function ($scope, $rootScope, $location, $cookies, session, logout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.currentUser = $cookies.currentUserName;

    $scope.$on('userLoggedIn', function(event, data) {
    $scope.currentUser = data.fullName;
    console.log(data);
    });

    $rootScope.$on('userLoggedOut', function(event, data) {
    $scope.currentUser = data;
    console.log(data);
    });

    $rootScope.$on('$routeChangeError', function() {
      // console.log("Routeändring gick åt helvete");
      $location.path("/landingpage");
    })
    $rootScope.$on('$routeChangeSuccess', function() {
      // console.log("Routeändring lyckades");
    })    

    $scope.logoutFunc = function() {
      logout.logout();
    }
    
   session.cookieExist();
  
  });
