import { NavLink } from "react-router-dom";

const SideNavLandingLink = ({ path, title }) => {
  return (
    <li>
      <NavLink
        to={path}
        className="block py-2 pl-3 pr-4 text-white hover:text-orange-navmenu duration-500 bg-transparent rounded md:bg-transparent capitalize xl:text-base text-sm md:p-0  dark:text-white md:dark:text-blue-500"
        aria-current="page"
      >
        {title}
      </NavLink>
    </li>
  );
};
export default SideNavLandingLink;
