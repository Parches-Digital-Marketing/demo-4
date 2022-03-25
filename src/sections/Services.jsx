import Card from "../components/Card";

export default function Services() {
    const services = [
        {
            title: "Gimnasio",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dignissimos molestiae dolores nesciunt! Amet inventore quia, autem nostrum, corporis veniam doloremque, voluptas aperiam officia quaerat placeat officiis ex atque. Ex.",
            image: "https://media.revistagq.com/photos/5ca5f043bda59438f733d673/master/pass/gimnasio_6788.jpg"
        },
        {
            title: "Spinning",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dignissimos molestiae dolores nesciunt! Amet inventore quia, autem nostrum, corporis veniam doloremque, voluptas aperiam officia quaerat placeat officiis ex atque. Ex.",
            image: "https://i.blogs.es/a82e3b/istock-1134717663-1-/500_333.jpeg"
        },
        {
            title: "Yoga",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dignissimos molestiae dolores nesciunt! Amet inventore quia, autem nostrum, corporis veniam doloremque, voluptas aperiam officia quaerat placeat officiis ex atque. Ex.",
            image: "https://www.cuerpomente.com/medio/2020/07/08/1144083_1ee10942_1200x1200.jpg"
        },
        {
            title: "Pilates",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dignissimos molestiae dolores nesciunt! Amet inventore quia, autem nostrum, corporis veniam doloremque, voluptas aperiam officia quaerat placeat officiis ex atque. Ex.",
            image: "https://www.hola.com/imagenes/estar-bien/20180830128652/beneficios-desconocidos-pilates/0-593-226/beneficios-pilates-t.jpg"
        }
    ];

    return (
        <div className="services-section">
            <div className="scroll" name="services"/>
            <div className="services-container">
                <div className="services-header">
                    <h2 className="services__title">Nuestros servicios</h2>
                    <p className="services__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis numquam labore pariatur reiciendis, facilis molestias recusandae beatae a sapiente totam accusamus animi aliquam magnam dolorum, corporis similique temporibus repellat?</p>
                </div>
                <div className="services-cards">
                    {services.map((service, index) => {
                        return (
                            <Card
                                key={index}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}