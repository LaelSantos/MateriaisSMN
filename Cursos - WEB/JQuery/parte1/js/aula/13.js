$(document).ready(function(){
        $("span").click(function(){
                
                // $("h1").remove();
                //$("h1").remove("#titulo");
                //$("ul").empty();
                
                $("ul").unwrap();
        
        });

        $("ul").append("<li>Dentro do elemento e na Ultima posição</li>");
        $("ul").prepend("<li>Dentro do elemento e na Primeira posição</li>");
        $("ul").before("<h1 id='titulo'>Fora do elemento e antes do Elemento</h1>");    
        $("ul").after("<h1>Fora do elemento e Depois do Elemento</h1>");    
        $("ul").wrap("<p></p>");

});
