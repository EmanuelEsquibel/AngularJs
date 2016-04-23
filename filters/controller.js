var app = angular.module("FilterModule",[]);
  app.filter("personalized", function() {
    return function( text ){
      /* Aqui podemos crear filtros personalizados.
       * Podemos crear los filtros que queramos.
       *
       */
      return text.toUpperCase();
      return text.toLowerCase();
      return text.replace(/<[^>]+>/gm,'');
    }
  });
  app.controller("FilterController", function($scope){
    $scope.texto = {};
    $scope.texto.number = "124";
  });
