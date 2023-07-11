import { Outlet } from 'react-router-dom'
import NavMenu from '../../NavMenu'
import Sidenav from '../../Sidenav/Sidenav'
import Footer from '../../Footer/Footer'

const ProtectedLayout = () => {
    return (
        <div className='min-h-screen'>
            <Sidenav />
            <div className='grid grid-cols-[auto,_1fr] bg-dark p-3 h-full gap-4 relative'>
                <NavMenu />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default ProtectedLayout