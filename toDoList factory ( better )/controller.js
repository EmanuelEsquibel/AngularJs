var app = angular.module("ToDoList",["LocalStorageModule"]);
/* Insertamos las dependencias en el siguiente servicio(a traves de factory).
 * En este caso localStorageService
 */
app.factory("toDoService", function( localStorageService ){
  /* Creamos el objeto que va a retornar este servicio(a traves de factory) */
  var toDoService = {};
  toDoService.key = "toDoList";
  if( localStorageService.get( toDoService.key ) ) {
    toDoService.activities = localStorageService.get( toDoService.key );
  } else {
    toDoService.activities = [];
  }
  toDoService.refreshLocalS = function() {
    localStorageService.set( toDoService.key, toDoService.activities );
  }
  toDoService.addActivities = function( activitie ) {
    toDoService.activities.push( activitie );
    toDoService.refreshLocalS();
  }
  toDoService.removeActivities = function( $index ) {
    toDoService.activities.splice( $index , 1 );
    toDoService.refreshLocalS();
  }
  toDoService.cleanActivities = function() {
    toDoService.activities = [];
    toDoService.refreshLocalS();
  }
  toDoService.getAllActivities = function() {
    return toDoService.activities;
  }
  return toDoService;
});
app.controller("ToDoController", function($scope, toDoService){
    function refreshList(){
      $scope.activities = toDoService.getAllActivities();
    }
    $scope.addActivitie = function() {
      toDoService.addActivities( $scope.activitie );
      $scope.activitie = {};
    }
    $scope.removeActivitie = function( $index ) {
      toDoService.removeActivities( $index );
    }
    $scope.cleanActivitie = function() {
      toDoService.cleanActivities();
      refreshList();
    }
    refreshList();
});
/* Configurar para que puedamos traer datos desde otro servidor */
