import { Link } from 'react-scroll'

export default function Navbar() {
    return (
        <section className="navbar-section">
            <div className="navbar-container">
                <nav className="navbar">
                    <ul className="navbar-list">
                        <Link activeClass="active" className="navbar-list__link" to="home" spy={true} isDynamic={true} smooth={true} duration={500}>
                            <li className="navbar-list__item">Inicio</li>
                        </Link>
                        <Link activeClass="active" className="navbar-list__link" to="about" spy={true} isDynamic={true} smooth={true} duration={500}>
                            <li className="navbar-list__item">Quienes somos</li>
                        </Link>
                        <Link activeClass="active" className="navbar-list__link" to="plans" spy={true} isDynamic={true} smooth={true} duration={500}>
                            <li className="navbar-list__item">Planes</li>
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