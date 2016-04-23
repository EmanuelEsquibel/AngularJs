/* Modulo MyFirstApp.
 * Primer parametro -> nombre modulo.
 * Segundo parametr -> los modulos de los que dependen este, arreglo.
 * ngResource -> Para consumir APIS REST.
 * Podemos registrar o crear modulos con "angular.module"
 */
var app = angular.module("MyFirstApp",["ngResource"]);
/* A partir de aqui podemos crear diferentes opciones
 * controllers, services, factories, directivas.
 * Tambien podremos separar el codigo de abajo en otro archivo o dentro de * la vista separado de la declaracion del modulo, tendremos que convocar
 * el codigo de abajo con -> angular.module("MyFirstApp") .
 * angular.module("MyFirstApp").app.controller("FirstController", function(  * $score ){
 * $score.nombre = "Juan";
 * });
 */
 /* Si llamaos al modulo de la forma anterior lo que hariamos seria
  * buscar dentro de los modulos el modulo FirstController, en cambio si le * especificamos * el segundo parametro estariamos registrando un modulo.
  * Podemos llamar a los modulos de donde queramos, hay modulos ya especificados.
  */
  /* En el caso de que queramos simplificar el codigo javascript, como quitar
   * espacios en blanco, simplificar nombre de variable, etc. en el caso de las * variables, si modificamos en nombre del parametro $scope, angular ya no
   * encontrara esta dependencia y por lo tanto el codigo no funcionara para
   * esto, vamos a agregar un array con las dependencias antes de declarar la
   * funciona para el $scope, en este array llamaremos a $scope y luego en los
   * parametros de la funciona ya podremos modificar el nombre $scope, como ejemplo,
   * una letra. Es importante posicionar los parametros avrebiados en el orden que este
   * definidos en el array. EJEMPLO:
     app.controller("FirstController",["$scope", "$http", function( s, h ){
       //Esto se asignara a la variable "nombre" de la vista
       s.nombre = "Juan";
     }).controller("SecondController", function( s ){

     }]);
   * De esta forma podremos simplificar el codigo sin problemas
   */
app.controller("FirstController", function( $scope ){
  //Esto se asignara a la variable "nombre" de la vista
  $scope.nombre = "Juan";
}).controller("SecondController", function($scope){

});
/* Podemos concatenar todos los controladores que queramos de el modulo anterior */
