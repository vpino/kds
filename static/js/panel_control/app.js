'use strict';

/* App Module */

var panelApp = angular.module('panelApp', [
  'ngRoute',
  'pclistControllers',
  'pclistServices'
  ]);

 panelApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'static/templates/panel-control.html',
        controller: 'PcListCtrl'
      }).
      when('/otra', {
        templateUrl: 'static/templates/otro.html',
        controller: 'MakeService'
      }).
      otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');

  }]);


  panelApp.run(run);

  run.$inject = ['$http'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }