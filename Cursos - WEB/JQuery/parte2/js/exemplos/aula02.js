$(document).ready(function(){
    //Desctacar linhas de uma tabela
    
    $("#filmes tbody tr:odd").addClass("impar");

    $("#filmes tbody tr").hover(
        function(){$(this).addClass("destaque");},
         function(){$(this).removeClass("destaque");}
    );
});