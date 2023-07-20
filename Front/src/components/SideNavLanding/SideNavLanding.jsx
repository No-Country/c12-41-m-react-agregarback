import { useState } from "react";
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

  return (
    <div>
      <nav className="bg-dark ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7 md:p-2 relative">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/academia/image/upload/v1688654002/logo-accessBank_pg8pec.png"
              className="h-[70px] mr-3"
              alt="AccessBank Logo"
            />
          </NavLink>
          <button
            onClick={handleNavLanding}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                ? "translate-y-0 top-[100%]"
                : "translate-y-[-100%] top-0"
            } w-full absolute left-0 mx-auto z-[100] bg-dark duration-500 md:w-auto md:translate-y-0 md:relative p-3`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col items-center md:p-0 py-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-dark">
              {sessionStorage.getItem("token") ? (
                <SideNavLandingLink path={"/accounts"} title={"Mis Cuentas"} />
              ) : (
                <SideNavLandingLink path={"./"} title={"Home"} />
              )}

              <SideNavLandingLink path={"/nosotros"} title={"Nosotros"} />
              <SideNavLandingLink path={"/products"} title={"Productos"} />
              <SideNavLandingLink path={"/contact"} title={"Contactanos"} />
              <SideNavLandingLink
                path={"/preguntasfrecuentes"}
                title={"preguntas frecuentes"}
              />

              {sessionStorage.getItem("token") ? (
                <>
                  <NavLink to="/" onClick={handleLogout}>
                    <span
                      href="/"
                      aria-label=""
                      className="bg-transparent inline-flex justify-center font-medium text-yellow  hover:bg-white hover:text-dark hover: rounded shadow hover:shadow-lg  h-10 items-center  px-6 border border-yellow hover:border-white"
                    >
                      Cerrar sesión
                    </span>
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="ease-in duration-300 border-2 border-transparent hover:border-white hover:opacity-70 rounded-full p-1"
                  >
                    <IconContext.Provider
                      value={{ style: { fontSize: "2rem" } }}
                    >
                      <PiUserGearLight />
                    </IconContext.Provider>
                  </NavLink>
                </>
              ) : (
                <div className="flex items-center">
                  <NavLink to="/signup">
                    <span
                      href="./signup"
                      className="inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none"
                    >
                      Crear cuenta
                    </span>
                  </NavLink>
                  <NavLink to="/login">
                    <span
                      href="/"
                      aria-label=""
                      className="bg-transparent inline-flex justify-center font-medium text-yellow  hover:bg-white hover:text-dark hover: rounded shadow hover:shadow-lg  h-10 items-center  px-6 border border-yellow hover:border-white"
                    >
                      Iniciar sesión
                    </span>
                  </NavLink>
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
