$(document).ready(function(){
        //descendente
        $("div span").css("background-color", "yellow")
        //filhos do elemento
        $("li > ul").css("color", "red")
        $("#item1_1 + li").css("color", "blue")
        //irmãos o elemento
        $("#item1_1 ~ li").css("color", "blue")
});
