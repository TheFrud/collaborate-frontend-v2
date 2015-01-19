'use strict';

describe('Controller: AssetviewCtrl', function () {

  // load the controller's module
  beforeEach(module('collaborateApp'));

  var AssetviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssetviewCtrl = $controller('AssetviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
