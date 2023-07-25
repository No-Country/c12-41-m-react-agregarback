import { Outlet } from "react-router-dom";
import NavMenu from "../../NavMenu";
// import Sidenav from '../../Sidenav/Sidenav'
import Footer from "../../Footer/Footer";
import SideNavLanding from "../../SideNavLanding/SideNavLanding";

const ProtectedLayout = () => {


  return (
    <div className="min-h-screen">
      {/* <Sidenav /> */}
      <SideNavLanding />
      <div
        id="navContainer"
        className="flex bg-dark md:p-3 h-full gap-4 relative"
      >
        <NavMenu />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
