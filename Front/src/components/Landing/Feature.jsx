import React from 'react'
import {  FaMoneyBillTransfer,  FaMoneyBillTrendUp } from 'react-icons/fa6';
import {  MdPayments} from 'react-icons/md';
const Feature = () => {
  return (
<div className="flex items-center justify-center">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">  
        <div className="relative bg-dark py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className="mt-8">
            <span className='flex items-center justify-center  ' >
            <FaMoneyBillTransfer size={50} color='orange' />
          </span>
                <p className="text-xl font-semibold my-2 text-white">Transferencias</p>
            </div>
        </div>
        <div className="relative bg-dark py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className="mt-8">
            <span className='flex items-center justify-center  ' >
            <MdPayments size={50} color='orange' />
          </span>
                <p className="text-xl font-semibold my-2 text-white">Pagos</p>
            </div>
        </div>
        <div className="relative bg-dark py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className="mt-8">
            <span className='flex items-center justify-center  ' >
            <FaMoneyBillTrendUp size={50} color='orange' />
          </span>
                <p className="text-xl font-semibold my-2 text-white">Inversiones</p>
            </div>
        </div>
        </div>
</div>

  )
}

export default Feature
