'use strict';

/**
 * @ngdoc overview
 * @name collaborateApp
 * @description
 * # collaborateApp
 *
 * Main module of the application.
 */

// KOM IHÅG ATT ROUTE CHECKEN NOG INTE ÄR SÄKER
// BORDE NOG SKICKA TOKEN HEADERN TILL SERVERN VARJE GÅNG ISTÄLLET
// NU KOLLAR JAG JU BARA COOKIEN. KAN JU MODIFIERAS...


var app = angular
  .module('collaborateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTagsInput' 
  ])
  .config(['$httpProvider', function($httpProvider) {
  // $httpProvider.defaults.withCredentials = true;
  }])
  .config(function ($routeProvider, $httpProvider) {
    // $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }
      })
      .when('/project/:id', {
        templateUrl: 'views/projectview.html',
        controller: 'ProjectviewCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }        
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }
      }) 
      .when('/landingpage', {
        templateUrl: 'views/landingpage.html',
        controller: 'LandingpageCtrl'
      })   
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })         
      .when('/createproject', {
        templateUrl: 'views/createproject.html',
        controller: 'CreateprojectCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }        
      }) 
      .when('/assetcontainer/:id/:title', {
        templateUrl: 'views/assetcontainerview.html',
        controller: 'AssetcontainerviewCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }        
      })                                
      .otherwise({
        redirectTo: '/'
      });
  });
