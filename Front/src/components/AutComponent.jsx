import { Outlet } from "react-router-dom";
import SideNavLanding from "./SideNavLanding/SideNavLanding";

const AutComponent = () => {
  return (
    <>
      <SideNavLanding />
      <Outlet />
    </>
  );
};
export default AutComponent;
