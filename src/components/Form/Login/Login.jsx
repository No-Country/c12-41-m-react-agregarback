import React from "react";
import axios from "axios";
import validationlogin from "./validatelogin";
import { NavLink } from "react-router-dom"

function Login() {
    const [loginData, setLoginData] = React.useState({
        dni: "",
        username: "",
        password: ""
    });

    const [errors, setErrors] = React.useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
        setErrors(
            validationlogin({
                ...loginData,
                [name]: value
            })
        );
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://nocountrybackend.onrender.com/api/v1/users/login", loginData);

            console.log(response.data);
            sessionStorage.setItem("token", response.data.token);

        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div>
            <div className="signup flex justify-center items-center h-70vh bg-dark">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="w-full max-w-xs p-10">
                            <label>Numero de documento</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                                placeholder="Numero de documento"
                                type="number"
                                name="dni"
                                value={loginData.dni}
                                onChange={handleInputChange}
                            />
                            <p className="error">{errors.dni}</p>
                        </div>
                        <div className="w-full max-w-xs p-10">
                            <label>Usuario</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                                placeholder="Usuario"
                                type="username"
                                name="username"
                                value={loginData.username}
                                onChange={handleInputChange}
                            />
                            <p className="error">{errors.usuario}</p>
                        </div>
                        <div className="w-full max-w-xs p-10">
                            <label>Contraseña</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                                placeholder="Contraseña"
                                type="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleInputChange}
                            />
                            <p className="error">{errors.password}</p>
                            <div className="flex justify-center items-center">
                                <button type="submit" onChange={handleSubmit}
                                    className="bg-gradient-to-r from-orange to-yellow hover:text-dark font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline m-5">Iniciar sesion</button>
                                <NavLink to="/signup">
                                    <button type="submit"
                                        className="bg-gradient-to-r from-orange to-yellow hover:text-dark font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline m-5">Registrarse</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
         

        </div>
    )
}
export default Login
