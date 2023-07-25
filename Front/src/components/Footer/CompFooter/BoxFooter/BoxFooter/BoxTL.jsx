import { Link } from "react-router-dom"
import { TitleFooter, navLinksEstilo } from "./BoxClases"

const BoxTL = () => {
    return(
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className={TitleFooter} >
              Team Leader
            </h2>
            <nav className="mb-10 list-none">
                <ul>
              <li className="mt-3">
                <Link className={navLinksEstilo}>
                  Yessica Rodriguez
                </Link>
              </li>
              </ul>
            </nav>
          </div>
    )
}
export default BoxTL