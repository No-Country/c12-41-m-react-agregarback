import { useState } from 'react'
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Sidenav from '../components/Sidenav/Sidenav';
import { SignUpPage, NotFound, HomeC, LoginC } from '../pages/index.js';
import Transfer from '../pages/Transfer';
export function Routers() {
    const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  function login(loginData) {
    const { dni, username, password } = loginData;
    const URL = 'https://nocountrybackend.onrender.com/api/v1/users/login';

    axios
      .post(URL, { dni, username, password })
      .then((response) => {
        const { token } = response.data;
        setToken(token);
        sessionStorage.setItem('token', token);
        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function register(registerData) {
    const { name, email, password, date_of_birth, dni, address, username, phone_number } = registerData;
    const URL = "https://nocountrybackend.onrender.com/api/v1/users/signup";

    axios
      .post(URL, {
        name,
        email,
        password,
        date_of_birth,
        dni,
        address,
        username,
        phone_number
      })
      .then((response) => {
        const { token } = response.data;
        setToken(token);
        sessionStorage.setItem('token', token);
        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function PrivateRoute({ element: Element, ...rest }) {
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token');

    if (!token) {
      navigate('/', { replace: true }); // Redirige a la ruta de inicio ("/") si no hay un token válido
      return null; // No renderizar nada mientras se redirige
    }
    return <Route {...rest} element={<Element />} />;
  }
    return (
        <Routes>
            <Route exact path="/" element={ <HomeC/> }/>
            <Route path="/*" element={<NotFound/>}/>
            <Route path="/login" element={<LoginC/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/transfers" element={<Transfer/>}/>
        </Routes>
    )
}