angular.module('app').controller('currencyConverterCtrl', function($scope, currencyConverterService) {
  $scope.currencies = [];
  $scope.currencyAmount = 0;
  $scope.usdCurency = 0
  var rates = {};

  currencyConverterService.getUSDRates().then(function(data){
    $scope.currencies = Object.keys(data.data['rates']);
  }).catch(function(error) {
    if(error) {
      console.log("error getting currencies", error);
    }
  });

  $scope.convertCurrencyToUsd = function(currency) {
     currencyConverterService.getUSDRates().then(function(data) {
      console.log(currency)
      rates = data.data['rates'];
      $scope.usdCurency = $scope.currencyAmount/rates[currency];
    }).catch(function(error) {
      if(error) {
        console.log("error getting rates", error)
      }
    });
  }
})