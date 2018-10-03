$(document).ready(function(){
    //Desctacar células e apresentando tooltips


    $("#filmes thead tr th").each(function(i){
        var n = i + 1;
        var nomeColuna = $(this).text();

        $("tr td:nth-child("+ n +")").hover(function(){
            var nomeCelula = $(this).text();
            $(this).addClass("destaque")
            .prepend("<div class='tooltip'>Coluna "+ nomeColuna +"<br/> Célula "+ nomeCelula +"</div>")
            .css("cursor", "pointer");
            $(this).click(function(){
                $("tbody tr").removeClass("destaque");
                $(".tooltip").remove();
                $("tbody tr:contains("+ nomeCelula +")")
                .addClass("destaque");
            });
        }, function(){
            $(this).removeClass("destaque")
            .css("cursor", "pointer");
            $(".tooltip").remove();
        });
    });

    // $("td").hover(function(){
    //     $(this).addClass("destaque")
    //     .prepend("<div class='tooltip'>Testando nosso primeiro tooltip</div>")
    //     .css("cursor", "pointer");
    // }, function(){
    //     $(this).removeClass("destaque")
    //     .css("cursor", "pointer");
    //     $(".tooltip").remove();
    // });

});