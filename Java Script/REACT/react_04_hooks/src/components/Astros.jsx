import './Astros.css'
import { useEffect, useState } from 'react';
import Astro from './Astro';

//Mandar a llamar la API, utilizando Hooks (useSatate y useEffect)

//Componente para agregar la infomracipon de la API Astros dentro de las cards
const Astros = () => {
    //Definir la URL de la API
    const ASTROS_URL = 'http://api.open-notify.org/astros.json'

    //Implementando useState:
    const [astros, setAstros] = useState([]);

    //Implementando useEffect:
    useEffect(()=>{
        fetchAstros(); //Hoisting de una función que voy a definir
    }, []);

    //Crear función fetch para conectarse a la API
    const fetchAstros = () => {
        fetch(ASTROS_URL)
            .then(response => response.json())
            .then(data => setAstros(data.people))//Para que la información viva dentro del componente actualizado, traigo setAstros y le paso los datos de `people` de la API
            .catch(error => console.error(error))
    }

    console.log(astros); //Vive en la consola del navegador

    //Enviar la información de la API a las cards utilizando .map sobre el array `astros`
    return (
        <>
            {
                //`astro` funciona como los elementos que se recorren en el array `astros` y .map recibe dicho elementos, más un index y una fucnión de tipo callback
                astros.map((astro, index) => (
                    //Exporto el componente Astro
                    //Crear una clave única para cada elemento del arrey (key)
                    //Desestructurar el array para que cada elemento reciba los props definidos dentro de Astro ({name, craft})
                    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
                    //https://www.freecodecamp.org/espanol/news/desestructuracion-de-arreglos-y-objetos-en-javascript/
                    <Astro key={index} {...astro} />
            ))
            }
        </>
    )
}

export default Astros