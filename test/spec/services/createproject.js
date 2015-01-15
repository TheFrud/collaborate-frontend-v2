'use strict';

describe('Service: createProject', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var createProject;
  beforeEach(inject(function (_createProject_) {
    createProject = _createProject_;
  }));

  it('should do something', function () {
    expect(!!createProject).toBe(true);
  });

});
