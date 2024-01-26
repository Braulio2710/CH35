// Tenemos un array de productos
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/zapato-rojo.jpg" }
];

// Obtén el elemento de lista de productos y el input
const listaDeProductos = document.getElementById("lista-de-productos");
const inputFiltro = document.getElementById('filtroInput'); // Corregido: Cambiado a getElementById

// Función para mostrar los productos en la lista
function displayProductos(productos) {
  productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    const parrafoTitulo = document.createElement("p");
    parrafoTitulo.classList.add("titulo");
    parrafoTitulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    divProducto.appendChild(parrafoTitulo);
    divProducto.appendChild(imagen);

    listaDeProductos.appendChild(divProducto);
  });
}

// Mostrar todos los productos al cargar la página
displayProductos(productos);

// Obtén el botón de filtro
const botonDeFiltro = document.querySelector("button");

// Evento de clic en el botón de filtro
botonDeFiltro.onclick = function () {
  // Elimina todos los productos actuales en la lista
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }

  // Obtén el texto del input
  const textoFiltro = inputFiltro.value;

  // Filtra los productos y muestra los resultados
  const productosFiltrados = filtrado(productos, textoFiltro);
  displayProductos(productosFiltrados);
};

// Función de filtrado
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};