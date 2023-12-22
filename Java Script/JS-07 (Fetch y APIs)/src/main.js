//Programación síncrona
/*
function two () {
    console.log("Dos");
}

function one () {
    console.log("Uno");
    two();
    console.log("Tres");
}

one();

//Aunque escribí primero la función two, no la invoqué. No se ejecutará hasta que en la línea 12 invoco a la función one, en la que está el contenido para que en consola aparezca en orden: Uno, Dos, Tres.

/*Programación asíncrona
.setTimeout que recibe una función anónima y establece un tiempo (en milisegundos) de ejecución para cumplir con la condición de asincronismo.
*/
/*
console.log("--------------------------------")
const twoAsync = () => {
    setTimeout( () => {
        console.log("Dos Async");
    }, 5000);
}
const oneAsync = () => {
    setTimeout(function() {
        console.log("Uno Async");
    }, 2000);
    
    twoAsync();
    console.log("Tres Async");
}
oneAsync();
*/

/*
=Trabajando con promesas medainte Fetch API=
*/
const url = "https://jsonplaceholder.typicode.com/users";

//Usando Fetch
fetch(url) //pongo la contante url, o bien podría poner un string con la dirección.
    //Si se cumple la promesa, vamos a traer los datos de la API y se convertirán en tipo json para poder mostrarlos en consola
    .then(data => data.json())
    .then(data => {
        console.log(data); //Mostrando en consola todos los usuaruos de la API.
        console.log(data[0]); //Mostrando en consola solo el usuario con el índice [0] de la API y trayendo sólo su nombre
    })
    .catch(error => console.error("¡Ups!, algo salió mal", error)); // Mensaje de error

// - Usando fetch para mostrar en navegador
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//Variable para guardar la información que se traerá desde la API. Debe ser de tipo null:
let post = null;

//Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/6") //Link de la API desde la que traeremos los datos
        .then(response => response.json())
        .then(response => {
            post = response; //Guardo los datos de response en la variable
            //Mandamos a llamar la variable desde la función (pero, esa no la hemos hecho, hay que hacerla)
            mostrarDatos(post);
        })
        .catch(error => console.error("¡Problemas!", error));
});

//Función que me permita manipular la variable de tipo null
//Quiero traer name, username, email y phone del user de la API
const mostrarDatos = (post) =>{
    //Creando nodos/elementos mediante DOM Manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

//Usando fetch para mostrar los productos en el navegador
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
    fetch ("https://fakestoreapi.com/products") // Link de la API desde la que traeremos los datos
    .then (response => response.json())
    .then (response => {
        productos = response
        //Fucnión por definir
        mostrarProductos(productos);
    })
    .catch(error => console.log("¡Cuidado!", error))
})

//Funció para crear , agregar y mostrar elementos desde el DOM
const mostrarProductos = (productos) => {
    //Mando a lamar las llaves title, price, description, category e image desde la API
    productos.map((productos) => { // //El método map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach.
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    //Cuando tienes un arreglo le puedes meter un ciclo for para que te muestre cada elemento (en vez de que diga solo array y se vea todo feo). Entonces el map te ahorra hacer ese ciclo y te muestra los elementos ordenados
        const imagen = document.createElement("img");
        const título = document.createElement("h2");
        const precio = document.createElement("h3");
        const descripción = document.createElement("p");
        const categoría = document.createElement("p");
        const separador = document.createElement("hr");

        //Enviar a HTML con innerHTML
        imagen.src = productos.image; //para imagen no aplica innerHTML, se usa source para la inserción de la imagen
        imagen.width = 200;
        título.innerHTML = productos.title;
        precio.innerHTML = productos.price;
        descripción.innerHTML = productos.description;
        categoría.innerHTML = productos.category;

        //Mostrarlos en navegador al agregarlos al padre
        tienda.appendChild(imagen);
        tienda.appendChild(título);
        tienda.appendChild(precio);
        tienda.appendChild(descripción);
        tienda.appendChild(categoría);
        tienda.appendChild(separador);
    })
}

//Método POST utilizando fetch: me permite crear recursos en la API, por ejemplo cuando nos registramos en una ecomerce o red social y se van guardando neustros datos
fetch("https://jsonplaceholder.typicode.com/posts", {
    //Indicar que es un método de tipo POST
    method: "POST", 
    //Creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente: userid, title, body.
    body: JSON.stringify({
        userID: 1984, //la variable se llamaría userId
        title: "1984", //se llamará book
        body: "Author: George Orwell" //se llamará author
    }),
    //Definir headers:
    headers: {
        "Content-type": "application/json; chastset=UTG-8"
    }
}) //Fin del fetch

    //Inicio de promesas
    .then(response => response.json())
    .then(response => {
    console.log(response)
    })


//En el proyecto integrador usaremos fetch porque vamos a correr un proceso a la vez y pocos usuarios, pero si fueran muchos procesos sumultaneamente y varios usuario tendrían que ser programación ASÍNCRONA:


/* ======= Pogramación ASÍNCRONA ========== */
//Función flecha de tupo async-await
//Primero indico que es un función asíncrona con la palabra reservada async antes de los parámentros de la función.
const getUser = async () => {
    //Para que se cumpla la promesa, no utilizamos then, sino que usamos try.
    //Para errores se sigue usando catch
    try {
        //Retardo para que se ejecute de manera asíncrona. Tengo que crear una nueva promesa, que recibe un setTimeOut
        await new Promise(resolve => setTimeout(resolve, 3000));

        //Mi promesa que se ejecuta
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4"); //(Esta constante sí utiliza fetch en lugar de then)
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Ocurrió un error", error);
    }
}
//Invocar la función
getUser();

/* ============= LocalStorage ============ */
//NOTA: En la presentación 2 del proyecto (cuando todavía no haya backend) almacenaremos los datos de registro de usuario en un localStorage. Necesitamos usar el get, localstorage y post
//Nos permite crear, modificar, eliminar y guardar objetos de JS de manera local
//Crear un objeto de JS con sus llaves y valores
const user = [
    {
        id: 1,
        nombre: "Braulio",
        email: "braulio.generation@gmail.com",
        posición: "Estudiante",
        empresa: "Generation"
    },
    {
        id: 2,
        nombre: "Braulio",
        email: "brauliosaes@gmail.com",
        posición: "Java FullStack Dev. Jr.",
        empresa: "Adient"
    }
];
//Convertir el objeto user a notación JSON y almacenarlo en el localStorage
localStorage.setItem("usuario",JSON.stringify(user));

//Traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${user[1].nombre}, ${user[1].posición}, ${user[1].empresa}`);

//sessionStorage
