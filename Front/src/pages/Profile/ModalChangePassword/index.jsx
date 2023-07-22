// /:userId/:accountId
// body {type,category}

import { FiXCircle } from "react-icons/fi";
import AWN from "awesome-notifications";
import axios from "axios";
import { useState } from "react";
const notifier = new AWN();
const ModalChangePassword = ({ setShowModalChangePassword }) => {
    const [data, setData] = useState({
        oldPassword: "",
        newPassword: ""
    })

    const handleChangeInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const headers = {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        await notifier.asyncBlock(
            axios.patch(`https://nocountrybackend.onrender.com/api/v1/users/${sessionStorage.getItem('userId')}/changePassword`, data, { headers }),
            () => {
                notifier.success(`Operación exitosa`);
                setShowModalChangePassword(false);
            },
            err => {
                console.log(err);
                notifier.alert(`Ocurrió un error al cambiar la contraseña, intentelo de nuevo más tarde`);
                setShowModalChangePassword(false)
            },
            `Cambiando contraseña`
        )
    }
    return (
        <>
            <div className="h-screen w-screen fixed top-0 left-0 z-50 z-[200] flex justify-center items-center bg-[rgba(1,1,1,0.6)]">
                <div className="w-[350px] rounded-lg bg-dark p-3 flex flex-col gap-6">
                    <FiXCircle className="self-end text-3xl" onClick={() => setShowModalChangePassword(false)} />
                    <h3 className="font-semibold text-2xl">Cambiar contraseña</h3>
                    <div className="pb-6">

                        <div>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center justify-center gap-8">
                                <div className="flex flex-col align-bottom w-[80%] text-lg">
                                    <label htmlFor="oldPassword" className="block text-left  font-semibold">Contraseña actual</label>
                                    <input id="oldPassword" type="text" onChange={handleChangeInput} value={data.oldPassword} name="oldPassword" className="bg-dark border-yellow border-b-2 focus:outline-0" />
                                </div>
                                <div className="flex flex-col align-bottom w-[80%] text-lg">
                                    <label htmlFor="newPassword" className="block text-left  font-semibold">Contraseña nueva</label>
                                    <input id="newPassword" type="text" onChange={handleChangeInput} value={data.newPassword} name="newPassword" className="bg-dark border-yellow border-b-2 focus:outline-0" />
                                </div>

                                <button type="submit" className="w-[50%] p-3 self-center font-medium text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none">
                                    Enviar solicitud
                                </button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalChangePassword