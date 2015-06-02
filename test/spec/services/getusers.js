'use strict';

describe('Service: getUsers', function () {

  // load the service's module
  beforeEach(module('collaborateApp'));

  // instantiate service
  var getUsers;
  beforeEach(inject(function (_getUsers_) {
    getUsers = _getUsers_;
  }));

  it('should do something', function () {
    expect(!!getUsers).toBe(true);
  });

});
