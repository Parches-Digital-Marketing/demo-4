import image from '../assets/image9.jpg';

export default function AboutUs() {
    return (
        <div className="about-section">
            <div className="scroll" name="about"/>
            <div className="about-container">
                <div className="about-left">
                    <div className="about-cover" style={{ backgroundImage: `url(${image})` }} />
                </div>
            <div className="about-right">
                <div className="about-info">
                    <h2 className="about__title">¿Quienes somos?</h2>
                    <h3 className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sit! Eaque architecto quam officiis ut tenetur itaque, alias exercitationem in veritatis culpa distinctio voluptatum animi iure autem ullam facere libero.</h3>
                    <h3 className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sit! Eaque architecto quam officiis ut tenetur itaque, alias exercitationem in veritatis culpa distinctio voluptatum animi iure autem ullam facere libero.</h3>
                </div>
            </div>
        </div>
    </div>
    )
}