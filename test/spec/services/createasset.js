'use strict';

describe('Service: createAsset', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var createAsset;
  beforeEach(inject(function (_createAsset_) {
    createAsset = _createAsset_;
  }));

  it('should do something', function () {
    expect(!!createAsset).toBe(true);
  });

});
