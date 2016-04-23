var app = angular.module('testApplication', ['ngRoute']);

app.config(['$routeProvider' , function( $routeProvider ) {
  $routeProvider
    .when('/index', {
      templateUrl: "page-repositories.html",
      controller: "reposController"
  })
  .when('/index/repo/:name', {
    templateUrl: "repoName.html",
    controller: "repoNameController"
  })
  .otherwise({
    redirectTo: '/index'
  });
}]);
