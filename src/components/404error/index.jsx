import { Link } from "react-router-dom"
import { ErrorDisplay } from "."
import { HomeIcon } from "./Icons/homeIcon"
import { QuestionIcon } from "./Icons/QuestionContact"

export const CompoError = () =>{
 

    return(
        <main className="bg-gray h-screen " >

            <img
            src="https://res.cloudinary.com/academia/image/upload/v1688654002/logo-accessBank_pg8pec.png"
            className="h-10 mr-3"
            alt="AccessBank Logo"
          />
          <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-yellow text-8xl uppercas">Error 404</h1>
        <p className="text-orange w-15 h-10 m-10">Pagina No Encontrada o En Contruccion - Vuelve mas tarde o Contactanos</p>
        <div className="flex justify-evenly	 items-center w-full">
            <div className="bg-yellow w-20 h-20 rounded-full flex justify-center items-center hover:transition md:cursor-pointer ">
            <Link  to={"./"}> 
            <HomeIcon width="50px" height="50px"/>
            </Link>
            </div>
            <div className="bg-orange w-20 h-20 rounded-full flex justify-center items-center hover:transition md:cursor-pointer">
            <Link className="text-sm capitalize" to={ErrorDisplay}> <QuestionIcon width="50px" height="50px"/></Link>
            </div>
        </div>
        </div>

    </main>
    )
    
}
