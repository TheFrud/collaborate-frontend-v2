'use strict';

describe('Service: addUserToProject', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var addUserToProject;
  beforeEach(inject(function (_addUserToProject_) {
    addUserToProject = _addUserToProject_;
  }));

  it('should do something', function () {
    expect(!!addUserToProject).toBe(true);
  });

});
