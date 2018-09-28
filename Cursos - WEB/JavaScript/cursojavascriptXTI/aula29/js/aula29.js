/*
    Cliente : CIne-Baladinha
    Autor : Lael 
    Descrição : Scripts para localização de poltronas
        disponível no cinema.
    ala  : 29 e 35
*/
//true = disponivel
//false = indisponivel
window.onload = function(){
    carregarPoltronas();
    //onclick="verificarStatus(0);"
    // document.getElementsByTagName("img")[0].onclick = function(){verificarStatus(0);}
    // document.getElementsByTagName("img")[1].onclick = function(){verificarStatus(1);}
    // document.getElementsByTagName("img")[2].onclick = function(){verificarStatus(2);}
    // document.getElementsByTagName("img")[3].onclick = function(){verificarStatus(3);}
    // document.getElementsByTagName("img")[4].onclick = function(){verificarStatus(4);}
    // document.getElementsByTagName("img")[5].onclick = function(){verificarStatus(5);}
    // document.getElementsByTagName("img")[6].onclick = function(){verificarStatus(6);}
    // document.getElementsByTagName("img")[7].onclick = function(){verificarStatus(7);}
    // document.getElementsByTagName("img")[8].onclick = function(){verificarStatus(8);}

    var imagens = document.getElementsByTagName("img");
    for(var i=0; i<imagens.length; i++){
        imagens[i].onclick = verificarStatus(i);
    }
}

function verificarStatus(poltrona){
    return function(){
        var src = document.getElementsByTagName("img")[poltrona].src;
        var msg ="";
        if(src.indexOf("ball_disponivel.png") > 0){
            msg = "Poltrona Disponível"
        } else if (src.indexOf("ball_indisponivel.png") >  0){
            msg = "Poltrona Indisponível"
        } else{
            msg = "Esta poltrona é sua!!";
        }

        alert(msg);
        console.log(msg);
    }
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
