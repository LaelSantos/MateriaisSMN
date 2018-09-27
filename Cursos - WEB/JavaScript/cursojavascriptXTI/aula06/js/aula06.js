/*

    autor : Lael dos Santos
    descrição : Estudo dos operadores de javascript
// */

// var x = (7 -4 + 3) * 2 ;
// //var x = 9 /"4" ;
// var x = 6;
// var y = x++;
// var y = x--;
// alert("x = " + x);
// alert("y = " + y); //operadores binarios
// // operadores de comparação
// alert(x <= 6 );

// operadores lógicos

// alert( (x >= 1)  && (x <= 5) );

// alert ((x >= 1) || (x <= 5));

// alert(!(x >= 1));

// VALORES DE ATRIBUIÇÃO

// x   = x + 3;
// x += 3;
// x -= 3;
// x /= 3;
// x %= 3;
// alert(x);

// Operadores Especiais

// var idade = 21;
// var x  = (idade >= 18) ? "maior de idade" : "menor de idade";
// alert(x);

// var idade = new Number(31);
// alert(idade instanceof Number);

// alert(this.document.title)

// alert(typeof(function(){}));

// Estruturas condicionais


// var texto  = " ";
// for (var i = 0; i <=20; i++){
//     if(i%2 == 0){
//         if(i == 20){
//             texto += i;
//             break;
//         }
//         texto += i + ",";

//     }

// }
// console.log(texto);

// var Carro =
// {
//     marca: "Nissan",
//     modelo: "350Z",
//     comprimento: "3.345mm",
//     velocidade: "320km/h",
//     cavalos: "350"

// }

// for (var props in Carro){
//     console.log(props + "=" + Carro[props]);

// }

// var i = 0;
// while(i<3){
//     console.log(i);
//     i++;
// }

// var i = 0;
// do{
//     console.log(i);
// }while(false){
//     console.log(i);
// }

//Tratamento de exceções(erros)
// var x = prompt("Informe um numero maior que 10");
// try{
//     if ( x < 10){
//         throw "Número menor que 10";
//     }
//     console.log(x);
// }catch(e){
//     console.log(e);
// }

// var Carro =
// {
//     marca: "Nissan",
//     modelo: "350Z",
//     potencia:{
//         cavalos: "350",
//     velocidade: "320km/h",
//     }


// }
// with(Carro.potencia){
//     console.log(cavalos);
//     console.log(velocidade);
// }

// var b = new Boolean(true);
// console.log(b instanceof Boolean);

// var n = new Number("120.4932");
// console.log(n.toPrecision(1));
// var n = new Number("120.4932");
// console.log(n.toExponential());

//String

// var x  = new String ("texto, dentro de, texto de aspas");
//var re = /[a-e]/;
// console.log(x.length);
// document.writeln(x.length + "<br/>");
// document.writeln(x.charAt(x.length -1) + "<br/>");
// document.writeln(x.charCodeAt(x.length - 1) + "<br/>");
// document.writeln(String.fromCharCode(115) + "<br/>")
// document.writeln(x.indexOf("dentro") + "<br/>");

// document.writeln(x.lastIndexOf("texto") + "<br/>");

// document.writeln(x.replace("texto", "txt") + "<br/>");
// document.writeln(x.substring(5,8) + "<br/>");
// document.writeln(x.substr(5,8) + "<br/>");
// document.writeln(x.slice(5,8) + "<br/>");
// document.writeln(x.split(",")[0] + "<br/>");


// var paises = new Array("Brasil", "Russia", "India", "China");

// console.log(paises);
// console.log(paises.reverse());
// console.log(paises.sort());
// console.log(paises.join(";"));
// console.log(paises.concat("Eua"));

// var frutas = ["cupuaçu", "banana", "graviola", "açai", "laranja"];

// console.log(frutas.slice(2,3));
// console.log(frutas.splice(2,2, "abacate", "acerola", "umbu", "cupuaçu"));
// console.log(frutas);


// var pessoas = ["Ricardo", "Sandra", "Beatriz", "José"];

// console.log(pessoas.push("Janaina"));
// console.log(pessoas);
// console.log(pessoas.shift()); //remove o primeiro elemento da fila
// console.log(pessoas);
// console.log(pessoas.pop());
// console.log(pessoas);
// console.log(pessoas.unshift("fura fila"));
// console.log(pessoas);

//arrays
// var pessoas = 
// [
//     ["Ricardo", "M"],
//     ["Sandra", "F"]
// ];

// // pessoas[0] = new Array ("Ricardo", "M");


// console.log(pessoas[0][0]);

// var pessoa = {nome:"Beatriz", cidade:"Brasilia"};

// console.log(pessoa.nome);

// var frutas = ["cupuaçu", "banana", 123,"graviola", "açai", "laranja"];

// function todos(elem, ind, obj){
//     return(typeof elem == "string");
// } 

// console.log(frutas.every(todos));


// var frutas = ["cupuaçu", "banana", "graviola", "açai", "laranja"];

// function todos(elem, ind, obj){
//     return(typeof elem == "number");
// } 

// console.log(frutas.some(todos));


// var frutas = ["cupuaçu", "banana", "graviola", "açai", "laranja"];

// function todos(elem, ind, obj){
//     return(elem.indexOf("an") > 0);
// } 

// console.log(frutas.filter(todos));

// var frutas = ["cupuaçu", "banana", "graviola", "açai", "laranja"];

// function todos(elem, ind, obj){
//     return(elem = elem.toUpperCase());
// } 

// console.log(frutas.map(todos));

// var frutas = [10, 20, 45, 65];

// function todos(elem, ind, obj){
//     return(elem = elem * 12);
// } 

// console.log(frutas.map(todos));

var data = new Date();
var data = new Date(123456);
var data = new Date("Jul/20/2011 05:00");
var data = new Date(2011,2,22,4, 35, 30, 1234);

dias = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
   " Sexta-Feira",
    "Sábado"
];
var data = new Date("Jul/20/2018, 04:30");
console.log(data);

// console.log(data.getHours());
// console.log(data.getUTCHours());


console.log(data.getDate());

console.log(data.getDay());
