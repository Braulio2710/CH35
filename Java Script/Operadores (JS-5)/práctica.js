//  = = E J E R C I C I O S = =
/*
ejercicio 1
un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o hay alguno que sea mayor que otro */
console.log("1.1 Programas para definir qué número es mayor a otro.")
let numX = 3;
let numY = 10;
if (numX > numY){
    console.log(`El número ${numX} es mayor que el número ${numY}`);
} else {console.log(`El número ${numY} es mayor que el número ${numX}`);
}
/*
//Solicitar los dos números al usuario
console.log("1.2 Programa para soliciitar dos núeros al usuario por medio de un prompt y definir qué número es mayor que el otro.")

var num1User = prompt("Este es un programa para determinar qué número es mayor qué otro. Por favor, ingresa el primer número.");
var num2User = prompt("Ingresa el segundo número.");

if  (num1User > num2User){
    console.log(`El número ${num1User} es mayor que el número ${num2User}`)
}else{
    console.log(`El número ${num2User} es mayor que el número ${num1User}`)
}
*/

/*ejercicio 2
Un programa compare dos palabras y determine si son iguales o no*/
console.log("2.1 Programa para determinar si dos palabras son iguales.");
let pal1 = "Cuervo";
let pal2 = "Zanate";
if (pal1 == pal2){
    console.log(`La palabra "${pal1}" es igual que la palabara "${pal2}"`);
} else {console.log(`La palabra "${pal1}" es diferente de la palabara "${pal2}"`);
}

/* Ejercicio 2

Desarrollar un programa que pida al usuarios dos palabras y determine si son iguales o no.

console.log("2.2 Programa para determinar si dos palabras dadas por el usuario por medio de prompt son iguales.");

var palabra1 = prompt("Este es un programa para determinar si dos palabras son iguales. Por favor, ingresa la primera palabra.");
var palabra2 = prompt("Ingresa la segunda palabra.");

if  (palabra1 !== palabra2){
    console.log(`La palabra "${palabra1}" es diferente de la palabara "${palabra2}"`)
}else{
    console.log(`La palabra "${pal1}" es igual que la palabara "${pal2}"`)
}
*/



// Función que verifica si el usuario tiene o no los ingredientes y muestra la receta
// Solicitar al usuario si tiene los ingredientes necesarios
var cantHarina = prompt("¿Cuántas tazas de harina tienes?");
var cantLeche = prompt("¿Cuántas taza de leche tienes?");
var cantHuevos = prompt("¿Cuántos huevos tienes?");
var cantMant = prompt("¿Cuántas cucharadas de mantequilla tienes?");


function hacerHotcakes(cantHarina, cantLeche, cantHuevos, cantMant) {
    // Verificar si tiene los ingredientes suficientes para hacer hotcakes
    if (cantHarina >= 2 && cantLeche >= 1.5 && cantHuevos >= 2 && cantLeche >=2 && cantMant >=2) {
        // Si tiene todos los ingredientes, mostrar la receta
        console.log("¡Perfecto! Tienes los ingredientes necesarios para hacer hotcakes.");

        // Resto de la receta
        console.log("1. Mezcla 2 tazas de harina con 2 huevos, 1.5 tazas de leche.");
        console.log("2. Calienta un sartén a fuego medio. Coloca un poco de mantequilla en el sartén.");
        console.log("3. Vierte la mezcla en la sartén caliente.");
        console.log("4. Cocina ambos lados hasta que estén dorados.");
        console.log("5. ¡Disfruta tus deliciosos hotcakes!");

    } else if (cantHarina < 2 && cantLeche >= 1.5 && cantHuevos >= 2 && cantMant >= 2){

        // Si no tiene harina, mostrar:
        console.log("Lo siento, no tienes suficiente harina. ¡Ve a comprarla!");
    } else if (cantLeche < 1.5 && cantHarina >= 2 && cantHuevos >= 2 && cantMant >= 2){

        // Si no tiene leche, mostrar:
        console.log("Lo siento, no tienes suficiente leche. ¡Ve a comprarla!");
    } else if (cantHuevos < 2 && cantHarina >= 2 && cantLeche >= 1.5 && cantMant >= 2){

        // Si no tiene huevos, mostrar:
        console.log("Lo siento, no tienes suficientes huevos (jajajaja). ¡Ve a comprarlos!");
    } else if (cantMant < 2 && cantHarina >= 2 && cantLeche >= 1.5 && cantHuevos >= 2){

        // Si no tiene mantequilla, mostrar:
        console.log("Lo siento, no tienes suficiente mantequilla. ¡Ve a comprarla!");
    } else if (cantHarina < 2 && cantLeche < 1.5 && cantHuevos < 2 && cantMant < 2){

        // Si no tiene ningún ingrediente, mostrar:
        console.log("No inventes, no tienes ningún ingrediente suficiente. ¡Ve a comprarlos!");
    } else {
        //Si le faltan al menos dos ingredientes, mostrar:
        console.log("Lo siento, te faltan al menos dos ingredientes. ¡Consíguelos!")
    }
}
// Llamar a la función con los valores proporcionados por el usuario
hacerHotcakes(cantHarina, cantLeche, cantHuevos, cantMant);


/*
// Función que verifica si el usuario la cantidad de ingredientes y muestra la receta
// Solicitar al usuario si tiene los ingredientes necesarios
var cantHarina = confirm("¿Tienes al menos 2 tazas de harina?");
var cantLeche = confirm("¿Tienes al menos taza y media de leche?");
var cantHuevos = confirm("¿Tienes al menos 2 huevos? (jajaja)");
var cantMant = confirm("¿Tienes al menos 2 cucharadas de mantequilla?");


function hacerHotcakes(cantHarina, cantLeche, cantHuevos, cantMant) {
    // Verificar si tiene los ingredientes suficientes para hacer hotcakes
    if (cantHarina && cantLeche && cantHuevos && cantLeche && cantMant) {
        // Si tiene todos los ingredientes, mostrar la receta
        console.log("¡Perfecto! Tienes los ingredientes necesarios para hacer hotcakes.");

        // Resto de la receta
        console.log("1. Mezcla 2 tazas de harina con 2 huevos, 1.5 tazas de leche.");
        console.log("2. Calienta un sartén a fuego medio. Coloca un poco de mantequilla en el sartén.");
        console.log("3. Vierte la mezcla en la sartén caliente.");
        console.log("4. Cocina ambos lados hasta que estén dorados.");
        console.log("5. ¡Disfruta tus deliciosos hotcakes!");

    } else if (cantHarina === false && cantLeche && cantHuevos && cantMant){

        // Si no tiene harina, mostrar:
        console.log("Lo siento, no tienes suficiente harina. ¡Ve a comprarla!");
    } else if (cantLeche === false && cantHarina && cantHuevos && cantLeche && cantMant){

        // Si no tiene leche, mostrar:
        console.log("Lo siento, no tienes suficiente leche. ¡Ve a comprarla!");
    } else if (cantHuevos === false && cantHarina && cantLeche && cantMant){

        // Si no tiene huevos, mostrar:
        console.log("Lo siento, no tienes suficientes huevos (jajajaja). ¡Ve a comprarlos!");
    } else if (cantMant === false && cantHarina && cantLeche && cantHuevos){

        // Si no tiene mantequilla, mostrar:
        console.log("Lo siento, no tienes suficiente mantequilla. ¡Ve a comprarla!");
    } else if (cantHarina === false && cantLeche === false && cantHuevos === false && cantMant === false){

        // Si no tiene nada, mostrar:
        console.log("No inventes, no tienes ningún ingrediente suficiente. ¡Ve a comprarlos!");
    } else {
        // Le faltan al menos dos ingredientes, mostrar:
        console.log("Lo siento, te faltan al menos dos ingredientes. ¡Consíguelos!")
    }
}
// Llamar a la función con los valores proporcionados por el usuario
hacerHotcakes(cantHarina, cantLeche, cantHuevos, cantMant);
*/