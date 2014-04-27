'use strict';

angular.module('yoAppApp')
  .controller('NavCtrl', function($scope, $location) {

    $scope.isActive = function(viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
      };
  });
