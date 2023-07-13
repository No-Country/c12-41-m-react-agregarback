import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"

const Proteccion = () => {
  const token = sessionStorage.getItem(`token`)
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      navigate('/login');
    }
  }, [location, navigate, token])


  return <Outlet />
}
export default Proteccion