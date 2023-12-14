// B U C L E S (for and while)
//Herramientas para automatizar procesos y permite repetibilidad.
console.log(" = B U C L E S =");
/* 
===== BUCLES =====
 Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

 -- Operadores de incremento (++) y operadores de decremento (--)
${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
 Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
- El operador ++ se utiliza para aumentar el valor de una variable en uno.
- El operador -- se utiliza para disminuir el valor de una variable en uno.
 (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/*
=== C I C L O   for===
Éste se repite hasta que la condición se evalúe como "false". Crea 3 expresionales opcionales
  *Sintaxis
    *for (expresiónInicial; expresiónCondicional);
       expresiónActualización{
        *Código a ejecutar en cada ineración del bucle
       }

       1. Inicialización: se debe inicializar con una variable que será evaluada en la expresión a comparar.
       2. Condición: es una expresión que debe cumplir la variable incial (true), si no se cumple (flase) el bucle termina.
       3. Pasos por realizar: son los intervalos que cambiaron a la variable inicial mientras ésta sea true.
*/

// = C I C L O    F O R =
console.log("= C I C L O    F O R =")
// Crear un programa para aumentar el número de boletos vendidos para una rifa de 1 en 1:
console.log("Aumentar de 1 en 1:")
for (let boleto = 1; boleto <=5; boleto ++){
    console.log(`Boleto # ${boleto}`); //En consola se mostrará "Boleto #1, #2, ... , #n"
}

//aumentar el númeor de 1 en 1 con una variable global
console.log("Aumentar de n en n:")
let bolos = 0;
for (bolos; bolos <=6; bolos+=2){
    console.log(`Van ${bolos} unidad(es)`);
}

//C U E N T A   R E G R E S I V A
console.log("Disminuír de 1 en 1:");
let cuentaRegresiva = 5;
for (cuentaRegresiva; cuentaRegresiva >= 0; cuentaRegresiva --){
    console.log(`Quedan ${cuentaRegresiva} unidad(es)`)
}

/*
RECORRER arrays con el ciclo for
 *Debemos usar índices del arreglo para poder usar el bucle en índices desde el 0 hasta n y usaremos la propiedad Lenght
*/
console.log("RECORRER el índices mostrado de un array con el ciclo for de 1 en 1:")
const CH35 = ["Manuel", "Dolores", "Mauricio", "Braulio", "Adelaida"];
for (let i = 0; i< CH35.length; i++){
    console.log(CH35[i]);
}

/* ==Variaciones del ciclo for==
    -for...of nos permite recorrer el objeto (array) y devuelve el valor.
    -for...in nos permite recorrer el objeto (array) y devuelve su posición (índice).
*/

const frutas = ["Manzana", "Naranja", "Mandarina", "Plátano", "Uvas verdes"];
for (let fruta of frutas){
    console.log(fruta);
}
/*
const fruits = ["Apple", "Banana", "Orange"];
let fruta;
for (fruta of fruits) {
  console.log(fruta);
}
*/

// ==SUMA DE NÚMERO DEL 1 AL 20==
console.log("Suma de número del 1 al 20:");
let suma = 0;
for (let i = 1; i <= 20; i++){
    suma += i;
    //console.log(suma); // muestra en consola cada suma
}
console.log(`La suma total es: ${suma}`);//muestra en consola sólo la suma final

//TABLA 5
console.log("Tabla del 6:");
const tabla = 6;
for (let i = 1; i<=10; i ++){
    let resultado = tabla * i;
    console.log(`${tabla} x ${i} = ${resultado}`);
}





//=C I C L O    F O R =
console.log("= C I C L O    W H I L E =");
/*
-Recorre un bloque de código siempre que una condición específica sea verdadera.
-Sirve para realizar una tarea repetitiva mientras una condición sea verdadera.
*/
//Reducción de 1 en 1
console.log("Reducción de 1 en 1:");
let productos = 5;
while (productos > 0){
    console.log(`${productos} productos vendidos`);
    productos --; 
}

//Aumentar números seguidos de 1 en 1
console.log("Aumentar de 1 en 1:");
let num1 = 0;
while(num1 < 5){
    num1++
    console.log(`El número es ${num1}`);
}