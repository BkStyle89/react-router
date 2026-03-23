import { BrowserRouter,Route,Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import ProdottoSingolo from "./pages/ProdottoSingolo"


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/chiSiamo" element={<ChiSiamo/>}/>
            <Route path="prodotti" element={<Prodotti/>}/>  
            <Route path="/prodotti/:id" element={<ProdottoSingolo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
