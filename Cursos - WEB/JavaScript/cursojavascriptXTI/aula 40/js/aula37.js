/*  autor : lael
    descricação : HTML 5 DOM STORAGE: Localstorage    */

window.onload = function() {

    var gravar  = document.getElementById("gravar");
    var exibir = document.getElementById("exibir");
    var texto = document.getElementById("texto");

    gravar.onclick = function(){
        localStorage.setItem("meuTexto", texto.value);
    }

    exibir.onclick = function(){
        texto.value = localStorage.getItem("meuTexto");
    }
}
