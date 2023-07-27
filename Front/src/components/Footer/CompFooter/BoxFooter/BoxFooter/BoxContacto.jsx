import { Link, NavLink } from "react-router-dom"
import { TitleFooter, navLinksEstilo } from "./BoxClases"

const BoxContactFooter = () => {
    return(
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className={TitleFooter}>
              Contacto
            </h2>
            <nav className="mb-10 list-none">
                <ul>
              <li className="mt-3">
                <Link className={navLinksEstilo} >
                  clientes@accessbank.com
                </Link>
              </li>
              <li className="mt-3">
                <Link className={navLinksEstilo}>
                  Atención a Clientes
                </Link>
              </li>
              <li className="mt-3">
                <Link className={navLinksEstilo}>
                  +123-456-7890
                </Link>
              </li>
              <li className="mt-3">
              <Link className={navLinksEstilo} target="_blank" to={"./preguntasfrecuentes"}>
                  Preguntas Frecuentes
                </Link>
              </li>
              </ul>
            </nav>
          </div>
    )
}
export default BoxContactFooter