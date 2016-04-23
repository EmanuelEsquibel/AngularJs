var app = angular.module("ToDoList",["LocalStorageModule"]);
/* Insertamos el servicio LocalStorageService */
app.controller("ToDoController", function($scope, localStorageService){
  if ( localStorageService.get("angularToDoList") ) {
    $scope.toDos = localStorageService.get("angularToDoList");
  } else {
    $scope.toDos = [];
  }
  console.log( localStorageService );
  /* Cada vez que modifiquemos la variable(para arreglos usamos
   * watchCollection ) toDos se va a disparar la funcion que le
   * asignemos al watch o la orden */
  // $scope.$watch(function(){
  //   return $scope.toDos;
  // },function(newValue, oldValue){
  //   localStorageService.set("angularToDoList", newValue);
  // })
  /* Cada ves que "toDos" varíe, se va a disparar el callback,
   * en este caso vamos a asignar el valor del arreglo "toDos",
   * al localStorage "angularToDoList", de esta forma nos evitamos,
   * de escribir codigo repetido.
   */
  $scope.$watchCollection("toDos", function(newValue, oldValue){
    localStorageService.set("angularToDoList", $scope.toDos);
  });
  $scope.addActividad = function() {
  $scope.toDos.push( $scope.newActividad );
    /* Limpiamos los input */
    $scope.newActividad = {};
  }
  $scope.remove = function( $index ) {
    $scope.toDos.splice( $index , 1 );
  }
  $scope.clean = function() {
    $scope.toDos = [];
  }
});
/* Configurar para que puedamos traer datos desde otro servidor */
