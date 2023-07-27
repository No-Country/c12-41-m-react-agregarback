import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwiiterIcon } from "../../../../Icons";
import { TitleFooter } from "./BoxClases";

const RedesFooter = () => {
    return(
        <div className="flex-shrink-0 md:w-full md:justify-center  mx-auto text-center md:mx-0 md:text-left mb-2 lg:w-64 ">
        <Link className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <img className="h-12  xl:w-12 w-full " viewBox="0 0 202 69" src="/logoab.svg" />
        </Link>
        <h2 className={`${TitleFooter} xl:text-left text-center md:my-2 my-2 `}>
          Accesibilidad y cuidado de su dinero
        </h2>
        <div className="mt-4 ">
          <span className="flex items-center tex mt-2 sm:ml-auto sm:mt-0 xl:justify-start justify-center ">
            <Link to="https://www.facebook.com/" target="_blank" className="text-gray cursor-pointer hover:text-[#4267B2]">
              <FacebookIcon/>
            </Link>
            <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2F" target="_blank" className="ml-3 text-gray cursor-pointer hover:text-[#1DA1F2]">
            <TwiiterIcon />

            </Link>
            <Link to="https://www.instagram.com/" target="_blank" className="ml-3 text-gray cursor-pointer hover:text-[#E1306C]">
              <InstagramIcon/>
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank" className="ml-3 text-gray cursor-pointer hover:text-[#0077b5]">
              <LinkedinIcon/>
            </Link>
          </span>
        </div>
      </div>
    )
}
export default RedesFooter