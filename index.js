/*IMC*/

var peso = prompt("ingrese peso", "");
var altura = prompt("ingrese altura", "x.x");

var imc;


imc=peso/(altura*altura);
console.log(imc)

/*iva*/
var valor = prompt("ingrese valor", "");

var impuesto=0.19;
var iva;

iva=valor*impuesto;
console.log(iva)

/*Hipotenuza*/
var cat1 = prompt("ingrese valor cat1", "");
var cat2 = prompt("ingrese valor cat2", "");
var cat1;
var cat2;
console.log(Math.hypot(cat1,cat2));



