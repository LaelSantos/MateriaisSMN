$(document).ready(function(){
    //Desctacar células e apresentando tooltips


    $(":input + span").css({
        border:"1px solid #000",
        padding: "2px 4px",
        background: "#DDD",
        display: "none",
        marginLeft: "10 px"
    })
   
    $(":input").focus(function(){
        $(this).next().fadeIn(1500);
    }).blur(function(){
        $(this).next().fadeOut(1500);
        
    });


});