var app = angular.module("MyFirstApp",[]);
app.run( function( $rootScope ){
  $rootScope.variable = "Variable de rootScope";
});
app.controller("FirstController", function( $scope, $rootScope ){
  $scope.variable = "Variable de FirstController";
});
app.controller("SecondController", function( $scope, $rootScope ){
  $scope.variable = "Variable de SecondController";
});
