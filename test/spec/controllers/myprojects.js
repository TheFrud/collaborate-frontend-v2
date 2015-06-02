'use strict';

describe('Controller: MyprojectsCtrl', function () {

  // load the controller's module
  beforeEach(module('collaborateApp'));

  var MyprojectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyprojectsCtrl = $controller('MyprojectsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
