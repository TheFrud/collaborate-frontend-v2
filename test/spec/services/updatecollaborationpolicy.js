'use strict';

describe('Service: updateCollaborationPolicy', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var updateCollaborationPolicy;
  beforeEach(inject(function (_updateCollaborationPolicy_) {
    updateCollaborationPolicy = _updateCollaborationPolicy_;
  }));

  it('should do something', function () {
    expect(!!updateCollaborationPolicy).toBe(true);
  });

});
