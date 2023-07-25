import { useState, useEffect } from "react";
import EditableField from "./EditableField";
import { ClimbingBoxLoader } from "react-spinners";
import axios from "axios";
import AWN from "awesome-notifications"
import ModalChangePassword from "./ModalChangePassword";
const notifier = new AWN();

const formatDate = (dateInput) => {
    const date = new Date(dateInput);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

    return `${day < 10 ? "0" : ""}${day}-${month < 10 ? "0" : ""}${month}-${year}`;
}


const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [showModalChangePassword, setShowModalChangePassword] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const headers = {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        };
        await notifier.asyncBlock(axios.patch(`https://nocountrybackend.onrender.com/api/v1/users/${sessionStorage.getItem('userId')}/updateUser`, userData, { headers }),
            "Datos actualizados correctamente",
            err => { console.log(err); notifier.alert('Hubo un error al intentar actualizar los datos') },
            "Actualizando datos..."
        )
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };
    useEffect(() => {

        const getUserbyId = async () => {
            const headers = {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            };
            const response = await axios.get(`https://nocountrybackend.onrender.com/api/v1/users/${sessionStorage.getItem('userId')}
            `, { headers })
            setUserData(response.data)
        }
        getUserbyId();
    }, []);

    return (
        <div className="bg-gray w-full rounded-lg p-24">
            {userData === null ?
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
                            <EditableField name="date_of_birth" label="Fecha de nacimiento" value={formatDate(userData.date_of_birth)} onChangeHandler={handleInputChange} type="text" editable={false} />
                        </div>
                        <div className="flex flex-col gap-8">
                            <EditableField name="username" label="Usuario" value={userData.username} regex={/^[a-zA-Z0-9_]{2,20}$/} errorMsg="Usuario inválido" onChangeHandler={handleInputChange} type="text" editable={true} />
                            <EditableField name="email" label="Correo electrónico" value={userData.email} regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} errorMsg="Correo inválido" onChangeHandler={handleInputChange} type="text" editable={true} />
                            <EditableField name="phone_number" label="Teléfono" value={userData.phone_number} onChangeHandler={handleInputChange} type="number" editable={true} />
                            <div className="mb-10 self-start cursor-pointer ease-in duration-100 hover:text-yellow" onClick={() => setShowModalChangePassword(true)}>Cambiar contraseña</div>

                        </div>
                        <button type="submit" className="justify-self-start h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none">Actualizar datos</button>
                    </form>
                    {showModalChangePassword && (
                        <ModalChangePassword setShowModalChangePassword={setShowModalChangePassword} />
                    )}
                </>
            }
        </div>
    )
}

export default Profile