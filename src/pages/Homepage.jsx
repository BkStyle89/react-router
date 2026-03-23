import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
export default function Homepage(){

return(
    <div>
        <AppHeader/>
        <main>
            <p className="text-center fs-1 fw-bold">Negozio di Vestiti</p>
            <div className="container">
                <div className="row  fs-4 text-center ">
                    <div className="card d-flex justify-content-center text-center mb-5">
                        <p className="bg-light p-4">Negozio di vestiti e abbigliamento per tutti e di tutte le misure per chiunque ha buon gusto nel mondo della moda</p>
                    </div>
                </div>
            </div>
            
        </main>
        <AppFooter/>
    </div>
)

}