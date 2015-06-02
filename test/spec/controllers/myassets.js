'use strict';

describe('Controller: MyassetsCtrl', function () {

  // load the controller's module
  beforeEach(module('collaborateApp'));

  var MyassetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyassetsCtrl = $controller('MyassetsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
