'use strict';

describe('Service: createAssetContainer', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var createAssetContainer;
  beforeEach(inject(function (_createAssetContainer_) {
    createAssetContainer = _createAssetContainer_;
  }));

  it('should do something', function () {
    expect(!!createAssetContainer).toBe(true);
  });

});
