import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwiiterIcon } from "../../../../Icons";

const RedesFooter = () => {
    return(
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
        <Link className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <img className="h-12" viewBox="0 0 202 69" src="/logoab.svg" />
        </Link>
        <p className="mt-2 text-sm text-gray-500">
          Accesibilidad y cuidado de su dinero
        </p>
        <div className="mt-4">
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <Link to="https://www.facebook.com/" className="text-gray-500 cursor-pointer hover:text-gray-700">
              <FacebookIcon/>
            </Link>
            <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2F" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
            <TwiiterIcon />

            </Link>
            <Link to="https://www.instagram.com/" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
              <InstagramIcon/>
            </Link>
            <Link to="https://www.linkedin.com/" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
              <LinkedinIcon/>
            </Link>
          </span>
        </div>
      </div>
    )
}
export default RedesFooter