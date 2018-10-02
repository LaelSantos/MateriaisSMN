$(document).ready(function(){
    //Desctacar linhas de uma tabela
    
    $("#filmes tbody tr:odd").addClass("impar");

    $("#filmes thead tr th").each(function(i){
        var n = i - 1;
        $(this).click(function(){
           
            $(this)
            .parents("thead")
            .siblings("tbody")
            .children("tr").each(function(){
                $(this).children("td:eq("+n+")")
                .addClass("destaque");
            });


            console.log("click:" +n);
        })
    });
});