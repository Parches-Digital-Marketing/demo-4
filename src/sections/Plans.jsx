import Card from "../components/Card"

export default function Plans() {
    const plans = {
        "daily": {
            "time": "Diario",
            "price": "$0",
            "features": [
                "1 user",
                "Unlimited storage",
                "Unlimited emails",
            ]
        },
        "monthly": {
            "time": "Mensual",
            "price": "$9.99",
            "features": [
                "1 user",
                "Unlimited projects",
                "Unlimited storage",
            ]
        },
        "yearly": {
            "time": "Anual",
            "price": "$99.99",
            "features": [
                "5 users",
                "Unlimited projects",
                "Unlimited storage",
            ]
        }
    }
    return (
        <div className="plans-section">
            <div className="scroll" name="plans"/>
            <div className="plans-container">
                <h3 className="plans__title">Nuestros planes</h3>
                <div className="plans-cards">
                {
                    Object.keys(plans).map((plan, index) => {
                        return <Card key={index} time={plans[plan].time} price={plans[plan].price} features={plans[plan].features}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}