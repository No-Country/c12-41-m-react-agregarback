import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../utils/hooks/useForm.js'
import { addContact } from '../../redux/contactSlice.js';
import AWN from "awesome-notifications"

const ModalContact = function ({ setOpen }) {
    const notifier = new AWN();
    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        account: "",
        selectedRef: "",
        contactName: "",
    });

    const { selectedRef, account, contactName } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault()
        if(account === "" || contactName===""){
            notifier.tip('ingresa los datos', {durations: {tip: 0}})
        }
        const newContact = {
            selectedRef, account, contactName
        }
        dispatch(addContact(newContact))
        /*
        .unwrap()
        .then(() => {
          notifiersuccess('Se agrego correctamente', {durations: {success: 0}})
          
        })
        .catch((error) => {
          notifier.alert('Error server', {durations: {alert: 0}})
        });*/
        reset();
        setOpen(false)
    }




    return (
        <div className='fixed w-full h-screen z-50 bg-opacity-30  top-0 right-0 flex justify-center items-center'>
            <div className="bg-gray rounded-lg shadow relative dark:bg-gray-700">
                <div className="flex justify-end p-2">
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" onClick={() => setOpen(false)}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" onSubmit={handleSubmit}>
                    <h3 className="uppercase text-xl font-medium text-gray-900 dark:text-white">agregar contacto</h3>
                    <div>
                        <h1 className="text-sm font-medium  text-gray-900 block mb-2 dark:text-gray-300">Elige como quieres agregar al nuevo contacto</h1>
                        <div className='grid grid-cols-2 gap-2'>
                        <select name="selectedRef" value={selectedRef} onChange={handleInputChange} className="block py-3 mb-4 w-30 font-bold text-sm text-gray-500 bg-gray border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-yellow focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Selecciona</option>
                            <option value="accountNumber">Numero de cuenta</option>
                            <option value="cbu">CBU</option>
                            <option value="cvu" >CVU</option>
                            <option value="alias" >Alias</option>
                        </select>
                        <input type="text" name="account" value={account} onChange={handleInputChange} className="peer placeholder-transparent py-3 mb-4 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow" required="" />
                    </div>
                    </div>
                    <div className='relative'>
                        <input autoComplete="off" className="peer placeholder-transparent h-10 w-full border-b-2 border-yellow  bg-gray text-white focus:outline-none focus:border-yellow" placeholder="Numero de documento"
                            type="text"
                            name="contactName"
                            value={contactName}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="contactName" className="absolute left-0 -top-3.5 font-bold text-white  text-xl peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-base">Nombre de contacto</label>
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalContact
