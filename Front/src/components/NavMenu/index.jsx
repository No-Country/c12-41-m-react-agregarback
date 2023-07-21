import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6"

const navLinkCommonClasses = "block pt-2 pb-2 flex justify-center items-center text-dark transition-colors duration-500 hover:bg-orange-navmenu-active"
const NavMenu = () => {
    const [isActive, seTIsActive] = useState(false)
    return (
        <div className={`text-2xl min-w-[240px] rounded-lg z-50 transtion-[translate] duration-500 bg-orange-navmenu pt-5 pb-5 absolute sm:sticky top-3 h-screen sm:translate-x-0 ${isActive ? "translate-x-0" : "translate-x-[-100%]"}`}>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/accounts">Cuentas</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/transfers">Transferencias</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/investments">Inversiones</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/*">Préstamos</NavLink>
            <div className='p-3'></div>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/contact">Contactanos</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/*">Cerrar sesión</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/*">Consultar token</NavLink>
            <div className='flex justify-center p-10'>
                <img src={logo} />
            </div>
            <button type='button' onClick={() => seTIsActive(!isActive)} className='sm:invisible absolute top-2 right-0 translate-x-[100%] bg-dark w-[30px] h-[80px] flex rounded-r-full justify-center items-center'>{isActive ? <FaAnglesLeft /> : <FaAnglesRight />}</button>
        </div >

    )
}

export default NavMenu