/*  autor : lael
    descricação : Expressões Regulares - RegExp

*/

/*Expressões Regulares*/
// // var regex = new RegExp("JavaScript","i");
// var regex = /JavaScripT/i;
// var string ="JavaScript";
// console.log(regex.test(string));

// console.log(/javascript/i.test("JavaScript")); 
// console.log(/javascript/i.exec("JavaScript")); 
// console.log(/doce/i.exec("Qual é Doce mais doce que o doce?")); 

// console.log(/doce/ig.exec("Qual é Doce mais doce que o doce?")); 

/*FUNÇÕES + MODIFICADORES */
// var str = "Qual é Doce mais doce que o doce?"
// console.log(/doce/ig.exec(str));
// console.log(str.match(/doce/ig));

/*METACARACTERES*/

// console.log(/./.test("Pier21"),"Qualquer caracter");
// console.log(/\w/.test("Pier21"), "De a z de 0 a 9 e _");
// console.log(/\s/.test("Pier 21"), "espaço no texto");
// console.log(/\d/.test("Pier21"), "digitos");
// console.log(/^/.test("Pier21"), "ocorrencia no inicio da string");
// console.log(/21$/.test("Pier21"),"ocorrencia no final");
// console.log(/\d$/.test("Pier21"), "digito no final da string");
// console.log(/^\d\d\d\d\d\-\d\d\d$/.test("97950-000"), "padrao cep");

/* Quantificadores */

// console.log(/\d/.test("Pier21"),"ocorencia sem quantificador");
// console.log(/\d*/.test("Pier21"), "0 ou mais digitos");
// console.log(/\d+/.test("Pier"), "pelo menos uma ocorrencia ou mais");
// console.log(/\d{2}/.test("Pier21"),"total de vezes");
// console.log(/\d{2}$/.test("Pier21"),"no final");

// console.log(/^\d{5}-\d{3}$/.test("97950-000"), "padrao cep");
// data
// console.log(/^\d{2}\/\d{2}\/\d{4}$/.test("12/02/1980"), "Data ");
// console.log(/^\d{2}\/\d{2}\/\d{2,4}$/.test("12/02/180"), "Data ");

// console.log(/\w+@\w+\.\w{2,3}/.test("email@hotmail.com"), "Email ");

/* CARACTERES OPCIONAIS */
//cau e ceu

//AGRUPADORES
// console.log(/c[ae]u/.test("ceu"), "Agrupadores");
// console.log(/\d[\d\.]*/.test("23,45"), "Num");


/* BUSCAS E SUBSTITUIÇÕES */

// var str = "Qual é Doce mais doce que o doCe?";
// console.log(str.match(/doce/ig));
// console.log(str.replace(/doce/ig, "DOCINHO"))

// var str = "O rato roeu a roupa do rei de roma.";
// console.log(str.match(/r[a-z]/ig));
// console.log(str.replace(/r[a-z]/ig, "XXX"))


var url = "www.xti.com.br/clientes-2011.html";
        //"http://www.xti.com.br/2011/clientes.jsp ";
var re = /www.xti.com.br\/\w{2,}-\d{4}\.html/;

console.log(re.test(url));

re = /(www.xti.com.br)\/(\w{2,})-(\d{4})\.html/;
console.log(url.replace(re, "http://$1/$3/$2.jsp"));


