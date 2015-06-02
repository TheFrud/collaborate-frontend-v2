'use strict';

describe('Service: updateProjectDescription', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var updateProjectDescription;
  beforeEach(inject(function (_updateProjectDescription_) {
    updateProjectDescription = _updateProjectDescription_;
  }));

  it('should do something', function () {
    expect(!!updateProjectDescription).toBe(true);
  });

});
