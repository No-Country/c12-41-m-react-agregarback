import React from 'react'
import { useForm } from '../../utils/hooks/useForm.js'

const ModalContact = function ({ setOpen }) {

    const [formValues, handleInputChange] = useForm({
        account: "",
        selectedRef: "",
      });
    
    const { selectedRef, account } = formValues;
    console.log(formValues)

    /* const handleSubmit =(e) => {
      e.preventDefault()
        
      }*/


    return (
        <div classNameName='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
            <div className="bg-gray rounded-lg shadow relative dark:bg-gray-700">
                <div className="flex justify-end p-2">
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" onClick={() => setOpen(false)}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                    <h3 className="uppercase text-xl font-medium text-gray-900 dark:text-white">agregar contacto</h3>
                    <div>
                        <h1 className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Elige como quieres agregar al nuevo contacto</h1>
                       <select name="selectedRef" value={selectedRef} onChange={handleInputChange} className="block py-3 mb-4 px-0 w-full text-sm text-gray-500 bg-gray border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-yellow focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Selecciona</option>
                            <option value="numberAccount">Numero de cuenta</option>
                            <option value="CVU" >CVU</option>
                            <option value="Alias" >Alias</option>
                            <option value="CBU">CBU</option>

                        </select>
    
                        <input type="text" name="account" value={account} onChange={handleInputChange} className="bg-gray border mt-6 border-yellow text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                    </div>
                    <button type="submit" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalContact
