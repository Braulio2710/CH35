console.log("Hola, CH35");

/*
Control de flujo y estructura de control

Las estructuras de control son un componente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos porporcionan para escribir y depurar código, podemos mencionar las siguientes:

- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
*/

/*
DECLARACIÓN de sentencia IF-ELSE
Para comenzar la declaración se coloca con paréntesis donde se debe colocar una expresión  lógica: (true/false), se abre y cierran llaves {} para indicar qué sentencia va a ejecutar si la condición se cumple (true), desués de la llave declarada para el bloque de ejecución if, colocamos la palabra reservada "else".
Para este ejemplo no es necesario colocar más expresiones. Símplemente colocamos otras llaves {} para indicar el bloque de código que tiene que ser ejecutado en caso de que la condición no se cumpla (false).
*/
/* let n = 15;
if (n > 10){
    console.log(true);
} else {
    console.log(false);
} */

/*
IF-ELSE-IF
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
 */

//if anidados
/* let edad = 27;
if (edad < 18 ) {
    console.log('Eres menor de edad, seguramente no jugaste Gears 3.');
} else if (edad >= 18 && edad < 65){
    console.log("Pase usted. Al menos una vez debiste haber jugado Gears 3.");
} else {
    console.log("Eres un adulto mayor, no te tocó ni el Halo 1.");
}*/

/* Sentencia SWITCH
Es otro tipo de estructura de control de flujo que, nuevamente, se encuentra en diversos lenguajes de programación.

Es bastante parecida a la sentencia if-else pero esta sentencia no se basa en una bifurcación sino que se secciona en múltiples casos (cases) que, dependiendo de la expresión que cumpla con un caso específico, será nuestra secuencia que se va a ejecutar dentro de nuestra declaración.

Declaración:
-Se empieza por colocar la palabra reservada "switch", seguida de un paréntesis donde se debe colocar el valor que va a indicar qué sentencia/caso se ejecutará.
-Indicar el bloque de código que se limita a esta sentencia, como lo hacemos en la sentencia "if" o con las funciones.

Dentro de este bloque de códgo, falta colocar las cosas para cada valor que se desee establecer según sea el valor indicado dentro del paréntesis.
Cada uno de estos casos se separa de la siguiente manera:
1. case valor :  instrucción a ejecutar si el valor empata con este caso.
2. Para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla un empete, se coloca la intrucción "break"
3. AL terminar de establecer los casos que necesitemos declara dentro de nuestar sentencia, debemos colocar un valor por defecto (default) para que sea la sentencia que se ejecute si no hay empate con ninguno de los casos declarados. 
Por ejemplo: default: mensaje no disponible.
*/
/* let día = "martes";
switch (día){
    case "lunes" :
        console.log("Odio lo´ lune´");
        break;
    case "martes":
        console.log("Odio lo´ marte´");
        break;
    case "miércoles":
        console.log("Odio lo´ miércole´.");
        break;
    case "jueves":
        console.log("Odio lo´ jueve´");
        break;
    case "viernes":
        console.log("Odio lo´ vierne´");
        break;
    case "sábado":
        console.log("Amo lo´ sábado´");
        break;
    case "domingo":
        console.log("Odio lo´ domingo´");
        break;
    default:
        console.log("Seguramente lo escribiste mal, escríbelo con minúsculas y usa las tildes, por el amor de Dios.");
} //termina switch */


/*
=OPERADOR TERNARIO=
Expresión condicional if-else más simple y legible
Principalmente se usa para simplificar condiciones de una sola expresión.
También puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el código se puede volver confuso y poco legible.

la estructura es: 
1. Palabra reservada var, let o const:
2. Se le asigna un nombre como si se tratara de una variable, operador de asignación "=", seguido de una expresión lógica, esta va dentro de paréntesis, después se coloca un caracter "?" que indica el camino a seguir, dependiendo de si se cumple o no la expresión.
3. Para separar el resultado true del false agregamos un caracter ":". Del lado izquierdo se coloca la sentencia a ejecutar en caso true y del lado derecho se coloca la sentencia a ejecutar si es false.
*/

//Ejemplo de operador ternario:
/* let verificación = n > 10 ? "Sí es mayor" : "No es mayor";
console.log(verificación); */

/*
=IF-ELSE-IF vs SWITCH=
Cuándo usar if-else-if y cuándo switch
1. if-else: cuando necesitemos tomar decisiones bajo condiciones más flexibles.
2. switch: cuando tengamos un conjunto fijo de valores para comparar con una expresión.

*/


//EJERCICIOS:
// Ejercicios para esta sesion

/* Ejercicio 1
 Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
 console.log("Ejercicio 1:")
 let edad = 27;
 if (edad < 18){
    console.log("Eres menor de edad, no puedes votar.");
 } else {
    console.log("Si traes tu INE pasa a tu casilla para votar.");
 }

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function divisible(number) {
    
    if (number % 7 === 0 && number % 8 === 0) {
        return true;
    } else {
        return false;
    }
}
// la operación % 7 devuelve la cantidad de unidades que rebasan el número 7, para 8 sería 1, para 9 sería 2.
console.log("Ejercicio 2:")
console.log(divisible(14));
console.log(divisible(16)); 
console.log(divisible(25));

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function divisible(number) {
    
    if (number % 4 === 0 || number % 9 === 0) {
        return true;
    } else {
        return false;
    }
}
// la operación % 4 devuelve la cantidad de unidades que rebasan el número 4, para 5 sería 1, para 9 sería 2.
console.log("Ejercicio 3:")
console.log(divisible(14));
console.log(divisible(16)); 
console.log(divisible(25));
/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
console.log("Ejercicio 4:")
let géneroPeli = "acción";
switch (géneroPeli){
    case "acción" || "accion" || "Acción"|| "Accion":
        console.log("John Wick");
        break;
    case "drama" || "Drama":
        console.log("Orgullo y Prejuicio");
        break;
    case "comedia" || "Comedia":
        console.log("Paul");
        break;
    case "romance" || "Romance":
        console.log("Votos de amor");
        break;
    case "suspenso" || "Suspenso":
        console.log("Imparable");
        break;
    case "terror" && "Terror":
            console.log("El resplandor");
            break;
    default:
            console.log("Género no disponible o error ortigráfico. Usa minísculas y tildes.");
}

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
function accionCajero(opcion) {
    if (opcion === 1) {
        console.log("   Retirar dinero.");
    } else if (opcion === 2) {
        console.log("   Realizar transferencia.");
    } else if (opcion === 3) {
        console.log("   Realizar depósito.");
    } else if (opcion === 4) {
        console.log("   Realizar pago de servicios.");
    } else {
        console.log("   Opción no válida.");
    }
}
console.log("Ejercicio 5")
accionCajero(1);
accionCajero(2);
accionCajero(3);
accionCajero(4);

/*
//INTENTO DE EJERCICIO 5 DESDE HTML
// Obtener la referencia a la lista
var lista = document.getElementById("ATM-form");
 
// Obtener el índice de la opción que se ha seleccionado
var indiceSeleccionado = lista.selectedIndex;
// Con el índice y el array "options", obtener la opción seleccionada
var opcionSeleccionada = lista.options[indiceSeleccionado];
 
// Obtener el valor y el texto de la opción seleccionada
var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = opcionSeleccionada.value;
 
console.log("Opción seleccionada: " + textoSeleccionado + "\n Valor de la opción: " + valorSeleccionado);
*/

/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 */
console.log("Ejercicio 6:")
let MXN = 2000;
let Divisa = "JPY"
switch (Divisa){
    case "USD" :
        let USD = MXN * 0.058;
        console.log(MXN + " MXN equivalen a: " + USD + " USD.");
        break;
    case "EUR":
        let EUR = MXN * 0.054;
        console.log(MXN + " MXN equivalen a: " + EUR + " EUR.");
        break;
    case "JPY":
        let JPY = MXN * 8.40
        console.log(MXN + " MXN equivalen a: " + JPY + " JPY.");
        break;
    case "GBP":
        let GBP = MXN * 0.046
        console.log(MXN + " MXN equivalen a: " + GBP + " GBP.");
        break
    case "CHF":
        let GHF = MXN * 0.046
        console.log(MXN + " MXN equivalen a: " + GHF + " GHF.");
        break;
    default:
        console.log("Divisa no disponible.");
}