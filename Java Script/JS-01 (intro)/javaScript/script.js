// comentarios de una sola línea

/*comentarios
multilínea*/

//alert("Hola mundo");

console.log("Este es un mensaje para mi consola")

/*var nombre = prompt("Ingresa tu nombre:");
alert("¡Hola, " + nombre + ", bienvenido a Java Script!");*/

/*var número1 = parseInt (prompt("Ingresa el primer número:"));
var número2 = parseInt (prompt("Ingresa el segundo número:"));

console.log("suma: " + (número1 + número2));
console.log("resta: " + (número1 - número2));
console.log("multiplicación: " + (número1 * número2));
console.log("división: " + (número1 / número2));*/

//reivsar sintaxis para poner tres mensajes:
// var edad = parseInt (prompt("Ingresa tu edad:"))
// if (edad < 18) {alert("Tú no sabes, estás chiquito.")} else if(18 >= edad && edad< 40) {alert("Pase Usted")} else {alert("Ya estás viejito, pero pásale... a la mesa del fondo.")}



//--------------------------
//TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

/*Todas nuestras variables deber ser declaradas con nombres específicos y claros, sin espacios y no deben iniciar con números*/

let nombre = "Daniel";
let invitadosExtra = 2;
let esMayorEdad = true;
let edad = 27;
let invitadoEspecial = null;
let horaDeSalida = undefined;

// console.log(nombre); //nos lo muestra sólo en la consola
//document.write(nombre) //*nos lo muestra en la página

/*Encasillamiento o tipado
Nos sirve para:
-Facilitar el mtto del código ya que lo hace más legible y fácil de entender. Se usa para proyectos grandes.
-Prevenir errores.*/
/*let numero=15;
let texto="Hola";
//Con encasillamiento haríamos lo siguiente:
let numeroEncasillado = number = 5;
let textoEncasillado = string = "Hola"; */

// Typeof: palabra reservada para saber qué tipo de dato almacena una variable.
console.log(typeof(nombre));


//Para cambiar el tipo de variable de texto a número existen las siguiente opciones:
// /*1.*/ let funcionNumber = console.log(typeof Number(nombre));
// /*2.*/ metodoParseInt = console.log(typeof parseInt(nombre)); // parseInt y parseFloat son funciones para convertir cadenas de texto exclusivamente en números, ya sea de tipo int o de tipo float.

//Conversión de number a string
// /*1.*/ console.log(typeof String(edad));
// /*2.*/ console.log(typeof edad.toString());

//Conversión de booleano a number
//let numero = Number(esMayorEdad); //Se declara la variable numero como tipo número con base en el valor de la variable esMayorEdad
//console.log(typeof(esMayorEdad));
//console.log(numero);

//a texto:
//let texto = String(esMayorEdad);
//console.log(typeof(texto));
//console.log(typeof esMayorEdad.toString());


//CONCATENAR: significa báscicamente unir string.

//let saludo = "Hola, mundo. "
//let frase = "El futuro es hoy, viejo XD"
//aquí estamos concatenando las variables saludo y la variable frase.
//texto=saludo + frase
//document.write(texto); //se muestra en la pág
//console.log(texto); //se muestra en la consola


//PRACTICA 1
/* let huevos="2";
let leche = "1.5";
let harina = "2";
let mantequilla = "2";
let medidaUno = "tazas";
let medidaDos = "cucharada";

let pasoUno="1. Licúa los ingredientes.<br>"
let pasoDos="2. Vierte en un tazón e incorpora la manzana y la canela. Mezcla perfectamente.<br>"
let pasoTres= "3. Calienta un poco de mantequilla en un sartén antiadherente y vierte una cucharada grande de la mezcla formando un círculo.<br>"
let pasoCuatro= "4.Deja cocer hasta que se llene de burbujas y voltea.<br>"

let pasoCinco= "5. Cocina 1 minuto más o hasta que la pasta esté cocida. Retira.<br>"
//Conversión a num
let pasoSeis= "6. Coloca de 2 a 3 hot cakes sobre un platón, úntales mantequilla y viérteles miel al gusto. ☺"


let funcionNumber = console.log(typeof Number(huevos));
metodoParseInt = console.log(typeof parseInt(leche));
metodoParseInt = console.log(typeof parseInt(harina));
let funcionInt = console.log(typeof Number(mantequilla));



//Impresión de texto:
receta = pasoUno+pasoDos+pasoTres+pasoCuatro+pasoCinco+pasoSeis
document.write(receta); //se muestra en la pág
console.log(receta); //se muestra en la consola */

//TIPOS DE CONSOLE
/*console.log() nos permite visualizar en la consola del navegador el código de JS.
console.waen() nos muestra un mensaje de advertencia.
console.error() muestra un mensaje de error
*/

let firstName; //esto es inicializar la variable, sin declararla.
firstName = "Braulio";
let lastName =  "Santiago"; // inicializo y declaro al mismo tiempo.

/*ECMAScript 6 (ES6) es la última versión de JS. Nos permite hacer INTERPOLACIÓN DE CADENAS
>- backticks 
>-Para variables las incovamoc ${}
>-texto para string
*/
let age = 37;
console.log(`Mi nombre es ${firstName}, mi apellido es ${lastName} y tengo ${age} años`);

//console.warn();
console.warn(`Precaución, no es buena práctica dehar sin punto y coma`);
//console.error();
console.error(`Status 404: Failed`);

//ARREYS (arreglos)
/*Arrey: se tradice como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
- Los arreys se pueden manipular mediante métodos específicos.
- Los elementos de un arry se contabiliza con índices empezando por índice, por lo cual, el primer elemento del arrey posee el índice 0.
- Un arrey posee n cantidad de alementos.
- Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato. 
*/
let arreglo1 = []; //Array vacío
console.log(`Array vacío ${arreglo1}`);
let cars = ["VW", "BMW", "Mazda", "KIA"]; //Array de Strings
console.log(cars);
//Longitud e índice son diferentes. Length es el número de elementos y el índice corresponde a cada elemento a partir del 0.
console.log(typeof(cars));


let salariesMXN = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
console.log(salariesMXN.length);
console.log(salariesMXN);

/*
OBJETOS
son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.
-Su sintaxis es la siguiente:
const object = {
    clave1: valor 1 (dato1),
    clave2: valor2 (dato2)
}
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
    firstName: "Rey David",
    lastName: "Martínez",
    age: 29,
    country: "México"
}

console.log(employee);
//mostrando mi array como table
console.table(cars);
//mostrando mi objeto como tabla
console.table(employee);
