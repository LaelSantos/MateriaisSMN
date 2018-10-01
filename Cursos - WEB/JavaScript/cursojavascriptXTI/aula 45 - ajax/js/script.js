/*
    Autor : Lael
    Descrição : AJAX
    assincrono
*/
window.onload = function () {

    document.getElementById("botao").onclick = function () {

        //status=200, statusText=OK, responseText, responseXML
        // var ajax = new XMLHttpRequest();
        // ajax = new ActiveXObject("Microsoft.XMLHTTP");
        // var r = document.getElementById("resposta");
        //var ajax = iniciaAjax();
        
        requisitar("ajax/arquivo.xml")
        return false;
    }
    // ajax.onreadystatechange =  function(){
    //     if(ajax.readyState == 4){
    //         console.log(ajax.responseText);
    //         r.appendChild(document.createTextNode(ajax.responseText));
    //         r.innerHTML = ajax.responseText;

    //         var xml = ajax.responseXML;
    //         var url = xml.getElementsByTagName("url")[0].firstChild.nodeValue;
    //         r.appendChild(document.createTextNode(url));
    //         e4x
    //         var xml =  new XML(ajax.responseXML);
    //         r.appendChild(document.createTextNode(xml.url));
    //     }

    // }

    // // ajax.open("POST", "ajax/arquivo.txt");
    // // ajax.open("POST", "ajax/arquivo.html");
    // ajax.open("POST", "ajax/arquivo.xml");
    // ajax.send(null);        

    function carregando(c) {
        while(c.hasChildNodes()){
            c.removeChild(c.lastChild);
        }
        var img = document.createElement("img");
        img.setAttribute("src", "ajax.gif");
        c.appendChild(img);
    }

    function mostra(ajax) {
        var r = document.getElementById("resposta");
        var xml = new XML(ajax.responseText);
        r.appendChild(document.createTextNode(xml.url));
    }

    function requisitar(url) {
        var ajax = iniciaAjax();
        while(c.hasChildNodes()){r.removeChild(c.lastChild);}
        carregando(document.getElementById("resposta"));
        ajax.onreadystatechange = function () {

            if (ajax.readyState == 4) {
                mostra(ajax);
            }

        }
        ajax.open("POST", url);
        ajax.send(null);
    }

    function iniciaAjax() {
        var ajax = null;

        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();

        } else if (window.ActiveXObject) {
            try {
                ajax = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return ajax;
    }

}
