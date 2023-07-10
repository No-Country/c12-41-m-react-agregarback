import { Link } from "react-router-dom";
import { CompoError } from "../../components/404error/index.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SideNavLanding from "../../components/SideNavLanding/SideNavLanding.jsx";


const NotFound = () => {
    return (
        <>
            <SideNavLanding />
            <CompoError />
            <Footer />

        </>
    )
}
export default NotFound;
