var app = angular.module("MyFirstApp",[]);
app.controller("FirstController", function( $scope, $http ){
  $scope.posts = [];
  $scope.newPost = {};
  $scope.$watch("newPost", function(newValue, oldValue){
    console.log( newValue )
  });
  /* Aqui estamos trayendo a traves del metodo get todo el contenido de la pagina post, en formato json */
  $http.get( "http://jsonplaceholder.typicode.com/posts" )
    .success( function( data ) {
      $scope.posts = data;
    })
    .error( function( err ) {
      console.log( err )
      $scope.error = true;
    });
    /* Peticion post */
    $scope.addPost = function() {
        $http.post( "http://jsonplaceholder.typicode.com/posts", {
          title: $scope.newPost.title,
          body: $scope.newPost.body,
          userId: $scope.newPost.userId,
          id: $scope.newPost.id
        })
        .success( function( data, status, headers, config ) {
          $scope.newPost = {};
          $scope.posts.push( data );
        })
        .error( function( err, status, headers, config ) {
          console.log( err + "/n" + status + "/n" + headers + "/n" + config )
        });
    }
});
/* Configurar para que puedamos traer datos desde otro servidor */
