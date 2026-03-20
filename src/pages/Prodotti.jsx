import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import { useEffect,useState } from "react"
export default function Prodotti(){

const api_link ="https://fakestoreapi.com/products"
const [products,setProducts]=useState([])

function getProducts(){
fetch(api_link)
.then(res=>res.json())
.then(data=>{setProducts(data)

})
}
useEffect(getProducts,[]) 

return(
    <div>
        <AppHeader/>
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {products.map(product=>(
                        <div key={product.id}>
                            <div className="col">
                                <div className="card">
                                    <h3>{product.title}</h3>
                                    <p>{product.price}</p>
                                    <p>{product.description}</p>
                                    <p>{product.category}</p>
                                    <img src={product.image} alt="" />
                                    <h5>{product.rating.rate}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>  
        </main>
        <AppFooter/>
    </div>
)
}