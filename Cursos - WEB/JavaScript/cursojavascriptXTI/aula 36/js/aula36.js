/*  autor : lael
    descricação : Funções JavaScript
*/

// window.onload = function() {
//     var btn = document.getElementById("botao");
//     btn.onclick = function () {
//         um();
//     }
// }
// window.onload = function() {
//     var btn = document.getElementById("botao");
//     btn.onclick = null;
   
// }
// window.onload = function() {
//     var btn = document.getElementById("botao");
//     btn.addEventListener("click", um, false);
   
// }

// window.onload = function() {
//     var btn = document.getElementById("botao");
    // btn.addEventListener("click", um, false);
    // btn.addEventListener("click", dois, false);


   
// }

// window.onload = function() {
//     var btn = document.getElementById("botao");
//     btn.onclick = function () {
//         return false
//         um();
//     }
// }

// window.onload = function() {
//     var btn = document.getElementById("botao");
//     btn.onclick = function (evt) {
//         var evento = evt ? evt : window.event;
//         alert(evento.type); //explorer
//     }
// }
// window.onload = function() {
//     var btn = document.getElementById("botao");
//     var div = document.getElementById("primeira");

//     btn.onclick = function () {console.log("Botao")}
    
//     div.onclick = function () {console.log("div")}
    
//     document.onclick = function () {console.log("document")}
        
    

// }

window.onload = function() {
    var btn = document.getElementById("botao");
    var div = document.getElementById("primeira");

    btn.onclick = function () {
        alert(this.id);

    }
    var div = document.getElementById("texto").onblur = function(e){
        alert(this.value);   
    }

        
    

}


// function um() {
//     console.log("Um");
// }


// function dois() {
//     console.log("dois");
// }