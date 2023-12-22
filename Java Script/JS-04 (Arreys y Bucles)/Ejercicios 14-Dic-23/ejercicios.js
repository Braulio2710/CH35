//EJERCICIOS
//==Ejercicio de Arrays==

/*
EJERCICIO 1:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];

*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/
console.log("=EJERCICIOS DE ARRAYS Y BUCLES=");
console.log("1. Pasar °C a °F");
const tempsCelsius = [22, 25, 19, 30, 27, 21, 18];
const tempsFahrenheit = [];

const calcFahrenheit = (number) => {
    return (number * 9/5) + 32;
}
//Cambiar los index por su valor en °F
console.log(`Temps en °C: ${tempsCelsius}`);

for (let i =0; i<tempsCelsius.length; i++){
    tempsFahrenheit[i] = calcFahrenheit(tempsCelsius[i]);
}
console.log(`Temps en °F: ${tempsFahrenheit}`);



/*
-Ejercicios de Bucles:
EJERCICIO 2:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/
console.log("2. Sumar los núms del 1 al 10:")
let suma = 0;
const sucesiónDeSuma = [];
for (let i = 1; i <= 10; i++){
    suma += i; // usar += es un atajo de "sum = sum + i"

    //console.log(suma); // si se coloca dentro del for muestra en consola cada suma que va haciendo como una variable separada.
    sucesiónDeSuma[i-1] = suma;
}
console.log(`La secuencia de la suma es: ${sucesiónDeSuma}`); //muestra en la consola la secuencia de la suma como un arrey
console.log(`La suma total es: ${suma}`);//muestra en consola sólo la suma final

/*
EJERCICIO 3
 Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/

console.log("3. Definir si es núm. primo o no");
núm = prompt("Ingresa un número para comprobar si es primo:")
function primo(núm) {
    if (núm <= 1) { //porque 1 sólo es divisible por sí mismo.
    return false;
    }
    // Comprobar si el número es divisible por algún número menor que él mismo
    for (let i = 2; i < núm; i++){
        if (núm % i === 0){
            return false;
        }
    } return true;
}
if (primo(núm) === true){
    console.log(`El número ${núm} es primo.`);
} else {
    console.log(`El número ${núm} NO es primo.`)
}

/*
*Ejercicio 4: Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).

Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/

console.log("4. Calcular los primeros 10 términos de la sucesión de Fibonacci:")
const sucesiónFibonacci = [];
//función para calcular secuencia Fibonacci
const calcFibonacci = (n) => {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else if (n >= 2){
        return sucesiónFibonacci[n-1] + sucesiónFibonacci[n-2];
    }
    
}
//Aplicar la función calcFibonacci a cada index de sucNormal y sumarla con la del mismo index de sucFibo
for (let i=0; i < 10; i++){
    sucesiónFibonacci [i] = calcFibonacci(i);
}
console.log(`${sucesiónFibonacci}`);
//console.log(sucesiónFibonacci);
