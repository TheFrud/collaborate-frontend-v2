'use strict';

/**
 * @ngdoc directive
 * @name collaborateApp.directive:notloading
 * @description
 * # notloading
 */
angular.module('collaborateApp')
  .directive('notloading', function ($http) {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.notLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.notLoading, function (v)
                {
                    if(v){
                        elm.hide();
                    }else{
                        elm.show();
                    }
                });
            }
        };
  });
