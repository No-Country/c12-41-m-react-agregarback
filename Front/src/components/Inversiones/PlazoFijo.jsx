import React, { useState } from "react";

import PlazoFijoModal from "./PlazoFijoModal";
const plazoFijo = () => {

    const ejemplosTasasInteres = [
        { plazo: "30 días", tasa: 2.5 },
        { plazo: "60 días", tasa: 2.8 },
        { plazo: "90 días", tasa: 3.0 },
    ];


    return (
        <div className="bg-dark shadow-md rounded-md p-4">

            <h2 className="text-xl font-semibold mb-2">Plazo Fijo</h2>
            <p className="text-gray-500 mb-4">

            </p>


            <div className="border-t border-gray-300 pt-4">
                <h3 className="text-lg font-semibold mb-2">Ejemplos de Tasas de Interés</h3>
                <ul className="list-disc list-inside">
                    {ejemplosTasasInteres.map((ejemplo, index) => (
                        <li key={index}>
                            <span className="font-semibold">{ejemplo.plazo}: </span>
                            {ejemplo.tasa} % {/* Muestra los ejemplos de tasas de interés */}
                        </li>
                    ))}
                </ul>
              
                <PlazoFijoModal data={PlazoFijoModal} />

            </div>
        </div>
    );
};

export default plazoFijo;
