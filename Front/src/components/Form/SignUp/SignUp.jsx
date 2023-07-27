import React from "react";
import axios from "axios";
import validationsignup from "./validatesignup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AWN from "awesome-notifications";
import { useNavigate } from "react-router-dom";

//import { BsSignDeadEndFill } from "react-icons/bs";
const notifier = new AWN();

function SignUp() {
  const [userRegister, setUserRegisterData] = React.useState({
    name: "",
    email: "",
    password: "",
    date_of_birth: "",
    dni: "",
    address: "",
    username: "",
    phone_number: "",
  });
  const [errors, setErrors] = React.useState({});
  const navigate = useNavigate();

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setUserRegisterData({
      ...userRegister,
      [name]: value,
    });
    setErrors(
      validationsignup({
        ...userRegister,
        [name]: value,
      })
    );
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    notifier.asyncBlock(
      axios.post(
        "https://nocountrybackend.onrender.com/api/v1/users/signup",
        userRegister
      ),
      (res) => {
        console.log(res);
        notifier.success("Registrado exitosamente!");
        navigate("/accounts");
      },

      (err) => {
        console.log(err);
        notifier.alert("No se ha podido concretar el registro");
      },
      "Validando datos"
    );
    // try {
    //     const response = await axios.post(
    //         "https://nocountrybackend.onrender.com/api/v1/users/signup",
    //         userRegister
    //     );

    //     console.log(response.data);
    // } catch (error) {
    //     console.error(error.response.data);
    // }
  };

  return (
    <div className="bg-dark py-6 flex flex-col justify-center sm:py-12">
      <div className="bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 max-w-4xl  sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-orange to-yellow shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

          <div className="relative px-4 py-10 bg-gray shadow-lg  sm:rounded-3xl sm:p-20">
            <form
              onSubmit={handleRegisterSubmit}
              className="grid grid-cols-2 gap-x-10 gap-1"
            >
              <div className="w-full max-w-xs py-10">
                <div className="relative">
                  <input
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow"
                    placeholder="Nombre Completo"
                    type="text"
                    name="name"
                    value={userRegister.name}
                    onChange={handleRegisterInputChange}
                    id="nameUser"
                  />
                  <p className="error  text-yellow font-bold h-12">
                    {errors.name}
                  </p>
                  <label
                    htmlFor="nameUser"
                    className="absolute mb-2 left-0 font-bold text-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:bottom-10 transition-all peer-focus:bottom-[100%] peer-focus:text-gray-600 peer-focus:text-base"
                  >
                    Nombre Completo
                  </label>
                </div>
              </div>
              <div className="w-full max-w-xs py-10">
                <div className="relative">
                  <input
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={userRegister.email}
                    onChange={handleRegisterInputChange}
                    id="correo"
                  />
                  <p className="error  text-yellow font-bold h-12">
                    {errors.email}
                  </p>
                  <label
                    htmlFor="correo"
                    className="absolute mb-2 left-0 -top-3.5 font-bold text-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-base"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="w-full max-w-xs py-10">
                <div className="relative">
                  <input
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow"
                    placeholder="Contraseña"
                    type="password"
                    name="password"
                    value={userRegister.password}
                    onChange={handleRegisterInputChange}
                    id="pass"
                  />
                  <p className="error  text-yellow font-bold h-12">
                    {errors.password}
                  </p>
                  <label
                    htmlFor="pass"
                    className="absolute mb-2 left-0 -top-3.5 font-bold text-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-base"
                  >
                    Contraseña
                  </label>
                </div>
              </div>
              <div className="w-full max-w-xs py-10">
                <div className="relative">
                  <input
                    id="date"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow"
                    type="date"
                    name="date_of_birth"
                    value={userRegister.date_of_birth}
                    onChange={handleRegisterInputChange}
                  />
                  <label
                    htmlFor="date"
                    className="absolute bottom-[100%] mb-2 left-0 font-bold text-white  text-base peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:bottom-10 transition-all peer-focus:text-gray-600 peer-focus:text-base"
                  >
                    Fecha de Nacimiento
                  </label>
                </div>
              </div>
              <div className="w-full max-w-xs py-10">
                <div className="relative">
                  <input
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow"
                    placeholder="Numero de documento"
                    type="number"
                    name="dni"
                    value={userRegister.dni}
                    onChange={handleRegisterInputChange}
                    id="dniUser"
                  />
                  <label
                    htmlFor="dniUser"
                    className="absolute mb-2 left-0 font-bold text-white  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:bottom-0 transition-all peer-focus:bottom-[100%] peer-focus:text-gray-600 peer-focus:text-base"
                  >
                    Número de Documento
                  </label>
                </div>
              </div>
              <div className="w-full max-w-xs py-10">
                <div className="relative">
                  <input
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow"
                    placeholder="Dirección"
                    type="text"
                    name="address"
                    value={userRegister.address}
                    onChange={handleRegisterInputChange}
                    id="addressUser"
                  />
                  <label
                    htmlFor="addressUser"
                    className="absolute mb-2 left-0 -top-3.5 font-bold text-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-base"
                  >
                    Dirección
                  </label>
                </div>
              </div>
              <div className="w-full max-w-xs py-10">
                <div className="relative">
                  <input
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow"
                    placeholder="Nombre de Usuario"
                    type="text"
                    name="username"
                    value={userRegister.username}
                    onChange={handleRegisterInputChange}
                    id="user"
                  />
                  <p className="error  text-yellow font-bold h-12">
                    {errors.username}
                  </p>
                  <label
                    htmlFor="user"
                    className="absolute left-0 font-bold text-white  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:bottom-12 transition-all peer-focus:bottom-[100%] peer-focus:text-gray-600 peer-focus:text-base"
                  >
                    Nombre de Usuario
                  </label>
                </div>
              </div>
              <div className="w-full max-w-xs py-10">
                <div className="relative">
                  <input
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow"
                    placeholder="Número de Teléfono"
                    type="text"
                    name="phone_number"
                    value={userRegister.phone_number}
                    onChange={handleRegisterInputChange}
                    id="cel"
                  />
                  <p className="error  text-yellow font-bold h-12">
                    {errors.phone_number}
                  </p>
                  <label
                    htmlFor="cel"
                    className="absolute left-0  font-bold text-white  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:bottom-12 transition-all peer-focus:bottom-[100%] peer-focus:text-gray-600 peer-focus:text-base"
                  >
                    Número de Teléfono
                  </label>
                </div>
              </div>
              <div className="flex justify-center items-center col-span-2">
                <button
                  onChange={handleRegisterSubmit}
                  className="bg-gradient-to-r from-orange to-yellow hover:text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
