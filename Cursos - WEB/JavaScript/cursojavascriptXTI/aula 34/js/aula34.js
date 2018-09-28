/*  autor : lael
    descricação : Funções JavaScript
*/

function somar0() {
    console.log(2+2, "sem parametros");
}
somar0();

//declarativa
function somar(x, y){
    return x+y;
    console.log(x+y, "declarativa");
}

var somar2 = new Function("x", "y", " console.log(x+y);");

console.log(somar2(2,2), "anonima");

somar2(2,2);


var somar3 = function (x, y){
    console.log(x+y, "literal");
}

somar3(2,2);
window.onload =  function(){
    document.getElementById("t").onclick = function(){
        alert("teste");
    }
}


 function teste(){
     alert("Teste");
 }
