import React from "react";
import axios from "axios";
import validationsignup from "./validatesignup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


//import { BsSignDeadEndFill } from "react-icons/bs";


function SignUp() {

    const [userRegister, setUserRegisterData] = React.useState({
        name: "",
        email: "",
        password: "",
        date_of_birth: "",
        dni: "",
        address: "",
        username: "",
        phone_number: ""
    });
    const [errors, setErrors] = React.useState({});

    const handleRegisterInputChange = (e) => {
        const { name, value } = e.target;
        setUserRegisterData({
            ...userRegister,
            [name]: value
        });
        setErrors(
            validationsignup({
                ...userRegister,
                [name]: value
            })
        );
    };
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post(
                "https://nocountrybackend.onrender.com/api/v1/users/signup",
                userRegister
            );

            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div>

            <div className="signup flex justify-center items-center h-70vh bg-dark">

                <form onSubmit={handleRegisterSubmit}
                    className="grid grid-cols-2 gap-1">
                    <div className="w-full max-w-xs p-10">
                        <label>Nombre Completo</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                            placeholder="Nombre Completo"
                            type="text"
                            name="name"
                            value={userRegister.name}
                            onChange={handleRegisterInputChange}
                        />
                        <p className="error">{errors.name}</p>
                    </div>
                    <div className="w-full max-w-xs p-10">
                        <label>Email</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={userRegister.email}
                            onChange={handleRegisterInputChange}
                        />
                        <p className="error">{errors.email}</p>
                    </div>
                    <div className="w-full max-w-xs p-10">
                        <label>Contraseña</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                            placeholder="Contraseña"
                            type="password"
                            name="password"
                            value={userRegister.password}
                            onChange={handleRegisterInputChange}
                        />
                        <p className="error">{errors.password}</p>
                    </div>
                    <div className="w-full max-w-xs p-10">
                        <label>Fecha de Nacimiento</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                type="date"
                name="date_of_birth"
                value={userRegister.date_of_birth}
                onChange={handleRegisterInputChange}
            />
                        
                    </div>
                    <div className="w-full max-w-xs p-10">
                        <label>Número de Documento</label>
                        <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                                placeholder="Numero de documento"
                                type="number"
                                name="dni"
                                value={userRegister.dni}
                                onChange={handleRegisterInputChange}
                        />
                    </div>
                    <div className="w-full max-w-xs p-10">
                        <label>Dirección</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                            placeholder="Dirección"
                            type="text"
                            name="address"
                            value={userRegister.address}
                            onChange={handleRegisterInputChange}
                        />
                    </div>
                    <div className="w-full max-w-xs p-10">
                        <label>Nombre de Usuario</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                            placeholder="Nombre de Usuario"
                            type="text"
                            name="username"
                            value={userRegister.username}
                            onChange={handleRegisterInputChange}
                        />
                        <p className="error">{errors.username}</p>
                    </div>
                    <div className="w-full max-w-xs p-10">
                        <label>Número de Teléfono</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinev bg-dark"
                            placeholder="Número de Teléfono"
                            type="text"
                            name="phone_number"
                            value={userRegister.phone_number}
                            onChange={handleRegisterInputChange}
                        />
                        <p className="error">{errors.phone_number}</p>
                    </div>
                    <div
                        className="flex justify-center items-center bg-dark">
                        <button onChange={handleRegisterSubmit}
                            className="bg-gradient-to-r from-orange to-yellow hover:text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">Registrar</button>
                    </div>
                </form>
            </div>

 
        </div>

    );
}

export default SignUp;
