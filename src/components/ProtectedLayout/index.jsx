import { Outlet } from 'react-router-dom'
import NavMenu from '../NavMenu'
import Sidenav from '../Sidenav/Sidenav'
import Footer from '../Footer/Footer'

const ProtectedLayout = () => {
    return (
        <div className='min-h-screen'>
            <Sidenav />
            <div className='flex bg-dark p-3 h-full gap-4'>
                <NavMenu />
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default ProtectedLayout