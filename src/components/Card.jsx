
export default function Card({title, description, image}) {
    return (
        <div className="card">
            <div className="card-header">
                <img className="card-header__image" src={image} alt="service"/>
                <h3 className="card-header__title">{title}</h3>
            </div>
            <div className="card-body">
                <p className="card-body-description">{description}</p>
            </div>
        </div>
    )
}
