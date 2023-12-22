/**
 * Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para incializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no.
 * Atributos:
 * nombre
 * calificacion
 * 
 * Metodos 
 * imprimirCalificacion
 * evaluacion
 * 
 * la calificacion aprobatoria es de 6
 * if para evaluar la calificacion
 */




class Alumno { // Definición de la clase Alumno
    nombre = ""; // Atributo para almacenar el nombre del alumno
    calificacion = 0; // Atributo para almacenar la calificación del alumno

    constructor(nombre, calificacion) { // Constructor de la clase, inicializa el objeto Alumno con nombre y calificación
        this.nombre = nombre; // Asigna el nombre proporcionado al atributo nombre
        this.calificacion = calificacion; // Asigna la calificación proporcionada al atributo calificacion
    }

    imprimirCalificacion() { // Método para imprimir la calificación del alumno
        console.log(`${this.nombre} tiene una calificación de ${this.calificacion}`);
    }

    evaluacion() { // Método para evaluar si el alumno aprobó o no
        if (this.calificacion >= 6) { // Condición: Si la calificación es mayor o igual a 6
            console.log(`${this.nombre} ha aprobado.`);
        } else {
            console.log(`${this.nombre} no ha aprobado.`);
        }
    }
}

// Crear instancias (objetos) de la clase Alumno
const alumno1 = new Alumno("Ximena", 5); // Instanciar un objeto con nombre "Ximena" y calificación 5
const alumno2 = new Alumno("Diego", 10); // Instanciar un objeto con nombre "Diego" y calificación 10

// Utilizar los métodos de la clase Alumno para imprimir la calificación y la evaluación de cada alumno
alumno1.imprimirCalificacion(); // Llama al método para imprimir la calificación del alumno1
alumno1.evaluacion(); // Llama al método para evaluar y mostrar si el alumno1 aprobó o no

alumno2.imprimirCalificacion(); // Llama al método para imprimir la calificación del alumno2
alumno2.evaluacion(); // Llama al método para evaluar y mostrar si el alumno2 aprobó o no

