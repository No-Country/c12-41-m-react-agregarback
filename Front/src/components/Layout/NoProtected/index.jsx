import { Outlet } from 'react-router-dom'
import SideNavLanding from '../../SideNavLanding/SideNavLanding'
import Footer from '../../Footer/Footer'

const NoProtectedLayout = () => {
    return (
        <div className='min-h-screen'>
            <SideNavLanding />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default NoProtectedLayout