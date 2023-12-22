/* 
======Paradigamas de programación=========
- Programación imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada.

-Programación basada en eventos: De acuerdo a los eventos que se presenten en la interfáz como clicks, scrolls, cambio de tamaño de display, etc.

-Programación declarativa: Se dice qué queremos obtener y cómo lo vamos a obtener.

-Programación orienta a objetos: En el mundo de la programación, la POO es un paradigma que ha ganado una gran popularidad en los últimos años debido a su capacidad para crear aplicaciones más robustas, flexibles y fáciles de mantener. Esta metodología de desarrollo se basa en la idea de que los programas se pueden organizar como una colección de objetos interconectados, cada uno con su propio conjunto de datos y funcionalidades. (https://profile.es/blog/que-es-la-programacion-orientada-a-objetos/)

Se basa en el concepto de clases y objetos. Este tipo de programación se utiliza para estructurar un programa de software en piezas simples y reutilizables de planos de código (clases) para crear instancias individuales de objetos.
*/

//Clases: Plantillas para crear objetos.  Define de manera genérica cómo van a ser los objetos de un determinado tipo. Deben ir de los más general a lo más específico.

class persona {
    nombre = "Braulio"
    apellido = "Santiago"
    edad = 0
    email = "braulio.generation@gmail.com"
    teléfono = "3411631967"

    //Objetos
    //El constructor es una función especial, cuya finalidad es la de contruir o instanciar objetos.
    //Para inicializar un objeto es necesario definir un constructor que tomará los atributos
    //clase: molde, objeto: gomita, contructor: chefsito, atributo: ingredientes, métodos: comportamientos/acciones.
    constructor(nombre, apellido, edad, email, teléfono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.teléfono = teléfono;
    }

    comer() {
        console.log("Bon appetite");
    }//método comer

    bailar() {
        console.log("Dale hasta el suelo");
    }//método bailar

    leer() {
        console.log("Ponte a leer.")
    }

    mostrarInfo() {
        console.log("Nombre:", this.nombre);
        console.log("Apellido:", this.apellido);
        console.log("Edad:", this.edad);
        console.log("Email:", this.email);
        console.log("Teléfono:", this.teléfono);
    }
}

let usuario1 = new persona("Braulio", "Santiago", 27, "braulio@gmail.com", "5578945612");
let usuario2 = new persona("Eveida", "Palos", 21, "eveida@gmail.com", "1234567891");
let usuario3 = new persona("Ania", "Eslava", 22, "ania@gmial.com", "1594872630");
let usuario4 = new persona("Fer", "Carmona", 23, "carmona@gmail.com", "45612397810");
let usuario5 = new persona("Pedro", "Roldán", 24, "cesar@gmail.com", "8945612307");

console.log(usuario1); //Imprime el objteto completo
console.log(usuario4.email); //Imprime un atributo específico del objeto
usuario4.comer();//como el método comer ya tiene dentro un console.log, sólo al invocarlo se imprime en la consola.
usuario1.bailar();
usuario2.leer();
usuario1.mostrarInfo();


//Los 4 pilares de la POO.
/*
1. Herencia: nos permite heredar a clases inferiores para optimizar el programa
2. Polimorfismo
3. Encapsulamiento
4. Abstracción
*/

class arrendador extends persona { //arrendador es una subclase de persona por tener la palabra extends
    capacidad = 0;
    costo = 0;
    lugar = "";

    constructor(nombre, apellido, edad, email, teléfono, capacidad, costo, lugar) {
        super(nombre, apellido, edad, email, teléfono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.lugar = lugar;
    }

    /*class arrendadorGdl extends arrendador { //arrendadorGdl es subclase de la subclase arrendador
    }*/

    mostrarInfo() {
        console.log("Capacidad:", this.capacidad);
        console.log("Costo:", this.costo);
        console.log("Lugar:", this.lugar);
    }
}

let arrendador1 = new arrendador("Rocío", "Hernández", 29, "rocio@gmail.com", "7849561230", 100, 50000, "Salón G");

console.log(arrendador1); //muestra todos los atributos, tanto los heredados de la clase Persona como los esepcíficos de arrendador.
arrendador1.mostrarInfo(); //Sólo muestra los datos de la clase arrendador


/*
POLIMORFISMO: Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento. En este caso el método sonido()
*/

class Animal {
    sonido() {
        console.log('Hace un sonido genérico');
    }
}

class Perro extends Animal {
    sonido() {
        console.log('Guau guau');
    }
}

class Gato extends Animal {
    sonido() {
        console.log('Miau');
    }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido(); //el mismo método sonido(), para perro muestra "guau guau"
gato.sonido(); //el mismo método sonido(), para gato muestra "miau"

/*
ENCAPSULAMIENTO:
Se le llama encapsulamiento cuando la clase principal hereda los métodos de la clase padre, sin necesidad de saber cómo funcionan, sólo tiene que definir las cosas que desea cambiar.
*/

class person {
    name = "";
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }
}
class student extends person {
    subject = "";
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    study() {
        console.log(`${this.name} is studying ${this.subject}`);
    }
}
const studen1 = new student("Brand", "Web Development");
console.log(studen1);
studen1.walk();

//En el ejemplo anterior, student no tiene que saber cómo se aplica el método walk() de la clase person pero, puede utilizar ese método. La clase student no tiene que definir explícitamente ese método, a menos que se necesite cambiar.

/*
//https://mauriciogc.medium.com/javascript-poo-programaci%C3%B3n-basada-en-prototipos-1c174b28aba2
function Person(name) {
    this.name = name;
    this.walk = function () {
        console.log('I am walking');
    }
}
function Alumn(name, studying) {
    Person.call(this, name);
    this.studying = studying;
    this.presented = function () {
        return `Hello my name is ${this.name} and I am studying ${this.studying}`;
    }
};
Alumn.prototype = Object.create(Person.prototype);
Alumn.prototype.constructor = Alumn;
var estudiante1 = new Alumn('Mauricio García', 'Programación orientada a objetos');
console.log(estudiante1.walk()); // I am walking


//En el ejemplo anterior, Alumn no tiene que saber cómo se aplica el método walk() de la clase Person pero, puede utilizar ese método. La clase Alumn no tiene que definir explícitamente ese método, a menos que se necesite cambiar.
*/

/*
ABSTRACCIÓN:
Se refiere a poder tomar un objeto de la realidad y poderlo representar mediante una clase, el poder tomar ese objeto y el abstraer su comportamiento y sus propiedades para programáticamente poder crearlo y modificarlo.
*/



//==== OBJETOS JSON ===
//Los objetos de tipo Json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son más flexibles y generalmente se ejecuta con fetch.
//El tipo Json no es útil al usar métodos en Java.

let objetoJson = {
    "nombre": "Ricky",
    "apellido": "Riquín Canallín",
    "edad": 31,
    "email": "ricky@gnail.com",
    "telefono": "5574980693",

}
console.log(objetoJson); //(En consola, ambas variables se muestran igual, el tipo Json y el tipo Literal, la diferencia es en la manipulación de métodos en Java).
let objetoLiteral = {
    nombre: "Ricky",
    apellido: "Riquín Canallín",
    edad: 31,
    email: "ricky@gnail.com",
    telefono: "5574980693",

}
console.log(objetoLiteral);//(En consola se muestra igual que el tipo Json).


//===PRINCIPIOS SOLID ===
/*
1. Principio de Responsabilidad Única (Single Responsability Principle SRP).
Una clase debe tener asignada una tarea o resposabilidad específica y esta no debería de cambiar.

2. Principio abierto/cerrado (Open/closed principle OCP).
Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma.

3. Principio de sustitución de Liskop (lISKOV Sustitution Principle LSP).
Una clase hijo puede sustituir objetos hacia una clase padre.

4. Principio de segregación de interfaces (Interfaces Segregation Principle ISP).
Delimitar los métodos que necesito y eliminar los innecesarios

5. Principio de inversión de dependencia (Dependency Inversion Principle DIP).

*/


//Ejercicio: Programa que conste de una clase llamada alumno, que tenga como atributos: nombre y calificación. Definir los métodos para inicializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatoria o no.
class alumno {
    nombre = "";
    calificación = 0;
    constructor(nombre, calificación) {
        this.nombre = nombre;
        this.calificación = calificación;
    }
    evaluar() {
        if (this.calificación >= 6) {
            console.log(`El alumno ${this.nombre} obtuvo ${this.calificación}, la cual es una calificación aprobatoria`);
        } else {
            console.log(`El alumno ${this.nombre} obtuvo ${this.calificación}, la cual es una calificación reprobatoria`);
        }
    }
}
const alumno1 = new alumno("Masiosare", 5.9);
alumno1.evaluar();
const alumno2 = new alumno("Pedro", 8);
alumno2.evaluar();