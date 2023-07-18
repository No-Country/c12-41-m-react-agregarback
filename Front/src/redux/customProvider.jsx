import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { protectedStore } from "./protectedStore";
const CustomProvider = () => {
    return (
        <Provider store={protectedStore}>
            <Outlet />
        </Provider>
    )
}

export default CustomProvider