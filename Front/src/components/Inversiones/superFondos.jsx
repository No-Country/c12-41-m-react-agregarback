import React from 'react'
import { AiOutlineLineChart } from "react-icons/ai"
import SuperFondosModal from "./SuperFondosModal"
const superFondos = () => {

  return (
    <div className='bg-dark shadow-md rounded-md p-4'>
      <span className="inline-block bg-gradient-to-r from-yellow to-orange rounded-full p-2">
        <AiOutlineLineChart size={50} className="text-dark" />
      </span>
      <h2 className="text-xl font-semibold mb-2">Fondos de Inversiones</h2>
      <p className="text-gray-500 mb-4">
        En Acces Bank podes acceder a la mejor y mas accesible cotizacion las 24hs!
      </p>
      <SuperFondosModal data={SuperFondosModal} />
    </div>
  )
}

export default superFondos
