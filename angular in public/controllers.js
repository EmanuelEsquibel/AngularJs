var app = angular.module('newApp');
/* Insertamos el servicio LocalStorageService */
app.controller("autoComplete", function( $scope, $http, $routeParams ) {
  console.log( $routeParams );
  $scope.repos = [];
  $http.get("https://api.github.com/users/" + $routeParams.name + "/repos")
  .success( function( data ) {
    for( var i = 0; i < data.length; i++ ){
      var repo = data[i];
      $scope.repos.push( repo.name );
      console.log( repo );
    }
  });
  $scope.optionSelected = function( data ) {
    $scope.$apply( function() {
      $scope.repos = [];
      $scope.repos.push( data.name );
    } );
  }
});
app.controller("dataTest", function( $scope, $rootScope ){
  $scope.jey = {
    p1: "Hola desde controller dataTest"
  };
});
