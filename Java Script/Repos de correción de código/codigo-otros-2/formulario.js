//Inicialización de variable formulario
var formulario = document.querySelector(".formulario"); //se coloca ".formulario" en vez de "#form"

formulario.onsubmit = function (e) {
  e.preventDefault(); //Se agrega "Default" para prevenir la recarga de la pág al enviar el formulario

  //Se agregan elementos del formulario
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  //Se comprueba en la consola que haya elementos almecenados en nombre, edad y nacionalidad
  console.log(nombre, edad);
  console.log(nacionalidad);

  //Delimitación de datos de entrada
  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  if (nombre.length > 0 && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

//Definición de función para agregar invitado
function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  //Se traen los datos que ingresó el usuario en el formulario
  var lista = document.getElementById("lista-de-invitados");

  //Se crea contenedor para la lista de invitados
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); //Se escribe "add" en vez de "added"
  lista.appendChild(elementoLista);

  //Función para crear elementos
  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  //Uso de función para crear elementos con los datos almacenados en las variables
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  //Boton de reinicio de lista
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  //Uso del boton borrar al dar click
  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
}
