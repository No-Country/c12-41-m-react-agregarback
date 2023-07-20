import { Link} from "react-router-dom"
import { QuestionIcon, ReturnIcon } from "../../Icons";


export const CompoError = () =>{
 
function BackButton() {
    history.back();
}

    return(
        <main className="bg-gradient-to-t from-dark via-gray to-dark bg-no-repeat bg-cover h-screen" >

        
          <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-yellow text-7xl uppercas md:text-8xl">Error 404</h1>
        <p className="text-orange w-15 h-10 m-10">Pagina No Encontrada o En Contruccion - Vuelve mas tarde o Contactanos</p>
        <div className="flex justify-evenly	 items-center w-full">

            <div className="bg-gradient-to-r from-yellow to-orange w-20 h-20 rounded-full flex justify-center items-center hover:transition md:cursor-pointer ">
            <button onClick={BackButton}> 
            <ReturnIcon width="50px" height="50px"/>
            </button>
            </div>
            <div className="bg-gradient-to-r from-orange to-yellow w-20 h-20 rounded-full flex justify-center items-center hover:transition md:cursor-pointer">
            <Link className="text-sm capitalize" to="/contact"> <QuestionIcon width="50px" height="50px"/></Link>
            </div>
        </div>
        </div>

    </main>
    )
    
}
