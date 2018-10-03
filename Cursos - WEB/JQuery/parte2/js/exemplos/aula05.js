$(document).ready(function(){
    //Desctacar células e apresentando tooltips


    $("tbody tr:not(.sub)").hide();
    $(".sub th").prepend("<img src ='img/mais.gif' class='maismenos'/>");
    $("img").click(function(){
        if($(this).attr("src") == "img/menos.gif"){
            $(this).attr("src", "img/mais.gif")
            .parents()
            .nextUntil("tr.sub")   
            // .siblings("tr")
            .hide();
        } else {
            $(this).attr("src", "img/menos.gif")
            .parents()
            .nextUntil("tr.sub")            
            // .siblings("tr")
            .show();
        }
    }); 


});