$(document).ready(function(){
       
        $(":text").keyup(function(){
            $("#mensagem").text($(this).val())   
        }).focus(function(){
                $(this).css("background", "yellow")
                $("#mensagem").text("Focus");   
        }).blur(function(){
                $(this).css("background", "#CCC")
                $("#mensagem").text("Blur");   
        });


        //Validação de formulários
        $("form").submit(function(){
                if($(":text").val() == "XTI"){
                      return true;  
                }
                return false;
        });


        $("select").change(function(){
                var escolha = $("option:selected").text();
                $("#mensagem").text("Escolhido : " + escolha)   
        })

        $("textarea").select(function(){
                $("#mensagem").text("Selecionou")   
        });

        $(":text").keypress(function(){
                $("#mensagem").text($(this).val());    
        });
        $(":text").keydown(function(){
                $("#mensagem").text($(this).val());    
        });
  
});


