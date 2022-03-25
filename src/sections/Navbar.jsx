import { Link } from 'react-scroll'
import { useState } from 'react'

export default function Navbar() {
    const [hambu, setHambu] = useState(false)

    return (
        <section className="navbar-section">
            <div className="navbar-container">
                <nav className="navbar">
                    <button className='hambu' onClick={() => {console.log("asdasd"); setHambu(hambu ? false : true)}}>
                        <i className="fa-solid fa-bars"/>
                    </button>
                    <ul className={hambu ? "navbar-list active" : "navbar-list"} >
                        <Link activeClass="active" className="navbar-list__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}>
                            <li className="navbar-list__item">Inicio</li>
                        </Link>
                        <Link activeClass="active" className="navbar-list__link" to="about" spy={true} isDynamic={true} smooth={true} duration={500}>
                            <li className="navbar-list__item">Nosotros</li>
                        </Link>
                        <Link activeClass="active" className="navbar-list__link" to="services" spy={true} isDynamic={true} smooth={true} duration={500}>
                            <li className="navbar-list__item">Servicios</li>
                        </Link>
                        <Link activeClass="active" className="navbar-list__link" to="contact" spy={true} isDynamic={true} smooth={true} duration={500}>
                            <li className="navbar-list__item">Contacto</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </section>
    )
}