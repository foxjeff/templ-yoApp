'use strict';

angular
  .module('yoAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    // if this is set, take the "#" out of the paths in index.html
    // $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        template: '<h1>DoIt</h1>'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/yeoman', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
