'use strict';

describe('Service: getProjects', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var getProjects;
  beforeEach(inject(function (_getProjects_) {
    getProjects = _getProjects_;
  }));

  it('should do something', function () {
    expect(!!getProjects).toBe(true);
  });

});
