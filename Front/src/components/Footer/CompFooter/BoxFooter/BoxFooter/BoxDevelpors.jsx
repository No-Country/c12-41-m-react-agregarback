import { Link } from "react-router-dom"
import { TitleFooter, navLinksEstilo } from "./BoxClases"

const BoxDevelopers = () => {
    return(
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className={TitleFooter}>
          Developers
        </h2>
        <nav className="mb-10 list-none">
            <ul>
          <li className="mt-3">
            <Link to="https://www.linkedin.com/in/aron-resnicoff-333b2a215/" className={navLinksEstilo}>
              Aron Resnicoff
            </Link>
          </li>
          <li className="mt-3">
            <Link to="https://www.linkedin.com/in/emilio-rivas-ruiz-a8857226b/" className={navLinksEstilo}>
              Emilio Rivas Ruiz
            </Link>
          </li>
          <li className="mt-3">
            <Link to="https://www.linkedin.com/in/fabridevtoll/" className={navLinksEstilo}>
              Fabricio Reyna
            </Link>
          </li>
           <li className="mt-3">
            <Link to="https://www.linkedin.com/in/gabriel-shimabuku/" className={navLinksEstilo}>
              Gabriel Shimabuku
            </Link>
          </li>
          <li className="mt-3">
            <Link to="https://www.linkedin.com/in/lfgarciaoc/" className={navLinksEstilo}>
              Luisa García
            </Link>
          </li>
          <li className="mt-3">
            <Link to="https://www.linkedin.com/in/sergiotg2022/" className={navLinksEstilo}>
              Sergio Torres Guaymasi
            </Link>
          </li>
          </ul>
        </nav>
      </div>
    )
}

export default BoxDevelopers