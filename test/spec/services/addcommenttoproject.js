'use strict';

describe('Service: addCommentToProject', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var addCommentToProject;
  beforeEach(inject(function (_addCommentToProject_) {
    addCommentToProject = _addCommentToProject_;
  }));

  it('should do something', function () {
    expect(!!addCommentToProject).toBe(true);
  });

});
