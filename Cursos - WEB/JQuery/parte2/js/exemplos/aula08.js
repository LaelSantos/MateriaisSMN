$(document).ready(function(){
    //Desctacar células e apresentando tooltips

   $("textarea").bind("input keyup paste", function(){
       var maximo = 100;
       var disponivel = maximo - $(this).val().length;
       if(disponivel < 0){
            var texto = $(this).val().substring(0, maximo);
            $(this).val(texto);
            disponivel = 0;
       }
        $(".contagem").text(disponivel);
   });
});