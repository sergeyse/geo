'use strict';

describe('Controller: GeoeditCtrl', function () {

  // load the controller's module
  beforeEach(module('ispanApp'));

  var GeoeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeoeditCtrl = $controller('GeoeditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
