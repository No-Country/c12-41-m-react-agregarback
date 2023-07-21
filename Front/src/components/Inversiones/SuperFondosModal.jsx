import React, { useState } from 'react'

const SuperFondosModal = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <button
                className="h-10 px-6 mr-6 font-mediutransition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark "
                onClick={toggleModal}
            >
                Ver los Fondos
            </button>

            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="bg-orange p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Fondos de Inversiones</h2>
                        <p className="text-gray-500 mb-4">Los fondos de inversión permiten a los inversores diversificar su dinero en una amplia gama de activos, lo que reduce el riesgo asociado con la inversión en un solo activo.</p>

                        <button
                            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
                            onClick={toggleModal}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SuperFondosModal
