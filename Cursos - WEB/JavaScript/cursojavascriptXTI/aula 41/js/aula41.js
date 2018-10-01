/*  autor : lael
    descricação : DOM HTML/CORE API   */

window.onload = function() {

    var tit = document.getElementById("tit_id");
    tit = document.getElementsByTagName("tit_name");
    tit = document.getElementsByClassName("tit_class");
    tit = document.getElementsByTagName("h2");
    tit = document.querySelector("#tit_id");
    console.log("tit", tit);

// tit.innerHTML = "Outro texto";   

tit.style.color = "#0000FF"; //DOM HTML API
tit.setAttribute("style", "#0000FF"); //DOM CORE

var img = document.getElementsByTagName("img")[0];
img.border = "6px";
img.setAttribute("boder", "6px");

}
