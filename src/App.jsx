import { Routes, Route } from "react-router-dom"
import { useState } from "react"
// These Pages
import Login from "./pages/Login"
import Home from "./pages/Home"
import Sala from "./pages/Sala"
import About from "./pages/About"
// These Components
import Nav from "./Components/Nav"






function App() {
    const [card, setCard] = useState([])
    const addCard = (promt) => {
        setCard((po) => [...po, promt])
    }
    return (
        <>
            <div className=" flex flex-col min-h-screen">
                <Nav />

                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Home" element={<Home cll={addCard} />} />
                    <Route path="/Sala" element={<Sala cart={card} />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </div>

        </>
    )
}
export default App