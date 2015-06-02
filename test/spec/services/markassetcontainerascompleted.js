'use strict';

describe('Service: markAssetContainerAsCompleted', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var markAssetContainerAsCompleted;
  beforeEach(inject(function (_markAssetContainerAsCompleted_) {
    markAssetContainerAsCompleted = _markAssetContainerAsCompleted_;
  }));

  it('should do something', function () {
    expect(!!markAssetContainerAsCompleted).toBe(true);
  });

});
