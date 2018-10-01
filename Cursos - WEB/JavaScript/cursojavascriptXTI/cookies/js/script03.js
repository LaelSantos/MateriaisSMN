/* 
    autor :  Lael
    descrição :  Temporizadores e Cookies
*/


window.onload = function(){
    document.getElementById("xti").onclick = ligar;
    setInterval(apresentaHoras,  1000);

    var nome = readCookie("nome");
    if(nome = null){
        var nome = prompt("Qual seu nome ?");
        writeCookie("nome", nome, 1);    
    }

    // document.cookie = "nome=valor; expires=data path=/";
    }

function ligar(){
        document.getElementById("xti").src = "img/xlamp_on.png";
        var chave = setTimeout(desligar, 3000);
        // clearTimeout(chave);
    }
function desligar(){
        document.getElementById("xti").src = "img/xlamp_off.png";
}

function apresentaHoras(){
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
    document.getElementById("horas").innerHTML = horas;
}

