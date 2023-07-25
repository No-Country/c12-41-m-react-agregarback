// /:userId/:accountId
// body {type,category}

import { FiXCircle } from "react-icons/fi";
import AWN from "awesome-notifications";
import axios from "axios";
import { useState } from "react";
const notifier = new AWN();
const ModalNewCard = ({ setShowNewCardModal, account }) => {
    const [cardData, setCardData] = useState({ type: "visa", category: "credito" })
    const handleChangeSelect = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const headers = {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        await notifier.asyncBlock(
            axios.post(`https://nocountrybackend.onrender.com/api/v1/card/${sessionStorage.getItem('userId')}/${account.id}`, cardData, { headers }),
            () => {
                notifier.success(`Solicitud aceptada, recargue la página para poder visualizar la tarjeta`);
                setShowNewCardModal(false);
            },
            err => {
                console.log(err);
                notifier.alert(`Error al crear cuenta, intentelo de nuevo más tarde`);
                setShowNewCardModal(false)
            },
            `Preparando nueva tarjeta`
        )
    }
    return (
        <>
            <div className="h-screen w-screen fixed top-0 left-0 z-[200] flex justify-center items-center bg-[rgba(1,1,1,0.6)]">
                <div className="w-[350px] rounded-lg bg-dark p-3 flex flex-col gap-6">
                    <FiXCircle className="self-end text-3xl cursor-pointer" onClick={() => setShowNewCardModal(false)} />
                    <h3 className="font-semibold">SOLICITAR NUEVA TARJETA</h3>
                    <div className="pb-6">

                        <div>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center">
                                <div className="flex flex-col align-bottom w-[75%] text-lg">
                                    <label htmlFor="type" className="block text-left  font-semibold">Seleccione tipo</label>
                                    <select id="type" name="type" onChange={handleChangeSelect} className="bg-dark focus:outline-0">
                                        <option value="visa">Visa</option>
                                        <option value="masterCard">MasterCard</option>
                                        <option value="americanExpress">AmericanExpress</option>
                                    </select>
                                </div>
                                <div className="flex flex-col align-bottom w-[75%] text-lg">
                                    <label htmlFor="category" className="block text-left  font-semibold">Seleccione categoría</label>
                                    <select id="category" defaultValue="credito" name="category" onChange={handleChangeSelect} className="bg-dark focus:outline-0">
                                        <option value="credito">Crédito</option>
                                        <option value="debito">Debito</option>
                                    </select>
                                </div>
                                <p className="p-3 opacity-50 text-sm">Se le notificará por mail el día y horario estimado en que llegará la tarjeta física a su domicilio.</p>
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

export default ModalNewCard