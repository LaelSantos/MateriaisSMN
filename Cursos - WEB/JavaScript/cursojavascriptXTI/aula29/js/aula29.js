/*
    Cliente : CIne-Baladinha
    Autor : Lael 
    Descrição : Scripts para localização de poltronas
        disponível no cinema.

*/
//true = disponivel
//false = indisponivel
window.onload = function(){
    carregarPoltronas();
}

var poltronas = [false, true, false, true, true, true, false, true, false];
function carregarPoltronas(){
    var imagens = document.getElementsByTagName("img");

    for(var i = 0;  i<imagens.length; i++){
        if(poltronas[i]){
        imagens[i].src="img/ball_disponivel.png";
    } else {
        imagens[i].src="img/ball_indisponivel.png";
    }
    }
}

function selecionarPoltrona(){
    var imagens = document.getElementsByTagName("img");
    for(var i = 0; i < poltronas.length; i ++){
        if(poltronas[i]){
            imagens[i].src="img/ball_selecionada.png";

            var quer = confirm("Voce que esta Poltrona?");
            if(quer){
                break;
            }else{
                imagens[i].src="img/ball_disponivel.png";
            }
        }
    }
}

function selecionarCasal(){
    var imagens = document.getElementsByTagName("img");
    for(var i = 0; i < poltronas.length; i ++){
        if(poltronas[i] && poltronas[i+1]){
            imagens[i].src="img/ball_selecionada.png";
            imagens[i+1].src="img/ball_selecionada.png";
            var quer = confirm("Voce quer estas Poltronas?");
            if(quer){
                break;
            }else{
                imagens[i].src="img/ball_disponivel.png";
                imagens[i +1].src="img/ball_disponivel.png";
            }
        }
    }
}
