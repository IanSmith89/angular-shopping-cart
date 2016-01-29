'use strict';

angular.module('shoppingApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as MC'
      });
  });
