import './Navbar.css'
import IssLogo from '../assets/ISS_logo.svg'
const Navbar = () => {
    const url1 = 'https://www.nasa.gov/international-space-station/'
    const url2 = 'https://www.nasa.gov/mission/apollo-13/'
    const url3 = 'http://open-notify.org/Open-Notify-API/People-In-Space/'

    return (
        <> {/*Fragmento (el comentario debe ser multilínea y estar encerrado entre llaves)*/}
        <div className='navbar--container'> {/*Las clases en react son className en lugar de sólo class */}
            <div className='navbar--title'>
                <a href={url1} target='_blank' id='link--logo'>
                    <img src={IssLogo} alt="" />
                </a>
            </div>
            <div className='navbar--links'>
                <div className='navbar--link'>
                    <a href={url1} target='_blank'>Home</a>
                </div>
                <div className='navbar--link'>
                    <a href={url2} target='_blank'>Apollo 13</a>
                </div>
                <div className='navbar--link'>
                    <a href={url3} target='_blank'>Astros </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;