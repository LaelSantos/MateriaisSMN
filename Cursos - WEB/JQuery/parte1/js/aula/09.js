$(document).ready(function(){
        $("span").click(function(){

            // alert($("img").attr("title"));
            // console.log($("img").attr("src"));

            // $("img")
            // .attr("src","img/img.png");
            // $("img")
            // .attr("title","TI");

            // $("img").attr(
            //     {
            //         src: "img/img2.png",
            //         title: "Teste"
            //     }
            // );

            // $("img").removeAttr("src");

            // $("img").removeAttr("src").removeAttr("title").removeAttr("alt");


            //alert($("img").hasClass("destaque"));
            //$("img").addClass("destaque");
            //alert($("img").hasClass("destaque"));

            $("img").toggleClass("destaque");
        });

});
