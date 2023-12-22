// =ARRAYS= //
/*Son una agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa el array.

Los arrays se utilizan para almacenar y organizar datos de manera más eficiente.
*/

//  =C r e a r   u n   A r r a y=
//array de números
const núms = [1, 2, 3, 4 ,5]; 
console.log(núms);
// array de texto
const comida = ["Liru", "Carl´s", "KFC", "Café"]; 
console.log(comida);
//array mixto con diferentes tipos de datos
const mixto = [
    "Pluma", 8, true, {nombre: "Braulio"}
];
console.log(mixto);

//array vacío
const lista = [];
console.log(lista);

//agragar elementos a mi arrey vacío:
lista [0] = "Leche";
lista [1] = "Crema de avellanas";
lista [2] = "Pollo";
lista [3] = "Atún";
console.log(lista);


// Otra manera de crear arrays
// Esta sintaxis se puede emplear en un array porque son Objetcts, es una manera de mandar a llamar un nuevo Objeto de tipo Array
const frutas = new Array ("Manzana", "Naranja", "Mandarina", "Plátano", "Uvas verdes");
console.log(frutas);

// CONOCER la LONGITUD de un array
console.log(frutas.length); //nos devuelve un "5" en la consola.

//ACCEDER a los ELEMENTOS del array, acorde a su índice (posición).
console.log(frutas[3]); // Nos devuelve "Plátano" en la consola, que es la info ubicada en el índice 3 del array frutas.
//Si ponemos un indice que no existe dentro del array nos dará un mensaje de "undifined" en consola.

//MODIFICAR un ELEMENTO del array POR MEDIO DEL ÍNDICE
const cremería = ["Jamón", "Salchicha", "Queso adobera", "Queso Cotija", "Yogurt"];
console.log(cremería);
//cambiamos de queso adobera a quesillo:
cremería[2] = "Quesillo";
cremería[0] = "Queso Fresco";
cremería[1] = "Queso Panela";
cremería[4] = "Crema";
console.log(cremería);


//ARREGLO MILTIDIMENCIONAL: arrreglo de arreglos:
console.log(" =Arreglo de arreglos=");

//Estados: Edo.Méx., Jalisco, Michoacán, Oaxaca.
//Platillos: Guajolota, Torta ahogada, Carnitas, Tlayuda. 
const estados = ["EDOMEX", "Jalisco", "Michoacán", "Oaxaca"];
const platillos = ["Guajolota", "Torta ahogada", "Carnitas", "Tlayuda"];
 const menú = [estados, platillos];
 //En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.
 console.log(menú[0][3] + ", " + menú[1][3]);
 console.log(`Y en ${menú[0][1]} también se come(n) ${menú[1][2]}. Pero son Carnitas estilo Michoacán, por supuesto.`);


//MÉTODOS DE ARRAYS

//Método DE COLA (queue). Implica agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principo de FIFO(First-in-first-out), lo que singifica que el primer elemento añadido es el primer elemento eliminado.
/* Se usan:
-push
-shift
-unshift
*/
//Método DE PILA (stack): Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (last-in-first-out) que singifica el último elemento añadido es el primero en ser eliminado.
/* Se usan:
-push
-pop
*/
console.log(" =Métodos de arrays=");
const CH35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Henry Cano"];
console.log(CH35);
console.log("Cambiaremos elementos:");
//pop - elimina el último elemento del arrey
let popCH35 = CH35.pop();
console.log(popCH35); //Devuelve el dato eliminado
console.log(CH35); //muestra el arrey después de eliminar al último elemento
//push - agrega al final del arrey
let pushCH35 = CH35.push("Enrique");
console.log(CH35); //muestra el arrey después de eliminar al último
//shift - quita el primer elemento del arrey
let shiftCH35 = CH35.shift();
console.log(CH35);
//unshift - agrega al principio del array
let unshift = CH35.unshift("Daniel");
console.log(CH35);
//reverse - cambia el sentido del ordenamiento de array
let reverseCH35 = CH35.reverse();
console.log(CH35);

/* Investigar:
-sort
-forEach
-slice
-splice
-indexOf
*/

