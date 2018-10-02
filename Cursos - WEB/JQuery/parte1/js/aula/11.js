$(document).ready(function(){
        $("span").click(function(){

            var img =
            $("<img />",{
                src:"img/img.png",
                title:"teste de adição",
                click:function(){alert("Deu certo");}
            });

            var ul = $("<ul/>" ).append($("<li/>").append("Programador de Interface WEB"));


            $("body").append(img).append(ul) ;
            
        });

});
