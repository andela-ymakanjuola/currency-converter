describe('currencyConverterService', function() {
  beforeEach(module('app'));
  it('should expect the service to be defined', inject(function(currencyConverterService) {
    expect(currencyConverterService).toBeDefined();
  }));

  describe('getUSDRates', function() {
    it('should get the rates from https://api.fixer.io/latest', inject(function(currencyConverterService) {
      ratesData = {}
      expect(currencyConverterService.getRates()).toBe(ratesData)
    }));
  })

})