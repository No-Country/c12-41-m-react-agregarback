import { useState } from "react";
import ContactCard from "./ContactCard";
import FormAndListContac from "./FormAndListContac";
import ModalContact from "./ModalContact";

const ListContactTransfer = ({ data, handleRefetchContacts, error }) => {
  const [listOfContactsFiltered, setListOfContactsFiltered] = useState();
  const [open, setOpen] = useState(false);


  return (
    <div className="mb-10">
      <div className="rounded-lg bg-gray">
        <div className="bg-dark h-full grid mx-auto max-w-[650px] shadow-lg rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-2 py-4">
            <div className="flex-grow">
              <h2 className="uppercase text-yellow text-2xl font-bold px-2 py-3 ">
                Contactos
              </h2>
              <h3 className="font-normal px-1 py-3 h-[80px]">
                Transferí a un contacto de la agenda o a un nuevo destinatario
              </h3>
              <FormAndListContac
                contacts={data?.contacts}
                setListOfContactsFiltered={setListOfContactsFiltered}
              />
              <ContactCard
                setCurrentContact={""}
                contacts={listOfContactsFiltered || data.contacts}
                error={error}
              />
            </div>
          </div>
          <div className="sm:flex bg-grey-light sm:items-center px-2 py-4 self-end mb-5">
            <div className="flex-grow text-center">
              <button
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none"
                onClick={() => setOpen(true)}
              >
                Nuevo Contacto
              </button>
              {open && (
                <ModalContact
                  setOpen={setOpen}
                  handleAddContact={handleRefetchContacts}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContactTransfer;
