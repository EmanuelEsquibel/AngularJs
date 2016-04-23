var app = angular.module("ExampleModule",[]);
/* Insertamos el servicio LocalStorageService */
app.controller("example", function( $scope ){
  /* Creo una variable nombre */
  $scope.name = "Emanuel";
  /* Asigno que el callback se ejecute tras pasados
   * 2 segundos.
   */
   /* La funciona watch observa un valor y cuando este
    * se modifique se ejecuta la funcion setTimeout.
    * En este caso no es necesario aplicar apply() o
    * diggest() para que se actualice la asignacion
    * en la vista.
    */
  $scope.$watch("name", function(newValue, oldValue){
    setTimeout(function(){
        $scope.text = $scope.name;
    }, 2000);
  });
  /* En los casos siguientes para que se apliquen
   * las asignaciones debemos de indicarle a angular
   * que actualice la vista, ya sea con $digest(),
   * $apply(), la forma recomendable de hacerlo es
   * con $apply, ya que este tiene como parametro,
   * una funcion, y dentro de esta le indicamos
   * lo que queramos hacer. Usar setTimeout es uno
   * de los ejemplos, se puede ejecutar esto
   * con cualquier evento que hagamos.
   */
  setTimeout(function(){
    $scope.text = $scope.name;
    $scope.$digest();
  }, 2000);
  setTimeout(function(){
    $scope.text = $scope.name;
    $scope.$apply();
  }, 2000);
  setTimeout(function(){
    $scope.$apply(function(){
      $scope.text = $scope.name;
    });
  }, 2000);
});
