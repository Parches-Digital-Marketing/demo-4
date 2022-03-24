
export default function Card({time, price, features}) {
    console.log(time, price)
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-header__title">{time}</h2>
            </div>
            <div className="card-body">
                <h3 className="card-body__title">{price}</h3>
                <ul className="card-body__list">
                    {
                        features.map((feature, index) => {
                            return <li key={index} className="card-body__item">{feature}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
