// /:userId/:accountId
// body {type,category}

import { RiCloseLine } from "react-icons/ri";
import AWN from "awesome-notifications";
import axios from "axios";
import { useState } from "react";
const notifier = new AWN();
const ModalNewCard = ({ setShowNewCardModal, accounts }) => {



    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {}
        const headers = {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        await notifier.asyncBlock(
            axios.post("https://nocountrybackend.onrender.com/api/v1/account/create_account", body, { headers }),
            () => {
                notifier.success(`Solicitud aceptada, recargue la página para poder administrar la nueva cuenta`);
                setShowNewCardModal(false);
            },
            err => {
                console.log(err);
                notifier.alert(`Error al crear cuenta, intentelo de nuevo más tarde`);
                setShowNewCardModal(false)
            },
            `Preparando nueva cuenta`
        )
    }
    return (
        <>
            <div className="h-screen w-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-[rgba(1,1,1,0.6)]">
                <div className="w-[350px] border-white border-2 rounded-lg bg-white p-3 text-dark flex flex-col gap-6">
                    <RiCloseLine className="self-end text-dark text-3xl" onClick={() => setShowNewCardModal(false)} />
                    <h3 className="font-semibold">SOLICITAR NUEVA TARJETA</h3>
                    <div className="pb-6">

                        <div>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <p className="p-3 opacity-50 text-sm">En ocasiones, la solicitud puede tardar varios días en ser aceptada.</p>
                                <button type="submit" className="w-[50%] self-center bg-gray text-white hover:bg-yellow hover:text-dark rounded-md shadow-xl py-3 my-3">
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