import Gallery from "../components/Gallery"
import Button from '../components/Button';

export default function Home() {
    return (
        <div className="home-section">
            <div className="scroll" name="home"/>
            <div className="home-container">
                <div className="home-left">
                    <div className="home-welcome">
                        <h2 className="home__title">Gimnasio Tachankos</h2>
                        <h3 className="home__subtitle">Un gimnasio para vos</h3>
                        <p className="home__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dignissimos molestiae dolores nesciunt! Amet inventore quia, autem nostrum, corporis veniam doloremque, voluptas aperiam officia quaerat placeat officiis ex atque. Ex.</p>
                        <Button text={"Ver planes disponibles"}></Button>
                    </div>
                </div>
            <div className="home-right">
                <Gallery/>
            </div>
        </div>
    </div>
    )
}