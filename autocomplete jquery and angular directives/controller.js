var app = angular.module('newApp',[]);
app.directive('userAutocomplete', function(){
    return function( scope, element, attrs ){
      /* En este ejemplo utilizamos jquery( Utilizar jquery
       * en las directivas es una buena practica y a su vez
       * la forma correcta donde ejecutaremos jquery) conbinados
       * con las directivas de angular, element es el
       * elemento que contiene la directiva, este es un
       * input text, luego al parametro elemento le asignamos
       * la funcion autocomplete de jquery, a esta le asignamos
       * objeto json con ciertas propiedades, a source le asignamos
       * un array que va a contener los resultados que se van a mostrar
       * en el autocmplete. A la propiedad select le asignamos una funcion
       * que va a contener dos parametros, al primer parametro le asignamos
       * la funcion preventDefault. Al segundo paramtro lo vamos a Utilizar
       * para sacar el valor del item seleccionado ( ui.item.value ),
       * y lo asociamos como parametro a una funciona que creamos en el scope,
       * definida en el controlador, esta funcion va a contener el valor que le pasas
       * pasamos y lo vamos a asignar donde queramos en el DOM. La propieda focus tambien
       * lleva una funciona igual a la anterior esta se ejecuta al hacerle focus
       * a un valor del autocomplete, y lo va a asignar tambien donde queramos.
       */
        $(element).autocomplete({
          source: scope[attrs.userAutocomplete],
          select: function(ev, ui) {
            ev.preventDefault();
            scope.optionSelected( ui.item.value );
          },
          focus: function(ev, ui) {
            scope.optionSelected( ui.item.value );
          }
        });
    }
});
/* Insertamos el servicio LocalStorageService */
app.controller("imgController", function( $scope, $http ){
  $scope.repos = [];
  $http.get("https://api.github.com/users/EmanuelEsquibel/repos")
  .success( function( data ) {
    for( var i = 0; i < data.length; i++ ){
      var repo = data[i];
      $scope.repos.push( repo.name );
    }
    console.log( $scope.repos );
  });
  $scope.optionSelected = function( data ) {
    $scope.$apply( function() {
      $scope.repos = data;
    } );
  }
});
