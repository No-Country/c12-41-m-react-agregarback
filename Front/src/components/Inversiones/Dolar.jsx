import React from 'react'
import DolarModal from './dolarModal'
import { FaMoneyBillTransfer } from 'react-icons/fa6'

const Dolar = () => {
    return (
        <div className="bg-dark shadow-md rounded-md p-4">
            <span className="inline-block bg-gradient-to-r from-yellow to-orange rounded-full p-2">
                <FaMoneyBillTransfer size={50} className="text-dark" />
            </span>
            <h2 className="text-xl font-semibold mb-2">Cotizacion del Dolar</h2>
            <p className="p-3 opacity-50 text-sm">
                En Acces Bank podes acceder a la mejor y mas accesible cotizacion las 24hs!
            </p>
            <DolarModal data={DolarModal} />
        </div>
    )
}

export default Dolar
