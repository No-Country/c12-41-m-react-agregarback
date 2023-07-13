import { Link } from "react-router-dom"

const BoxContactFooter = () => {
    return(
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Contacto
            </h2>
            <nav className="mb-10 list-none">
                <ul>
              <li className="mt-3">
                <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                  clientes@accessbank.com
                </Link>
              </li>
              <li className="mt-3">
                <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                  Atención a Clientes
                </Link>
              </li>
              <li className="mt-3">
                <Link className="text-gray-500 cursor-pointer hover:text-gray-900">
                  +123-456-7890
                </Link>
              </li>
              </ul>
            </nav>
          </div>
    )
}
export default BoxContactFooter