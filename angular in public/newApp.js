var app = angular.module("newApp",["ngRoute"]);
app.config(function( $routeProvider ) {
  $routeProvider.when("/:name", {
    controller: "autoComplete",
    templateUrl: "template.html"
  });
  $routeProvider.when("/holaMundo", {
    controller: "dataTest",
    templateUrl: "holaMundo.html"
  });
});
