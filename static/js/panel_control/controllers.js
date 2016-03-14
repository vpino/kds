'use strict';

/* Controllers */

var pclistControllers = angular.module('pclistControllers', []);

pclistControllers.controller('PcListCtrl', ['$scope', 'Pc',
  function($scope, Pc) {
    $scope.pcs = Pc.query();
  }]);


/* 
var phonecatApp = angular.module('panelApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://127.0.0.1:8000/pclist/').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}]);

*/