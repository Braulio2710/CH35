import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio'
import Nosotros from './components/SobreNosotros'
import Contacto from './components/Contacto'

// - Routes: actúa como contenedor padre de todas las turaas individuales que se crearán en la aplicación.
/* - Route: Es la ruta 'hija' de cada componente. Route recibe dos atributos
    1. path: especifica la ruta (url) a seguir
    2. element: especifica el componente que se rederiza
*/

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element= {<Inicio/>}/>
      <Route path='nosotros' element= {<Nosotros/>}/>
      <Route path='contacto' element= {<Contacto/>}/>
    </Routes>
    </>
  )
}

export default App
