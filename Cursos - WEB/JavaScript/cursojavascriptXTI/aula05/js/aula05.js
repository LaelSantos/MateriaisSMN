/*
    função :  ligar()
    autor : Lael dos Santos
    descrição : apresenta o nome do usuário e liga a lampada
*/

function ligar() {

    var nome = window.prompt("Qual o seu Nome?");
    alert("Prazer em conhecer você " + nome);

    window.document.getElementById("xti").src = "img/xlamp_on.png";
}



