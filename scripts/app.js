"use strict";
var myBookApp = angular.module('myBookApp', []);

myBookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
			templateUrl: '../mybook/views/Login.html',
			controller: 'loginController'
      }).
      when('/home', {
			templateUrl: '../mybook/views/Home.html',
			controller: 'homeController'
      }).
      otherwise({
			redirectTo: '/login'
      });
}]);


