import Navbar from "./sections/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Services from "./sections/Services"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function App(){
    return (
        <div className="app">
            <Navbar />
            <div className="body">
                <Home />
                <About />
                <Services />
                <Contact />
            </div>
            <Footer/>
        </div>
    )
}

