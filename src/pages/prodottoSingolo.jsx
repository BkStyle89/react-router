import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

export default function prodottoSingolo(){
const {id} = useParams();
const navigate =useNavigate
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products${id}")
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            navigate(-1);
        });
    },[id,navigate]);
    return (
        <div>
            <AppHeader/>
            <h1>ID prodotto: {id}</h1>
            <AppFooter/>
        </div>
    )
}