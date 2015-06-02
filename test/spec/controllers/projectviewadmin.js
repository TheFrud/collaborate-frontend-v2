'use strict';

describe('Controller: ProjectviewadminCtrl', function () {

  // load the controller's module
  beforeEach(module('collaborateApp'));

  var ProjectviewadminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectviewadminCtrl = $controller('ProjectviewadminCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
