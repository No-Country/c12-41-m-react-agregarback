import React, { useState, useEffect } from "react";
import PlazoFijoModal from "./PlazoFijoModal";
import { FaPiggyBank } from "react-icons/fa"

const plazoFijo = () => {
    const [operaciones, setOperaciones] = useState(() => {
        const storedOperaciones = sessionStorage.getItem("operaciones");
        return storedOperaciones ? JSON.parse(storedOperaciones) : [];
    });
    const agregarOperacion = (nuevaOperacion) => {
        setOperaciones([...operaciones, nuevaOperacion]);
    };

    useEffect(() => {

        sessionStorage.setItem("operaciones", JSON.stringify(operaciones));
    }, [operaciones]);


    return (
        <div className="bg-dark shadow-md rounded-md p-4">
            <span className="inline-block bg-gradient-to-r from-yellow to-orange rounded-full p-2">
                <FaPiggyBank size={50} className="text-dark" />
            </span>
            <h2 className="text-xl font-semibold mb-2">Plazo Fijo</h2>
            <p className="p-3 opacity-50 text-sm">
                Es una alternativa de inversión en pesos en la que se pacta el plazo y la tasa de interés desde un inicio.
            </p>


            <div className="border-gray-300 pt-4">


                

                <div className="overflow-x-auto flex justify-center ">

                    <table className="table-auto bg-dark rounded m-1">
                        <thead>
                            <tr>
                                <th className="font-semibold p-2">Tipo de Operacion</th>
                                <th className="font-semibold p-2">Monto</th>
                                <th className="font-semibold p-2">Estado</th>
                                <th className="font-semibold p-2">Plazo</th>
                                <th className="font-semibold p-2">Tasa Anual</th>
                            </tr>
                        </thead>
                        <tbody>
                            {operaciones.map((operacion, index) => (
                                <tr className="font-semibold" key={index}>
                                    <td className="p-2">{operacion.tipo}</td>
                                    <td className="p-2">{operacion.monto}</td>
                                    <td className="p-2">{operacion.estado}</td>
                                    <td className="p-2">{operacion.plazo}</td>
                                    <td className="p-3">{operacion.tasa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <PlazoFijoModal agregarOperacion={agregarOperacion} />

            </div>
        </div>
    );
};

export default plazoFijo;
