import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const navLinkCommonClasses = "block pt-2 pb-2 flex justify-center items-center text-dark transition-colors duration-500 hover:bg-orange-navmenu-active"
const NavMenu = () => {
    return (
        <div className="text-2xl w-60 rounded-lg bg-orange-navmenu pt-5 pb-5 h-[90%]">
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/accounts">Cuentas</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/transfers">Transferencias</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/cards">Tarjetas</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/investments">Inversiones</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/loans">Préstamos</NavLink>
            <div className='p-3'></div>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/help">Centro de ayuda</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/logout">Cerrar sesión</NavLink>
            <NavLink className={({ isActive }) => isActive ? navLinkCommonClasses + " bg-orange-navmenu-active" : navLinkCommonClasses} to="/token">Consultar token</NavLink>
            <div className='flex justify-center p-10'>
                <img src={logo} />
            </div>

        </div >

    )
}

export default NavMenu