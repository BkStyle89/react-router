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
                            <div className="col justify-content-center d-flex h-100 w-100 align-self-stretch">
                                <div  className="card p-3 bg-light mb-4">
                                    <h5 className="card-title text-center bg-light">{product.title}</h5>
                                    <p> </p>
                                    <p className="card-text bg-light" id="descr">{product.description}</p>
                                    <p className="card-text bg-light">{product.category}</p>
                                    
                                    <img className="Card-img p-5 mt-auto bg-light " src={product.image} alt="" />
                                    <br />
                                    <div className="d-flex justify-content-between mt-auto bg-light">
                                        <h5 className="bg-light">{product.rating.rate} voti:{product.rating.count} </h5>
                                        <h5 className="text-end bg-light">{product.price}&#8364;</h5>
                                        <a className="text-decoration-none bg-light fw-bold" href={`/prodotti/${product.id}`}> Vedi Prodotto</a>
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