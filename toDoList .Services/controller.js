var app = angular.module("ToDoList",["LocalStorageModule"]);
/* Insertamos las dependencias en el siguiente servicio(a traves de factory).
 * En este caso localStorageService
 */
app.service("toDoService", function( localStorageService ){
  this.key = "toDoList";
  if( localStorageService.get( this.key ) ) {
    this.activities = localStorageService.get( this.key );
  } else {
    this.activities = [];
  }
  this.refreshLocalS = function() {
    localStorageService.set( this.key, this.activities );
  }
  this.addActivities = function( activitie ) {
    this.activities.push( activitie );
    this.refreshLocalS();
  }
  this.removeActivities = function( $index ) {
    this.activities.splice( $index , 1 );
    this.refreshLocalS();
  }
  this.cleanActivities = function() {
    this.activities = [];
    this.refreshLocalS();
  }
  this.getAllActivities = function() {
    return this.activities;
  }
});
app.controller("ToDoController", ['toDoService', '$scope', function( list, $scope ){
    function refreshList(){
      $scope.activities = list.getAllActivities();
    }
    $scope.addActivitie = function() {
      list.addActivities( $scope.activitie );
      $scope.activitie = {};
    }
    $scope.removeActivitie = function( $index ) {
      list.removeActivities( $index );
    }
    $scope.cleanActivitie = function() {
      list.cleanActivities();
      refreshList();
    }
    refreshList();
}]);
