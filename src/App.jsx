import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Home from './components/HomePage/Home'
import Footer from './components/Footer/Footer'
import Sidenav from './components/Sidenav/Sidenav'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
function App() {
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

  function PrivateRoute ({ element: Element, ...rest }) {
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token');

    if (!token) {
      navigate('/', { replace: true }); // Redirige a la ruta de inicio ("/") si no hay un token válido
      return null; // No renderizar nada mientras se redirige
    }
    return <Route {...rest} element={<Element />} />;
  }

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/form' element={<Form login={login} />} />
      </Routes>
    </div>
  )
}

export default App
