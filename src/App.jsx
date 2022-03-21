import About from "./sections/About"
import Home from "./sections/Home"
import Navbar from "./sections/Navbar"

export default function App(){
    return (
        <div className="app">
            <Navbar />
            <Home />
            <About />
        </div>
    )
}

