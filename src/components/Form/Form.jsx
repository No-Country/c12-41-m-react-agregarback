import React from "react";
import axios from "axios";
import validation from "./validate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { resolveBaseUrl } from "vite";

function Form() {
    const [loginData, setLoginData] = React.useState({
        dni: "",
        username: "",
        password: ""
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
        setErrors(
            validation({
                ...loginData,
                [name]: value
            })
        );
    };

    const handleRegisterInputChange = (e) => {
        const { name, value } = e.target;
        setUserRegisterData({
            ...userRegister,
            [name]: value
        });
        setErrors(
            validation({
                ...userRegister,
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
            console.error(error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post("https://nocountrybackend.onrender.com/api/v1/users/signup", userRegister);


            console.log(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="Form">
            <div>
                <div className="login">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label>Numero de documento</label>
                                <input
                                    className="input"
                                    placeholder="Numero de documento"
                                    type="number"
                                    name="dni"
                                    value={loginData.dni}
                                    onChange={handleInputChange}
                                />
                                <p className="error">{errors.dni}</p>
                            </div>
                            <div className="usuario">
                                <label>Usuario</label>
                                <input
                                    className="input"
                                    placeholder="Usuario"
                                    type="username"
                                    name="username"
                                    value={loginData.username}
                                    onChange={handleInputChange}
                                />
                                <p className="error">{errors.usuario}</p>
                            </div>
                            <div className="password">
                                <label>Contraseña</label>
                                <input
                                    className="input"
                                    placeholder="Contraseña"
                                    type="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleInputChange}
                                />
                                <p className="error">{errors.password}</p>
                                <button type="submit" onChange={handleSubmit}>Iniciar sesion</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="signup">
                    <form onSubmit={handleRegisterSubmit}>
                        <div>
                            <label>Nombre Completo</label>
                            <input
                                className="input"
                                placeholder="Nombre Completo"
                                type="text"
                                name="name"
                                value={userRegister.name}
                                onChange={handleRegisterInputChange}
                            />
                            <p className="error">{errors.name}</p>
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                className="input"
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={userRegister.email}
                                onChange={handleRegisterInputChange}
                            />
                            <p className="error">{errors.email}</p>
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <input
                                className="input"
                                placeholder="Contraseña"
                                type="password"
                                name="password"
                                value={userRegister.password}
                                onChange={handleRegisterInputChange}
                            />
                            <p className="error">{errors.password}</p>
                        </div>
                        <div>
                            <label>Fecha de Nacimiento</label>
                            <DatePicker
                                className="input"
                                selected={userRegister.date_of_birth}
                                onChange={(date) =>
                                    setUserRegisterData({
                                        ...userRegister,
                                        date_of_birth: date
                                    })
                                }
                                dateFormat="yyyy-MM-dd"
                            />
                        </div>
                        <div>
                            <label>Número de Documento</label>
                            <input
                                className="input"
                                placeholder="Número de Documento"
                                type="text"
                                name="dni"
                                value={userRegister.dni}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div>
                            <label>Dirección</label>
                            <input
                                className="input"
                                placeholder="Dirección"
                                type="text"
                                name="address"
                                value={userRegister.address}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div>
                            <label>Nombre de Usuario</label>
                            <input
                                className="input"
                                placeholder="Nombre de Usuario"
                                type="text"
                                name="username"
                                value={userRegister.username}
                                onChange={handleRegisterInputChange}
                            />
                            <p className="error">{errors.username}</p>
                        </div>
                        <div>
                            <label>Número de Teléfono</label>
                            <input
                                className="input"
                                placeholder="Número de Teléfono"
                                type="text"
                                name="phone_number"
                                value={userRegister.phone_number}
                                onChange={handleRegisterInputChange}
                            />
                            <p className="error">{errors.phone_number}</p>
                        </div>
                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;