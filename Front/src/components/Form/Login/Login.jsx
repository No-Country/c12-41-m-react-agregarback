import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import validationlogin from "./validatelogin";
import { Navigate, NavLink, useNavigate } from "react-router-dom"
import { FaCommentsDollar } from "react-icons/fa6";
import { getUserInfo, setUserData } from "../../../redux/userSlice";
import logo from "../../../assets/logo.png"
import AWN from "awesome-notifications"
import { useDispatch } from "react-redux";
const notifier = new AWN();



function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState(null);
    useEffect(() => {
        if (token !== null) {
            navigate(`/accounts`);
        }
    }, [token]);


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
        await notifier.asyncBlock(
            axios.post("https://nocountrybackend.onrender.com/api/v1/users/login", loginData),

            res => {
                notifier.success(`Inciado exitosamente!`);
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("userId", res.data.user.id);
                setToken(res.data.token)
                console.log(res);
                dispatch(setUserData(res.data.user));
                navigate(`/accounts`);
            },
            err => { console.log(err); notifier.alert(`No se ha podido iniciar sesion`) },
            `Validando datos`
        )
    };
    return (
        <div className="bg-dark min-h-screen py-6 flex justify-center sm:px-5 ">

            <div className=" bg-gray-100 py-6 md:flex md:justify-center sm:py-12 w-full">
                    
                <div className="relative py-3 sm:mx-auto">
                
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-orange to-yellow shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-gray shadow-lg  sm:rounded-3xl sm:p-20">
                    <div className='flex items-center justify-center'>
                    <img
                        src="https://res.cloudinary.com/academia/image/upload/v1688654002/logo-accessBank_pg8pec.png"
                        className="h-[75px] mr-3"
                        alt="AccessBank Logo"
                        />
                    </div>
                        <div className="w-full max-w-md sm:max-w-lg mx-auto">
                            <form onSubmit={handleSubmit} className="max-w-full">
                                <div className="max-w-lg p-7">
                                    <div className="relative">
                                        <input id="dni" autoComplete="off" className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow" placeholder="Numero de documento"
                                            type="number"
                                            name="dni"
                                            value={loginData.dni}
                                            onChange={handleInputChange}
                                            onWheel={(e) => e.target.blur()}
                                        />
                                        <p className="error text-yellow font-bold h-12">{errors.dni}</p>
                                        <label htmlFor="dni" className="absolute left-0 -top-3.5 font-bold text-white   peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-base">Numero de documento</label>
                                    </div>
                                </div>
                                <div className="w-full max-w-lg p-7">
                                    <div className="relative">
                                        <input
                                            id="username"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow"
                                            placeholder="Usuario"
                                            type="username"
                                            name="username"
                                            value={loginData.username}
                                            onChange={handleInputChange}
                                        />
                                        <p className="error text-yellow font-bold h-12">{errors.usuario}</p>
                                        <label htmlFor="username" className="absolute left-0 -top-3.5 font-bold text-white   peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-base">Usuario</label>
                                    </div>
                                </div>
                                <div className="w-full max-w-lg p-7">
                                    <div className="relative" >
                                        <input
                                            id="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow"
                                            placeholder="Contraseña"
                                            type="password"
                                            name="password"
                                            value={loginData.password}
                                            onChange={handleInputChange}
                                        />
                                        <p className="error text-yellow font-bold h-12">{errors.password}</p>
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 font-bold text-white   peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-base">Contraseña</label>

                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                                    <button type="submit" onChange={handleSubmit}
                                        className="mt-6 font-bold py-2 px-4 rounded-xl marker:rounded focus:outline-none focus:shadow-outline bg-transparent text-yellow  hover:text-dark shadow hover:shadow-lg  border border-yellow  hover:bg-white ">Iniciar sesion</button>
                                    <NavLink to="/signup">
                                        <button type="submit"
                                            className=" mt-6 bg-gradient-to-r from-orange to-yellow text-dark font-bold px-4 py-2 rounded-xl  focus:outline-none focus:shadow-outline">Registrarse</button>
                                    </NavLink>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login