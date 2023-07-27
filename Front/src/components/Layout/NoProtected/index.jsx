import { Outlet } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import SideNavLanding from '../../SideNavLanding/SideNavLanding'

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