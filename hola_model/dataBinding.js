
var app = angular.module("MyFirstApp",["ngResource"]);

app.controller("FirstController", function( $scope ){
  //Esto se asignara a la variable "nombre" de la vista
  $scope.nombre = "Juan";
  $scope.nuevoComentario = {};
  $scope.comentarios = [
    {
      comment: "Good",
      username: "Dios"
    },
    {
      comment: "Bad"
      username: "Diablo"
    }
  ];
  // Crear un metodo para el controlador
  $scope.agregarComentario = function(){
    $scope.comentarios.push( $scope.nuevoComentario );
  }
});
/* Data Binding, desde el controlador podemos asignar valores a la vista pero
 * angular nos permite hacer esto de forma inversta, pasar datos de la vista
 * al controlador y sincronizarlos
 */
