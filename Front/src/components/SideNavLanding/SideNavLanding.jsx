import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import { ErrorDisplay } from "../404error";

const SideNavLanding = () => {
    const [navLanding, setNavLanding] = useState(false);

    const handleNavLanding = () => {
        setNavLanding(!navLanding);
    };

    return (

        <div>
            <nav className="bg-dark ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-2">
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
                        className={`${navLanding ? "right-0" : "right-[-100%]"
                            } w-full absolute md:w-auto top-[90px] z-50 bg-dark sm:block sm:top-0 sm:right-0`}
                        id="navbar-default"

                    >
                        <ul className="font-medium flex flex-col  items-center md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-dark ">
                            <li>
                                <NavLink
                                    to={"./"}
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/*'
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Nosotros
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/*'
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Servicios
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Contactanos
                                </NavLink>
                            </li>
                            <div className="flex items-center">
                                <NavLink to="/signup">

                                    <a
                                        href="./signup"
                                        className="inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none"
                                    >
                                        Crear cuenta
                                    </a>
                                </NavLink>
                                <NavLink to="/login">

                                    <a
                                        href="/"
                                        aria-label=""
                                        className="bg-transparent inline-flex justify-center font-medium text-yellow  hover:bg-white hover:text-dark hover: rounded shadow hover:shadow-lg  h-10 items-center  px-6 border border-yellow hover:border-white"
                                    >
                                        Iniciar sesión
                                    </a>
                                </NavLink>
                            </div>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default SideNavLanding;
