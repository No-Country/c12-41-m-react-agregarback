import React, { useState } from "react";

const PlazoFijoModal = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };



  return (
    <>
      <button className="h-10 px-6 mr-6 font-mediutransition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark "
        onClick={toggleModal}
      >Invertir en plazos fijos
      </button>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-orange p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Simulador Plazo Fijo</h2>
            <p>Ahora podés constituir un depósito a plazo fijo sin ser cliente/a del Banco Provincia.
            </p>
            <button className="btn btn-dropdown ">Tradicional</button>
            <p className="text-gray-500 mb-4">{data}</p>

            <button
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
              onClick={toggleModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlazoFijoModal;
