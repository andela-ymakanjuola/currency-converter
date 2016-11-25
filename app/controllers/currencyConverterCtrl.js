angular.module('app').controller('currencyConverterCtrl', function($scope, currencyConverterService) {
  $scope.currencies = [];
  currencyConverterService.getUSDRates().then(function(data){
    $scope.currencies = Object.keys(data.data['rates']);
  })
})