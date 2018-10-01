/*  autor : lael
    descricação : DOM HTML/CORE API   */

window.onload = function() {

    var tit = document.getElementById("tit_id");
    tit = document.getElementsByTagName("tit_name");
    tit = document.getElementsByClassName("tit_class");
    tit = document.getElementsByTagName("h2");
    tit = document.querySelector("#tit_id");
    // console.log("tit", tit);

// tit.innerHTML = "Outro texto";   

    tit.style.color = "#0000FF"; //DOM HTML API
    tit.setAttribute("style", "#0000FF"); //DOM CORE

    var img = document.getElementsByTagName("img")[0];
    img.border = "6px";
    img.setAttribute("boder", "6px");

    /* Coleções de Elementos */

    // console.log(document.title);
    // console.log(this.document.images.length);

    // var img = document.images;
    // for(var i=0; i < img.length; i++){
    //     this.console.log(img[i]);
    // }
    // console.log(img[0]);
    // console.log(img.item(0));
    // console.log(img.namedItem("selecionada"));
    // document.links[0].alt = "Titulo";
    // alert(document.links[0].alt);
    // alert(document.forms.length);
    // adicionarLinha("teste", "testes");

    // var btn = document.getElementById("btn");
    // btn.onclick = function(){
    //     var l = document.links;
    //     for(var i = 0; i<l.length; i++){
    //         adicionarLinha(l[i].alt, l [i].href);
    //     }
    // }
    var btn = document.getElementById("btn");
    btn.onclick = function(){
        var l = document.images;
        for(var i = 0; i<l.length; i++){
            adicionarLinha(l[i].alt, l [i].src);
        }
    }

    var btn2 = document.getElementById("del");
    btn2.onclick = function(){
        var tb = this.document.getElementsByTagName("table").item(0);
        tb.deleteRow(1);
        }
    
    // console.log(document.forms[1].elements.estado[1].value);
    // console.log(document.forms[0].elements.nome.value="Curso de DOM HTML API JavaScript");
    
    
   
}

function adicionarLinha(texto1, texto2)
{
    var tb = this.document.getElementsByTagName("table").item(0);
    // this.alert(tb);
    var row = tb.insertRow(-1);
    var cel0 = row.insertCell(0);
    var cel1 = row.insertCell(1);
    cel0.appendChild(document.createTextNode(texto1));
    cel1.appendChild(document.createTextNode(texto2));
}