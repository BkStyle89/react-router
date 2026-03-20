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
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
                    {products.map(product=>(
                        <div key={product.id}>
                            <div className="col">
                                <div className="card p-3">
                                    <h5 className="card-title text-center">{product.title}</h5>
                                    <p> </p>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.category}</p>
                                    <img className="card-img" src={product.image} alt="" />
                                    <br />
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5>{product.rating.rate} voti:{product.rating.count} </h5>
                                        <h5 className="text-end">{product.price}&#8364;</h5>
                                    </div>
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