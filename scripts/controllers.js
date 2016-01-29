'use strict';

angular.module('shoppingApp')
  .controller('IndexController', [IndexController]);
function IndexController() {
  var vm = this;
  vm.message = 'Welcome to MEAN Tea!';
}

angular.module('shoppingApp')
  .controller('MainController', ['teaData', MainController]);
function MainController(teaData) {
  var vm = this;
  vm.teaList = teaData.getAll();
}
