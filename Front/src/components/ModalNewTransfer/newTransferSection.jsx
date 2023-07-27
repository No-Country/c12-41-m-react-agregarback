import { useState } from "react";
import useFetch from "../../utils/useFetch";
import ContactCard from "./ContactCard";
import FormAndListContac from "./FormAndListContac";
import ModalForNewTransfer from "./ModalForNewTransfer";

const Transfer = ({ data, error }) => {
  const [currentContact, setCurrentContact] = useState();
  const [isModalActive, setIsModalActive] = useState(false);
  const [listOfContactsFiltered, setListOfContactsFiltered] = useState();


  return (
    <div className="mb-10">
      <div className="rounded-lg bg-gray">
        <div className="bg-dark h-full grid mx-auto max-w-[650px] shadow-lg rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center justify-center px-2 py-4">
            <div className="w-full">
              <h2 className="font-bold px-2 py-3 leading-tight uppercase text-yellow text-2xl">
                Transferencias
              </h2>
              <h3 className="font-normal px-1 py-3 h-[80px]">
                Transfiere a un contacto de manera rapida y segura
              </h3>
              <FormAndListContac
                contacts={data.contacts}
                setListOfContactsFiltered={setListOfContactsFiltered}
              />
              <ContactCard
                setCurrentContact={setCurrentContact}
                contacts={listOfContactsFiltered || data.contacts}
                error={error}
              />
            </div>
          </div>
          <div className="sm:flex bg-grey-light items-center justify-center px-2 py-4 mb-5 self-end">
            <button
              onClick={() => setIsModalActive(true)}
              className="inline-flex items-center justify-center h-12 px-6 mx-auto font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none"
            >
              Nueva Transferencia
            </button>
          </div>
        </div>
      </div>
      <div className={`${isModalActive ? "visible" : "invisible"}`}>
        <ModalForNewTransfer
          setIsModalActive={setIsModalActive}
          currentContact={currentContact}
          setCurrentContact={setCurrentContact}
        />
      </div>
    </div>
  );
};

export default Transfer;
