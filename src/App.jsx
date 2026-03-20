import { BrowserRouter,Route,Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <nav>
            <NavLink to="/" element={<Homepage/>}/>
            <NavLink to="/ChiSiamo" element={<ChiSiamo/>}/>
            <NavLink to="Prodotti" element={<Prodotti/>}/>
          </nav>  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
