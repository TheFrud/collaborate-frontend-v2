'use strict';

describe('Service: getAssets', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var getAssets;
  beforeEach(inject(function (_getAssets_) {
    getAssets = _getAssets_;
  }));

  it('should do something', function () {
    expect(!!getAssets).toBe(true);
  });

});
