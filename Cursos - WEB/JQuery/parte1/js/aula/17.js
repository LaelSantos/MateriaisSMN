$(document).ready(function(){
       
        // $(":text").keyup(function(){
        //     $("#mensagem").text($(this).val())   
        // });

        // $(":text").bind("keyup",function(e){
        //         $("#mensagem").text($(this).val())   
        //     });

        function msg(e){
                $("#mensagem").text($(this).val())   
        }
        // $(":text").keyup(msg).focu(msg).blur(msg);
        // $(":text").bind("keyup focus blur", msg);

        // $(":button").bind("click", function(){
        //         $(":text").unbind("Keyup", msg);   
        //         $(":text").val("Texto incluido via jQuery");
        //         $(":text").trigger("focus");
        // });
  
       
        // $("fieldset").delegate(":text", "keyup", msg);

        // $(":button").bind("click", function(){
        //         $("fieldset").prepend("Outro:<input type='text' name='outro'</input>");
                
               
        // });
          
       
        $("fieldset").delegate(":text", "keyup", msg);

        $(":button").bind("click", function(e, src, width){
                $("#mensagem").append($("<img/>").attr("src", src).css("width", width));
                          
        });

        $(":button").trigger("click", ["img/img.png", "90px"]);
  
});


