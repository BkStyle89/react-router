import { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router";
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import axios from "axios"

export default function ProdottoSingolo(){
    
    const {id} = useParams();
    const navigate =useNavigate();
    const [product,setProduct]=useState(null);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=> setProduct(res.data)
        )
        .catch(err=>{
            navigate(-1);
        });
    },[id,navigate]);
console.log(id);


    return (
        <div>
            <AppHeader/>
            <div  className="container">
                <div className="row">
                    <div className="col justify-content-center d-flex h-100 w-100 align-self-stretch">
                        <div  className="card p-3 bg-light mb-4 h-50 w-50 mb-5">
                            <h5 className="card-title text-center bg-light">{product?.title}</h5>
                            <p className="card-text bg-light" id="descr">{product?.description}</p>
                            <p className="card-text bg-light text-center">{product?.category}</p> 
                            <img className="Card-img p-5 mt-auto bg-light " src={product?.image} alt="" />
                            <br />
                            <div className="d-flex justify-content-between mt-auto bg-light">
                                <h5 className="bg-light">{product?.rating.rate} voti:{product?.rating.count} </h5>
                                <h5 className="text-end bg-light">{product?.price}&#8364;</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter/>
        </div>
    )
}