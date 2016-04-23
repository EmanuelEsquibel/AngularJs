var app = angular.module("ToDoList",["LocalStorageModule"]);
/* Insertamos el servicio LocalStorageService */
app.controller("ToDoController", function( $scope, LocalStorageService ){
  /* ToDo List */
  $scope.items = [];
  /*
    {
     Actividad: 'Terminar curso angular',
     fecha: '3-03-15 2:00pm'
    }
  */
  $scope.addActividad = function() {
    $scope.todo.push( $scope.newActividad );
    $scope.newActividad = {};
  }

});
/* Configurar para que puedamos traer datos desde otro servidor */
