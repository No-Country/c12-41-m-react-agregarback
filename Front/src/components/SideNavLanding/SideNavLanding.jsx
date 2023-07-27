import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { PiUserGearLight } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";
import SideNavLandingLink from "./SideNavLandingLink";
const SideNavLanding = () => {
  const [navLanding, setNavLanding] = useState(false);
  const navigate = useNavigate();

  const handleNavLanding = () => {
    setNavLanding(!navLanding);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const LogoutButton = () => {
    return (
      <NavLink to="/" onClick={handleLogout}>
        <span
          href="/"
          className="bg-transparent inline-flex justify-center x items-center duration-1000 text-yellow hover:bg-orange-navmenu hover:text-dark hover:rounded shadow hover:shadow-lg lg:h-10 h-10 w-fit px-6 border  border-yellow lg:space-x-2 space-x-0"
        >
          <span className="hidden xl:inline">Cerrar sesión</span>
          <FiLogOut className="xl:hidden text-2xl" />
        </span>
      </NavLink>
    );
  };

  const LoginButton = () => {
    return (
      <NavLink to="/login">
        <span
          href="/"
          aria-label=""
          className="bg-transparent inline-flex justify-center items-center rounded-md  text-yellow hover:bg-gradient-to-tr from-orange-navmenu-active via-orange-navmenu to-yellow hover:text-dark hover:rounded shadow hover:shadow-lg lg:h-10 h-10 w-fit px-6 border-none border-yellow lg:space-x-2 space-x-0 transition-all ease-in-out duration-1000"
        >
          <span className="hidden xl:inline">Iniciar Sesion</span>
          <BiLogIn className="xl:hidden text-4xl border-none" />
        </span>
      </NavLink>
    );
  };

  const SignInButton = () => {
    return (
      <NavLink to="/signup">
        <span
          href="./signup"
          className="bg-gradient-to-tr from-orange-navmenu-active via-orange-navmenu to-yellow hover:bg-none hover:text-orange-navmenu  inline-flex items-center justify-center h-10 px-6 mr-6 font-bold uppercase tracking-wide text-dark transition duration-1000 hover:duration-1000 rounded shadow-md    focus:shadow-outline focus:outline-none"
        >
          <span className="hidden xl:inline">Crear Cuenta</span>
          <AiOutlineUserAdd className="xl:hidden text-4xl rounded-md" />
        </span>
      </NavLink>
    );
  };

  return (
    <div>
      <nav className="bg-dark ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto xl:justify-between p-7   leading-4 md:p-2 relative transition duration-300 ease-out">
          <NavLink
            to="/"
            className="flex items-center  justify-center flex-wrap "
          >
            <img
              src="/home/accessbankLogo.webp"
              className="h-[70px] mr-3"
              alt="AccessBank Logo"
            />
          </NavLink>
          <button
            onClick={handleNavLanding}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              navLanding
                ? "translate-y-0 top-[100%]  duration-500"
                : "translate-y-[-100%] top-0"
            } w-full absolute left-0 mx-auto z-[100] bg-dark md:w-auto md:translate-y-0 md:relative p-3`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col items-center md:p-0 py-4 rounded-lg bg-gray-50 xl:text-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-dark">
              {sessionStorage.getItem("token") ? (
                <SideNavLandingLink path={"/accounts"} title={`Mis Cuentas`} />
              ) : (
                <SideNavLandingLink path={"./"} title={"Home"} />
              )}

              <SideNavLandingLink path={"/nosotros"} title={"Nosotros"} />
              <SideNavLandingLink path={"/products"} title={"Productos"} />
              <SideNavLandingLink path={"/contact"} title={"Contactanos"} />
              <SideNavLandingLink
                path={"/preguntasfrecuentes"}
                title={"preguntas frecuentes"}
                className="mb-3"
              />

              {sessionStorage.getItem("token") ? (
                <>
                  <LogoutButton />
                  <NavLink
                    to="/profile"
                    className="ease-in duration-500 border-2 border-transparent hover:border-yellow  hover:bg-orange-navmenu   rounded-full p-1"
                  >
                    <IconContext.Provider
                      value={{ style: { fontSize: "2rem" } }}
                    >
                      <PiUserGearLight className="text-yellow hover:text-dark duration-700 " />
                    </IconContext.Provider>
                  </NavLink>
                </>
              ) : (
                <div className="flex items-center">
                  <SignInButton />
                  <LoginButton />
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNavLanding;
