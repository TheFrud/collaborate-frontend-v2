'use strict';

describe('Service: getAssetContainer', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var getAssetContainer;
  beforeEach(inject(function (_getAssetContainer_) {
    getAssetContainer = _getAssetContainer_;
  }));

  it('should do something', function () {
    expect(!!getAssetContainer).toBe(true);
  });

});
