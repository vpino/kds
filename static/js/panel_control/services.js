'use strict';

/* Services */

var pclistServices = angular.module('pclistServices', ['ngResource']);

pclistServices.factory('Pc', ['$resource',
  function($resource){
    return $resource('pclist/', {}, {
      query: {
      	method:'GET',  
      	isArray:true
      		}
    });
  }]);
