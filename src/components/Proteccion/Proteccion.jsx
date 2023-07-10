import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"

const Proteccion = () => {
    const token = sessionStorage.getItem(`token`)
    console.log(token)
    if (token === null) {
      return  <Navigate to={'/login'} />
    }
    return <Outlet />
}
export default Proteccion