import Navbar from "./sections/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Plans from "./sections/Plans"

export default function App(){
    return (
        <div className="app">
            <Navbar />
            <div className="body">
                <Home />
                <About />
                <Plans />
            </div>
        </div>
    )
}

