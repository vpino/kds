'use strict';

/* App Module */

var panelApp = angular.module('panelApp', [
  'ngRoute',
  'pclistControllers',
  'pclistServices'
]);

panelApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pclist', {
        templateUrl: 'templates/index.html',
        controller: 'PcListCtrl'
      }).
      otherwise({
        redirectTo: '/pclist'

      });
  }]);
