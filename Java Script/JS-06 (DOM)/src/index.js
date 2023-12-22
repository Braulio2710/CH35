/*
Manipulación del DOM
- Leer y traer ndoos del árbol DOM
    document.getElementById (trae elementos por su ID)
    Ddocument.getElementsByClassName (los trae según su clase)
    document.getEementsByTagName (los trae según su Etiqueta)
*/

//getElementbyId
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText);//Traer un string que vivie en mi ID

//geElementsByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length); //Devuelve la lonigtud de elementos de la clase
console.log(typeof titulos); //Muestra que es un object porque es una colección de arrays

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/*Métodos para llamar elementos mediante selectores de CSS
Se usa para procesos más específicos y la sintaxis querySelector
    -document.querySelector("selector"); //#, ., <>
    -document.querySelectorAll(); //Selecciona los elementos que se especifiquen
Siempre van a traer el primero elementos con el selector indicado
*/

//querySelector:
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass); // Sólo nos devuelve el primer elemento de esa clase

//querySelectorAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS:
titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de manipulación del DOM. CH35"
titulo2.style.color = "#F23D3D";

/*
Métodos para crear y agregar elementos en el DOM. Este proceso se divide en dos:
    -Crear nodos:
        * document.createElement("lista/imagen/texto/etc") --> Crea elementos a partir de etiquetas.
        * document.createTextNode("text") --> Crea texto dentro de las etiquetas.
*/
//Crear nodos:
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
    - Agregar nodos, mandamos a llamar el elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado.
        * parentElement.appendChild(const);
        * parentElement.append(const);
        * parentElement.insertBefore(const);
        * parentElement.insertAdjacentElement(const);
    Utilizaremos mayormente appendChild
*/
//Obtengo el elemento padre por tag, class, o id:
const parentElement = document.getElementById("dif");
//Crear el texto que vivirá en el nodo1:
const textNodo1 = document.createTextNode("Imagen agregada desde el DOM");
//Ya existe en nodo1 que es un h4 y el texto que vivirá dentro dél ahora inserto el texto en el nodo 1
nodo1.appendChild(textNodo1);
//Insertar nodos en el elemento padre:
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "brown";

/*Agregado de imagen */
//Inserto el imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);
//Accedo a las propiedades de la imagen
imgNodo.src = "../src/assets/octocat.jpg"
imgNodo.alt = "Octocat-GitHub";
imgNodo.width = "300";

/* Otra forma de leer y modificar nodos
    document.outerHTML (leer)
    node.innerHTML (escribir sobre el nodo)
*/
const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulación del DOM CH35";
