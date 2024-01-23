//Definición de variables
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //faltaba el punto antes de name para referenciar el id .name de la API
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

//Definición de función asíncrona para mostrar texto "cargando mientras se accede a la API"
async function displayUser(username) {//Se agrega asyn antes de function marca un error en el await de linea 9. Se tiene que gregar la palabra reservada async antes de la función en la linea 7, debido a que las funciones await solo se permiten en funciones asíncronas. 
  $n.textContent = 'cargando...';
  const data = await fetch(`${usersEndpoint}/${username}`); //ADEMAS se cambia la const "response" por "data"
  console.log(data);
  $n.textContent = `${data.name}`;//Se cambian '' por `` en lineas 11~14
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // en linea 3 esta definida como "$n", faltaba agregar el "$"
}

displayUser('stolinski').catch(handleError);