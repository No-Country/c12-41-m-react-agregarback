// /:userId/:accountId
// body {type,category}

import { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

const generateToken = () => {
    const caracteres = "0123456789";
    let token = "";

    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        token += caracteres.charAt(indiceAleatorio);
    }

    return token;
}

const TokenModal = ({ setShowTokenModal }) => {
    const [token, setToken] = useState(localStorage.getItem('securityToken'));
    const [counter, setCounter] = useState(60);
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (counter == 0) {
            const token = generateToken();
            setToken(token)
            localStorage.setItem('securityToken', token)
            setCounter(60)
        }
        return () => clearInterval(timer);
    }, [counter]);

    if (!localStorage.getItem('securityToken')) {
        const token = generateToken();
        setToken(token)
        localStorage.setItem('securityToken', token)
    }
    return (
        <>
            <div className="h-screen w-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-[rgba(1,1,1,0.6)]" >
                <div className="w-[350px] border-white border-2 rounded-lg bg-white p-3 text-dark flex flex-col gap-6" >
                    <RiCloseLine className="self-end text-dark text-3xl" onClick={() => setShowTokenModal(false)} />
                    <h3 className="font-semibold">Token de seguridad</h3>
                    <div className="pb-6">{token}</div>
                    <p className="pb-10">Tiempo restante: {counter}</p>
                </div>
            </div>
        </>
    )
}

export default TokenModal