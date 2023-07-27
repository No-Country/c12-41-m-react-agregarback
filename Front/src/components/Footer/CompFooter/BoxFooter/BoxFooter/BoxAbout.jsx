import { Link } from "react-router-dom"
import { TitleFooter, navLinksEstilo } from "./BoxClases"

const AboutBox = () => {
    return(
        <div className="w-full lg:w-1/4 md:w-1/2">
        <h2 className={TitleFooter}>
          Información Importante
        </h2>
        <nav className="mb-10 ">
            <ul className="">
          <li className="mt-3">
            <Link to="https://www.aba-argentina.com/wp-content/uploads/CodigoPracticasBancarias.pdf" className={navLinksEstilo} target="_blank">
              Aviso Legal
            </Link>
          </li>
          <li className="mt-3">
            <Link to="https://www.argentina.gob.ar/aaip/datospersonales" className={navLinksEstilo} target="_blank">
              Datos Personales
            </Link>
          </li>
          <li className="mt-3">
            <Link to="https://www.argentina.gob.ar/economia/comercio/defensadelconsumidor" className={navLinksEstilo} target="_blank">
              Defensa al Consumidor
            </Link>
          </li>
          </ul>
        </nav>
      </div>
    )
}
export default AboutBox