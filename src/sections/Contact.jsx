export default function Contact() {
  return (
    <div className="contact-section">
        <div className="scroll" name="contact"/>
        <div className="contact-container">
            <div className="contact-header">
                <h2 className="contact-header__title">Comunicate con nosotros</h2>
            </div>
            <div className="contact-body">
                <div className="contact-socialmedia">
                    <ul className="contact-socialmedia-list">
                        <li className="contact-socialmedia__item">
                            <a className="contact-socialmedia__link" href="https://www.facebook.com/parches.com.ar/" target="_blank">
                                <i className="contact-socialmedia__icon fa-brands fa-facebook"/>      
                            </a>
                            <h3 className="contact-socialmedia__name">Pachankos.only</h3>
                        </li>
                        <li className="contact-socialmedia__item">
                            <a className="contact-socialmedia__link" href="https://www.instagram.com/parches.com.ar/" target="_blank">
                              <i className="contact-socialmedia__icon fa-brands fa-instagram"/>
                            </a>
                            <h3 className="contact-socialmedia__name">Pachankos</h3>
                        </li>
                        <li className="contact-socialmedia__item">
                            <a className="contact-socialmedia__link" href="https://www.instagram.com/parches.com.ar/" target="_blank">
                              <i className="contact-socialmedia__icon fa-brands fa-whatsapp"/>
                            </a>
                            <h3 className="contact-socialmedia__name">+54 9 11 6593 4534</h3>
                        </li>
                    </ul>
                </div>
                <div className="contact-map">
                    <iframe
                        className="contact-map__iframe"
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.907907907907!2d-58.38590988472409!3d-34.6089769849909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sCalle+Rivadavia+1150%2C+C1073AAW+CABA!5e0!3m2!1ses-419!2sar!4v1559098180111!5m2!1ses-419!2sar"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
                <div className="contact-form">
                    <form action="" method="POST">
                        <div className="contact-form-container">
                            <label htmlFor="email" className="contact-form__label">Email</label>
                            <input type="email" name="email" id="email" className="contact-form__input"/>
                        </div>
                        <div className="contact-form-container">
                            <label htmlFor="name" className="contact-form__label">Nombre</label>
                            <input type="text" name="name" id="name" className="contact-form__input"/>
                        </div>
                        <div className="contact-form-container">
                            <label htmlFor="message" className="contact-form__label">Mensaje</label>
                            <textarea name="message" id="message" className="contact-form__input"></textarea>
                        </div>
                        <div className="contact-form-container">
                            <input type="submit" value="Enviar" className="parches-btn"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
