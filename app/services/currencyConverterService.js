angular.module('app').factory('currencyConverterService', function($http) {
  return {
    getUSDRates: function() {
      return $http.get('http://api.fixer.io/latest?base=USD')
    }
  }
})