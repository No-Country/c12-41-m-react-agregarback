import { Link } from "react-router-dom"

const AboutBox = () => {
    return(
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
          About
        </h2>
        <nav className="mb-10 list-none">
            <ul>
          <li className="mt-3">
            <Link to="https://www.aba-argentina.com/wp-content/uploads/CodigoPracticasBancarias.pdf" className="text-gray-500 cursor-pointer hover:text-gray-900">
              Aviso Legal
            </Link>
          </li>
          <li className="mt-3">
            <Link to="https://www.argentina.gob.ar/aaip/datospersonales" className="text-gray-500 cursor-pointer hover:text-gray-900">
              Datos Personales
            </Link>
          </li>
          <li className="mt-3">
            <Link to="https://www.argentina.gob.ar/economia/comercio/defensadelconsumidor" className="text-gray-500 cursor-pointer hover:text-gray-900">
              Defensa al Consumidor
            </Link>
          </li>
          </ul>
        </nav>
      </div>
    )
}
export default AboutBox