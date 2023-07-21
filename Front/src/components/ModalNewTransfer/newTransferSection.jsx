import { useState } from "react";
import ContactCard from "./ContactCard";
import ModalForNewTransfer from "./ModalForNewTransfer";
import useFetch from "../../utils/useFetch";
import ThrowModalError from "./ThrowModalError";
import { GridLoader } from "react-spinners";

const Transfer = () => {
  const [currentContact, setCurrentContact] = useState();
  const [isModalActive, setIsModalActive] = useState(false);

  const userId = sessionStorage.userId;
  const { data, error } = useFetch(`users_contacs/${userId}`);

  return (
    <div className="">
      <div className="rounded-lg bg-gray h-full p-10">
        <div className="bg-dark h-full mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-2 py-4">
            <div className="">
              <h2 className="font-bold px-2 py-3 leading-tight">
                Transferencias
              </h2>
              <h3 className="font-normal px-1 py-3">
                Transfiere a un contacto de manera rapida y segura
              </h3>
              <input
                type="text"
                placeholder="Buscar en la agenda"
                className="my-2 w-full text-sm bg-grey-light text-gray rounded h-10 p-3 focus:outline-none"
              />
              <ContactCard
                setCurrentContact={setCurrentContact}
                contacts={data.contacts}
                error={error}
              />
            </div>
          </div>
          <div className="sm:flex bg-grey-light items-center justify-center px-2 py-4">
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
