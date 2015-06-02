'use strict';

describe('Service: approveAsset', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var approveAsset;
  beforeEach(inject(function (_approveAsset_) {
    approveAsset = _approveAsset_;
  }));

  it('should do something', function () {
    expect(!!approveAsset).toBe(true);
  });

});
