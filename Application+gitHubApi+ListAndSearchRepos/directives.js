var direct = angular.module("testApplication");
direct.directive("userAutocomplete", function(){
  return function( scope, element, attrs ){
    $(element).autocomplete({
      source: scope[ attrs.userAutocomplete ],
      select: function(ev, ui){
        window.location = "#/index/repo/" + ui.item.value;
      }
    });
  }
});
