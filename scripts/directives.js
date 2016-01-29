'use strict';

angular.module('shoppingApp')
  .directive('isTeaInfo', [isTeaInfo]);

function isTeaInfo() {
  return {
    restrict: 'E',
    templateUrl: '../templates/tea-info.template.html',
    scope: {
      tea: '=teaData'
    }
  };
}
