'use strict';

describe('Service: addCommentToAsset', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var addCommentToAsset;
  beforeEach(inject(function (_addCommentToAsset_) {
    addCommentToAsset = _addCommentToAsset_;
  }));

  it('should do something', function () {
    expect(!!addCommentToAsset).toBe(true);
  });

});
