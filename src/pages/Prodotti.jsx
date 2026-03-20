import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
export default function Prodotti(){

const api_link ="https://fakestoreapi.com/products"

fetch(api_link)
.then(res=res.json())
.then(data=>{})

return(
    <div>
        <AppHeader/>
        <main>
            <h1>Prodotti</h1>
        </main>
        <AppFooter/>
    </div>
)

}