'use strict';

/* Controllers */

var pclistControllers = angular.module('pclistControllers', []);

/*
pclistControllers.controller('PcListCtrl', ['$scope', 'Pc',
  function($scope, Pc) {
    $scope.pcs = Pc.query();
    $scope.ho = 'aloha'
  }]);

*/


pclistControllers.controller('PcListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('pclist/').success(function(data) {
    $scope.pcs = data;
  });

}]);

pclistControllers.controller('MakeService', ['$scope', '$http', function($scope, $http) {
  $http.get('ServiceConfigResource/correo').success(function(data) {
    $scope.MakeService = data;
  });

}]);
