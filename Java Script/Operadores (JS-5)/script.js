// Operador 
//Es un signo que especifica una determinada operación
// Operadores aritméticos (+, -, *, /, % (residuo), --)

/*
Operadores de asignación (=)
Operadores lógicos (&&, ||, !)
Operadores de comparación (==, ===, !=, !== <, >, <=, >=)
Operadores de cadena (toLowerCase, toUperCase, trim, toString, concat, +)
*/

/*
Operadores aritméticos
(+) suma
(-) resta
(*) multiplicación
(/) división
(%) residuo, se utiliza para obtener el resto de números de una división
(++) incremento, aumenta de 1 en 1
(--) decremento, reduce de 1 en 1
*/
console.log("Operadores aritméticos:")
let num1 = 10;
let num2 = 8;
suma = num1 + num2;
resta = num1 - num2;
multiplicación = num1 * num2;
división = num1 / num2;
residuo = num1 % num2
incremento = num1;
incremento ++
decremento = num2;
decremento --
console.log(suma);
console.log(resta);
console.log(multiplicación);
console.log(división);
console.log(residuo);
console.log(incremento);
console.log(decremento);

console.log("Operador de asignación = :")
let precioNormal = 1000;
let porcDesc = .2;
let desc = precioNormal*porcDesc;
let precioDesc = precioNormal * (1-porcDesc);
console.log(`El precio normal es: $${precioNormal}, el precio con descuento es: $${precioDesc}. ¡Ahorras $${desc}!`);

//Operador de asignación
// let fruta = manzana;

//Operadores de comparación
//(==) igualdad compara si nuestros valores son iguales
console.log("Operador de igualdad == :")
let num3 = 10;
let texto = "10";
console.log(`Como el valor de ${num3} es igual al valor de ${texto} el resultado es: ${num3 == texto}`);//nos dará un true porque 10 = 10

//(===) igualdad estricta, compara los valores y el tipo de dato
console.log("Operador de igualdad estricta === :")
console.log(`Como el valor de ${num3} es igual al valor de ${texto}, pero no son el mismom tipo de dato, el resultado es: ${num3 === texto}`);// será false porque uno es número y otro texto.

//(!=) Desigualdad o disntinto de. Verifica si dos valores no son iguales y de ser necesario realiza la conversión.
console.log("Operador de desigualdad estricta != :")
let precioCaja = 1499;
let precioMáximo = 1500;
if (precioCaja != precioMáximo){
    console.log("El precio del producto NO es igual al precio máximo");
} else {
    console.log("El precio del producto SÍ es igual al precio máximo permitido.");
}

// (!==) Desigualdad estricta. Este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo.
console.log("Operador de igualdad estricta != :")
let num5 = 10;
let num6 = "10";
if (num5 !== num6){
    console.log("Son diferentes."); //Serán diferentes porque son de diferentes tipos.
} else {
    console.log("Los valores son iguales.")
}

// Si quieremos que luego de comparar los valores compare los tipos de dato y que convierta, por ejemplo, el num6 a tipo number usamos la función "Number" para pasar de "10" -> 10
let num7= 10;
let num8 = "10";
if (num7 !== Number(num8)){ //si quitamos la funcion "Number" el resultado será "Son diferentes", si la dejamos, el resultado será son iguales.
    console.log("Son diferentes.");
} else {
    console.log("Los valores son iguales.")
}

// (>): Mayor que básicamente nos indica si un valor es mayor que otro.
// (<): Menor que, nos indica si un valor es menor que otro.
// (>=): nos indica si un valor es mayor o igual que otro valor.
let edad = 18;
let edadMín = 18;
console.log(edad >= edadMín);
// (<=): nos indica si un valor es menor o igual que otro valor.
let edadMáx = 6;
console.log(edad <= edadMáx);



// Oeradores lógicos
// (&&) AND se utiliza cuando ambas condiciones deben cumplirse
let mayoriaDeEdad = 18;
let tieneID = true;
if (mayoriaDeEdad >= 18 && tieneID){
    console.log("Puedes rentar el salón.");
} else {
    console.log("No puedes rentar el salón");
}

// (||) OR se utiliza cuando se debe cumplir al menos una de las condiciones 
let esPrime = false;
let descuentoExterno = true;
if (esPrime || descuentoExterno) {
    console.log("Califica para descuento.");
} else {
    console.log("No califica para descuento.")
}

//(!) NOT: Niega el valor de una condición.
let esDíaLibre = false;
if (!esDíaLibre){
    console.log("Se trabaja.");
} else {
    console.log("Es descansito.");
}

// = O P E R A D O R E S   D E   C A D E N A =
// toLowerCase hace el cambio de nuestro string a minísculas.
//toUpperCase hace el cambio del string a mayúsculas
let mensajeUsuario = "Bienvenido a la red."
let cambioMinus= mensajeUsuario.toLowerCase();
let cambioMayus= mensajeUsuario.toUpperCase();
console.log(`${mensajeUsuario} -> ${cambioMinus} -> ${cambioMayus}`);

//trim quita los espacios del inicio y el final del string, no los que hay enmedio.
let aviso = "         C H  3 5";
let sinEspacios = aviso.trim();
console.log(sinEspacios);

//toString convierte un tipo de dato number en string
let num9 = 31;
let cadenas = num9.toString();
console.log(typeof(cadenas));

//concat 
let nombre = "Braulio";
let apellido = "Santiago";
let nombreCompleto = nombre.concat(" ", apellido);
console.log(nombreCompleto);

// = E X P R E S I O N E S =
/*
 -Expresión aritmética: combinación de operaciones aritmenticas en una sola línea.
 -Expresión de cadena: suma/concatena de dos strings.
 -Expresión lógica: combinación de operaciones lógicas.
*/

