/*
Para manipular la información de un usuario necesito crear un perfil meddiante un objeto de JS.
*/
const user = {
    username: 'Braulio2710',
    age: 27,
    email: 'braulio.generation@gmail.com',
    favfilms: ['Ready Player One', 'Interestelar', 'Cars', 'HTTYD 3', 'Shrek 2']
}

//Crear un perfil que me permita ingresar el objeto del perfil en el nodo padre
const createUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    /* Para mostrar elementos de lista en forma de lista:
    Para mostrar el array en forma de lista utilizamos un ciclo forEach, para recorrer todo el array y traer cada elemento a la lista   */
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film => {
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
        
    });
    //Modificando estilos de la ul para quitar las viñetas
    ul.style.listStyleType = "none"
    ul.style.padding = "0";
    ul.style.color = "#D9B70D"

    //Mostrando elementos de lista en forma de fila (no nos sirve porque definimos una lista desordenada 'ul' en el html y no un párrafo)
    //document.getElementById("fav-films").textContent = user.favfilms;
}

//Invocando la función
createUser(user);

/* Eventos para actualizar el username mediante el input y el botón
*/
const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value; 
})