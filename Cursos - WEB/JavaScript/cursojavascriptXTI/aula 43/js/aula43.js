/* CORE API */
window.onload = function() {
    /* Navega na Árvore do Documento */

    /* TIpos de Nós(Documento, Elemento, Atributo e Texto)*/
    /* Parentesco dos Nós
    (Pai=parent, Filho=child, Irmão=sibling)*/

    var div = document.getElementsByTagName("div").item(0);

    // alert(div);//elm

    // console.log(div, "elemento");//elemento
    // console.log(div.parentNode, "pai");//pai
    // console.log(div.childNodes, "filhos");//filos

    // var ul = div.childNodes.item(0);

    // console.log(ul, "filhos");//filos
    // console.log(ul.nodeName, "filhos");//filos
    // console.log(ul.nodeType, "filhos");//filos

    // console.log(ul.childNodes.length);
    // alert(ul.firstChild);
    // alert(ul.lastChild);

    // console.log(ul.nodeName);
    //  console.log(ul.nodeValue);

    // var li = ul.firstChild.lastChild.childNodes[1];
    // console.log(li.firstChild.nodeValue);

    // alert(li.firtChild.nodeValue);
    // alert(li.previousSibling.firstChild.nodeValue);
    // alert(li.nextSibling.firstChild.nodeValue);

    // alert(div.firstChild.firstChild.lastChild.lastChild.
        // lastChild.firstChild.firstChild.nodeValue);

    /* AULA 44
        Criação de Nós
        Atribuição de nós
    */

    var hr = document.createElement("hr");
    div.appendChild(hr);    

    // var li = document.createElement("li");
    // li.appendChild(document.createTextNode("Teste de Lista"));
    // div.firstChild.appendChild(li);

    // var atributo = document.createAttribute("style");
    // atributo.value = "color:blue";
    // li.setAttributeNode(atributo);
    // li.setAttribute ("style", "color:blue");
    // li.style.color = "blue";

    var select = this.document.createElement("select");
    select.setAttribute("id", "estados");
    var option =  document.createElement("option");
    option.setAttribute("value", "DF");
    option.appendChild(document.createTextNode("DIstrito Federal"));
    var option2 =  document.createElement("option");
    option2.setAttribute("value", "SP");
    option2.appendChild(document.createTextNode("São Paulo"));
    select.appendChild(option);
    select.appendChild(option2);
    div.appendChild(select);


    var del = div.firstChild;
    div.removeChild(del);

    var select2 = select.cloneNode(true);
    div.appendChild(select2);

    var option3 = option.cloneNode(true);
    select.appendChild(option3);

}
