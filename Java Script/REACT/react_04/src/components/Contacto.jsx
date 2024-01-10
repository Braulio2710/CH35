import { Link } from "react-router-dom"

const Contacto = () => {
    return (
        <>
        <div>
            <h1>Esta es la página de Contacto</h1>
            <Link to = "/">
                Regrasar a la página de Inicio
            </Link>
            <br />
            <br />
            <Link to = "/nosotros">
                Ir a la página de Sobre Nosotros
            </Link>
        </div>
        </>
    )
}

export default Contacto