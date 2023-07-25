import React, { useState } from 'react'
import { FiXCircle } from "react-icons/fi";
import Select from '../../utils/Select.jsx';
import { useForm} from '../../utils/hooks/useForm.js'
import { Authorization, backEnd } from "../../utils/axiosBackEnd";

import AWN from "awesome-notifications"

const ModalContact = function ({ setOpen } ) {
    const [selectedOption, setSelectedOption] = useState('accountNumber')
    const notifier = new AWN();
    
    const userId = sessionStorage.getItem("userId")

    const [formValues, handleInputChange, reset] = useForm({
        account: "",
        selectedRef: "",
        contactName: "",
    });
    const options=[
        {value: 'accountNumber', label: 'NUMERO DE CUENTA'},
        {value: 'cbu', label: 'CBU'},
        {value: 'cvu', label: 'CVU'},
        {value: 'alias', label: 'ALIAS'}
    ]
    
    const { account, contactName } = formValues;
   
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
      
   
    const validationForm = (e)=>{
        e.preventDefault()
        
        if(account === "" || contactName===""){
            notifier.tip('ingresa los datos')
        }else {
            handleSubmit()
            reset()
        }
    }


    const handleSubmit = () => {
        const body ={
            validation: selectedOption,
            validationValue: account,
            contactName: contactName, 
        }

        backEnd
          .post(
            `users_contacs/${userId}/${account}`,
            body,
            Authorization()
          )
          .then((res) => {
            notifier.success('Se agrego correctamente')
            console.log(res.data);
            setOpen(false)
          })
          .catch((err) => {
            notifier.alert('No se pudo agregar el contacto')
            console.log(err);
          });
        reset();
        setOpen(false)
    }

    


    return (
        <div className='fixed w-full h-screen z-50 bg-opacity-30  top-0 right-0 flex justify-center items-center'>
            <div className="bg-gray rounded-lg shadow relative dark:bg-gray-700">
                <div className="flex justify-end p-2">
          
                    <button type="button" className="right-2 top-2 absolute text-white text-3xl" onClick={() => setOpen(false)}>
                        <FiXCircle />
                    </button>
                </div>
                <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" onSubmit={validationForm}>
                    <h3 className="uppercase text-xl font-medium text-gray-900 dark:text-white">agregar contacto</h3>
                    <div>
                        <h1 className="text-base font-bold  text-white block mb-2">Elige como quieres agregar al nuevo contacto</h1>
                        <div className='grid grid-cols-2 gap-2'>
           
           
                        <Select value={selectedOption} onChange={handleOptionChange} options={options} />
                        <input type="text" name="account" value={account} onChange={handleInputChange} className="peer placeholder-transparent py-3 mb-4 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow" required="" />
                    </div>
                    </div>
                    <div className='relative'>
                        <input autoComplete="off" className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow" placeholder="Nombre de Contacto" required=""
                            type="text"
                            name="contactName"
                            value={contactName}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="contactName" className="uppercase absolute left-0 -top-3.5 font-bold text-white  text-xl peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-base">Nombre de contacto</label>
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalContact
