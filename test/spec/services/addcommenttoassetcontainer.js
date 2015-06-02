'use strict';

describe('Service: addCommentToAssetContainer', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var addCommentToAssetContainer;
  beforeEach(inject(function (_addCommentToAssetContainer_) {
    addCommentToAssetContainer = _addCommentToAssetContainer_;
  }));

  it('should do something', function () {
    expect(!!addCommentToAssetContainer).toBe(true);
  });

});
