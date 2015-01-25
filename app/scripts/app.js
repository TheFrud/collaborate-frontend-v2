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
    'ngTagsInput',
    'ngFx',
    'textAngular',
    'xeditable',
    'ngDialog',
    'ui.bootstrap',
    'angular-loading-bar'
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
      .when('/myprojects', {
        templateUrl: 'views/myprojects.html',
        controller: 'MyprojectsCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }
      }) 
      .when('/myassets', {
        templateUrl: 'views/myassets.html',
        controller: 'MyassetsCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }
      })       
      .when('/user/settings', {
        templateUrl: 'views/usersettings.html',
        controller: 'UsersettingsCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }
      })             
      .when('/project/:id/:title', {
        templateUrl: 'views/projectview.html',
        controller: 'ProjectviewCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }        
      })
      .when('/project/:projectid/:projecttitle/admin', {
        templateUrl: 'views/projectviewadmin.html',
        controller: 'ProjectviewadminCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }        
      })      
      .when('/profile/:profileid/:profileusername', {
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
      .when('/project/:projectid/:projecttitle/assetcontainer/:assetcontainerid/:assettitle', {
        templateUrl: 'views/assetcontainerview.html',
        controller: 'AssetcontainerviewCtrl',
        resolve:{
          authorize:function(session) {
            return session.cookieExist();
          }
        }        
      }) 
      .when('/project/:projectid/:projecttitle/assetcontainer/:assetcontainerid/:assetcontainertitle/asset/:assetid/:assettitle', {
        templateUrl: 'views/assetview.html',
        controller: 'AssetviewCtrl',
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
