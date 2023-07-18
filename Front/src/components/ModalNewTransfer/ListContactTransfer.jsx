import { useState } from "react";
import ModalContact from "./ModalContact"
import ContactCard from "./ContactCard";

const ListContactTransfer = () => {
  const [open, setOpen]=useState(false)
  return (
    <div className="">
      <div className="rounded-lg bg-gray h-full p-10">
        <div className="bg-dark mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-2 py-4">
            <div className="flex-grow">
              <h2 className="font-bold px-2 py-3 leading-tight">
                Transferencias
              </h2>
              <h3 className="font-normal px-1 py-3">
                Transferí a un contacto de la agenda o a un nuevo destinatario
              </h3>
              <input
                type="text"
                placeholder="Buscar en la agenda"
                className="my-2 w-full text-sm bg-grey-light text-gray rounded h-10 p-3 focus:outline-none"
              />
              <ContactCard />
            </div>
          </div>
          <div className="sm:flex bg-grey-light sm:items-center px-2 py-4">
            <div className="flex-grow text-center">
              <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none" onClick={()=>setOpen(true)}>
                Nuevo Contacto
              </button>
              {open && <ModalContact setOpen={setOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContactTransfer;
