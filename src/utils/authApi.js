import axios from "axios"
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
export { login, register };
