var app = angular.module('newApp');
app.directive('userAutocomplete', function(){
    return function( scope, element, attrs ){
        $(element).autocomplete({
          source: scope[attrs.userAutocomplete],
          select: function(ev, ui) {
            ev.preventDefault();
            scope.optionSelected( ui.item.value );
          },
          focus: function(ev, ui) {
          }
        });
    }
});
