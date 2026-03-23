import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

export default function prodottoSingolo(){
const {id} = useParams();
    useEffect(()=>{

    },[]);
    return (
        <div>
            <AppHeader/>
            <h1>ID prodotto: {id}</h1>
            <AppFooter/>
        </div>
    )
}