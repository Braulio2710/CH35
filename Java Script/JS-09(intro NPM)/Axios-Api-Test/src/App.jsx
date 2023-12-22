import './App.css'
import axios from 'axios'

function App() {

  //Función async-await para consumir API
  const getUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users"); //Podemos quitar el último "/3" y nos devuelve en consola todos los usuarios, podemos poner "/n" para sólo mostrar los datos del usuario n
      console.log(response);
      console.log(response.data[1].name); //Output: "Ervin Howell"
    } catch (error) {
      console.log("¡Peligro!", error);
    }
  }

  //Función async-await para enviar un usuario
  const postUser = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const user = {
        userId: 1996,
        title: "Java Fullstack Dev",
        body: "Braulio Santiago"
      }
      const response = await axios.post(url, user);
      console.log(response);
      // para mostrar solamente la informacion en consola 
      console.log(response.data);
    } catch (error) {
      console.log("Cuidado", error);
    }
  }
  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUsers}>
          Get Method
        </button>
        <button onClick={postUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
