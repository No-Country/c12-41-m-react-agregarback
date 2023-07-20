import { useState, useEffect } from "react";
import { getUserInfo } from "../../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import EditableField from "./EditableField";
import { ClimbingBoxLoader } from "react-spinners";
const Profile = () => {
    const dispatch = useDispatch();
    const { status, data } = useSelector((state) => state.user);
    const [userData, setUserData] = useState({
        name: data.name,
        email: data.email,
        password: data.password,
        date_of_birth: data.date_of_birth,
        dni: data.dni,
        address: data.address,
        username: data.username,
        phone_number: data.phone_number
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };
    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);

    return (
        <div className="bg-gray w-full rounded-lg p-24">
            {status == "loading" ?
                <div className="flex flex-row justify-center items-center h-full">
                    <ClimbingBoxLoader color="white" />
                </div> :
                <>
                    <h2 className="text-left text-yellow text-4xl pb-6 font-semibold lg:text-5xl">Datos de usuario</h2>
                    <form className="lg:grid lg:grid-cols-2 lg:py-10 lg:gap-10" noValidate onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-8">
                            <EditableField name="name" label="Nombre" value={userData.name} onChangeHandler={handleInputChange} type="text" editable={false} />
                            <EditableField name="dni" label="DNI" value={userData.dni} onChangeHandler={handleInputChange} type="number" editable={false} />
                            <EditableField name="address" label="Dirección" value={userData.address} onChangeHandler={handleInputChange} type="text" editable={false} />
                            <EditableField name="date_of_birth" label="Fecha de nacimiento" value={userData.date_of_birth} onChangeHandler={handleInputChange} type="text" editable={false} />
                        </div>
                        <div className="flex flex-col gap-8">
                            <EditableField name="username" label="Usuario" value={userData.username} regex={/^[a-zA-Z0-9_]{2,20}$/} errorMsg="Usuario inválido" onChangeHandler={handleInputChange} type="text" editable={true} />
                            <EditableField name="email" label="Correo electrónico" value={userData.email} regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} errorMsg="Correo inválido" onChangeHandler={handleInputChange} type="text" editable={true} />
                            <EditableField name="phone_number" label="Teléfono" value={userData.phone_number} onChangeHandler={handleInputChange} type="number" editable={true} />
                            {/* <EditableField name="password" label="Contraseña" value={userData.password} regex={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/} errorMsg="Contraseña inválida" onChangeHandler={handleInputChange} type="password" editable={true} /> */}
                        </div>
                        <button type="submit" className="justify-self-start h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none">Actualizar datos</button>
                    </form>
                </>
            }
        </div>
    )
}

export default Profile