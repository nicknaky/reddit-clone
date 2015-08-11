'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angNewsApp
 */
angular.module('angNewsApp')
  .controller('MainCtrl', ['$scope',function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   	$scope.test = 'WTTTH' ;
  }]);
