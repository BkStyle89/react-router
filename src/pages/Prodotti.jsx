import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import { useEffect,useState } from "react"
export default function Prodotti(){

const api_link ="https://fakestoreapi.com/products"
const [products,setProducts]=useState([])

/* function getProducts(){
fetch(api_link)
.then(res=res.json())
.then(data=>{setProducts(data)

})
}
useEffect(getProducts,[]) */

return(
    <div>
        <AppHeader/>
        <main>
            
        </main>
        <AppFooter/>
    </div>
)

}