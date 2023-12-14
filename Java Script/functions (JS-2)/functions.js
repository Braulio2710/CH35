/*
FUNCIONES:
son bloqes de código con instrucciones que se pueden reautilizar las veces que sean necesarioas.
Algunas funciones reciben parámetros y otras no reciben parámetros.
NOTA: Las funciones normales se llaman funciones por declaración.
*/

//Funcion que permite saludar
function saludar (){
    console.log("Hola desde una función");
}
//Ejecutar la función con el nombre de la función y los parámetros 
saludar();

//Hoisting. Característica de una función que nos permite invocarla desde antesd de su inicialización, es decir, se puede invocar antes del bloque de código o después.

//Se invoca en la linea 11 y en la 18 pero como la útlima función leída (y por tanto con mayor gerarquía, es la de la linea 18) esa se ejecuta las dos veces en la consola.
function saludar(){
    console.log("Hola invocando la función con hoisting");
}
saludar();


/*Funciones que retornan algo
Para que una función retorne algo (un string, una operación, una variable, etc.), necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return */
function greeting(){
    return "Hola desde una función que retorna";
}
console.log(greeting());

//Funcion que RETORNA y RECIBE parámetros
function sumar(x, y) {
    return x + y
}
let resultado = sumar(255,245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//Calcular el cuadrado de un número
function calcCuadrado (numero){
    return numero * numero;
}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//Funciones FLECHA (ARROW function). Es una manera de declarar una función por declaración, sintetizando código y haciéndolo más legible. Esta no inicia con la palabra reservada "function", sino se declara como constante.
//Esta tipo de funciones se agregó en la versión ES6 de JS.
//Función flecha para calcular el cubo de un número
const calcCubo = (number) => {
    return number * number * number;
}
let resultCubo = calcCubo (3);
console.log(resultCubo);

//Funciones ANÓNIMAS. 
//Se declaran sin nombre de función y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que la utilicemos.
//Este tipo de funciones no permiten el hoisting, no se pueden invocar antes de inicializarse.
const mensaje = function (){
    return "Este es un mensaje desde una función anónima";
}
console.log(mensaje());

////CALLBACKS. Es pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código.
//Investigar async await
//Función B
const functionB = function(){
    console.log("Ejecutando función B");
}

//FunciónA
const functionA = function (callback){
    callback();
}
functionA(functionB);
