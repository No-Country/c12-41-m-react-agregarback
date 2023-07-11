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
                    <a href="/home" className="flex items-center">
                        <img
                            src="https://res.cloudinary.com/academia/image/upload/v1688654002/logo-accessBank_pg8pec.png"
                            className="h-12 mr-3"
                            alt="AccessBank Logo"
                        />
                    </a>
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
                        className={`${navLanding ? "block" : "hidden"
                            } w-full md:block md:w-auto`}
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
                                    to='/us'
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Nosotros
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/services'
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
                            <div className="flex flex-nowrap gap-2 pt-6">
                                <NavLink to='/login' className='px-4 py-2 mb-4  text-xs text-center font-bold  bg-transparent border border-yellow text-yellow hover:bg-white hover:text-gray rounded-xl'>Ingresar</NavLink>
                                <NavLink to='/signup' className="px-4 py-2 mb-4  text-xs text-center text-white font-bold bg-orange hover:bg-yellow rounded-xl">Registrarse</NavLink>
                            </div>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default SideNavLanding;
