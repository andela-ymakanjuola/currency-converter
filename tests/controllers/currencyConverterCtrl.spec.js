describe('currencyConverterCtrl', function() {
  var $controller, scope;
  beforeEach(module('app'));

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    $controller = _$controller_;
    scope = _$rootScope_.$new();

  }))

  it('should expect the currency converter controller to be defined', function() {

  });

  it('should get a list of currencies', function() {
    expect(scope.currencies).toBeDefine()
  })

  it('should convert a currency to USD', function() {
    expect
  })
})