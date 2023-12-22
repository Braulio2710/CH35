# Crear y publlicar un nuevo paquete de npm

##Creación de paquete
1.Iniciarliar npm desde CLI con el comando 
```sh
npm init 
```
Me guiará a través de una serie de pasos donde me solicite información relacionada con mi package, como el nombre, la versión, la descripción, el punto de entrada  `index.js`, comando de prueba, repositorio de git en donde vive, palabras clave para coincidir con búsquedas, autor, licencia,
2. Presionar enter para confirmar que la info es correcta y generar el archivo `package.js`
> - package.json
    - Contiene info sobre el proyecto-módulo que vamos a crear. Son un estándar de nodejs para facilitar la estructura y ejecución dentro del entorno de ejecución y de esta manera porder compartirlo a través del sitio (https://www.npmjs.com)
    - La información se estructura como objeto de JS con notación JSON. (Sólo con notación JSON los servidores entienden lo que les estamos mandando, la traduce de JS  lenguaje servidor).
3. Creaer una carpeta llamada `modules` en donde vivirá nuestro script.
4. Dentro de `modules` crear el script (.js) con el nombre `parimpar.js`
5. Creal la función del script y exportarlo con `export default`
6. Importar el script desde el archivo `index.js` con `import + function + from + ruta con extensión` e invocamos la función con parámetros.
```javascript
import determinarParImpar from "./modules/parimpar.js";
```
7. Configurar el `"type": "module"` en el archivo `package.json`
8. Ejecutamos el programa desde el entorno de nodejs con el comando
```sh
node index.js
```

## Publicar package en npm

1. Iniciar sesión de npm pero ahora desde CLI con el comando
```sh
npm login
```
2. Esperamos que cargue y presionamos enter para abrir el navegador
3. Recibiremos un correo con un password de una sola vez, lo agregamos y presionamos Login
4. Regresamos a la terminal y nos mostrará el mensaje `Logged in on https://registry.npmjs.org/.`
5. Publicar el package con acceso público desde CLI a npm con el comando 
```sh
npm publish --access=public
```
.