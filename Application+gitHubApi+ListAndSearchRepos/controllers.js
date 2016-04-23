var ctrl = angular.module('testApplication');

ctrl.controller('reposController', function( $scope, $http, $routeParams ){
  $scope.repos = [];
  var req = $http.get("https://api.github.com/users/twitter/repos");
  req.success( function( data ){
    // Request data in array
    for (var i = 0; i < data.length; i++) {
      $scope.repos.push( data[i].name );
    }
  });
});

ctrl.controller('repoNameController', function($scope, $http, $routeParams){
  $scope.repo = {};
  // Request
  $http.get("https://api.github.com/repos/twitter/" + $routeParams.name)
       .success( function( data ){
         $scope.repo.name = data.name;
         $scope.repo.description = data.description;
       });
});
