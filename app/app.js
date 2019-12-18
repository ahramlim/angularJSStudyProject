var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.greet = function() {
    if($scope.userName) $scope.message = "Hello, " + $scope.userName;
  }
});

app.directive('focus', function() {
  return {
    link: function(scope, element, attrs) {
      element[0].focus();
    }
  };
});