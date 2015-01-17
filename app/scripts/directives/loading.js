'use strict';

/**
 * @ngdoc directive
 * @name collaborateApp.directive:loading
 * @description
 * # loading
 */
angular.module('collaborateApp')
  .directive('loading', function ($http) {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                        elm.show();
                    }else{
                        elm.hide();
                    }
                });
            }
        };
  });
