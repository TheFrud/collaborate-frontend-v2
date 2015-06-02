'use strict';

describe('Service: removeProject', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var removeProject;
  beforeEach(inject(function (_removeProject_) {
    removeProject = _removeProject_;
  }));

  it('should do something', function () {
    expect(!!removeProject).toBe(true);
  });

});
