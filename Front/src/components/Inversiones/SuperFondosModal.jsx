import React, { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';
import AWN from "awesome-notifications";
import { BsArrowUpShort } from "react-icons/bs"

const SuperFondosModal = ({ agregarFondo }) => {
    const notifier = new AWN();
    const [showModal, setShowModal] = useState(false);
    const [capital, setCapital] = useState("");
    const [selectedOption, setSelectedOption] = useState("");


    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleRealizarFondos = () => {
        const selectedFondo = fondosactuales.find((fondo) => fondo.nombre === selectedOption);
        if (!selectedFondo) {
            notifier.alert("No se encontró el fondo seleccionado en la lista actual de fondos.");
            return;
        }


        const nuevoFondo = {
            tipo: selectedFondo.tipo,
            nombreFondo: selectedFondo.nombre,
            valorcuotaparte: selectedFondo.valorcuotaparte,
            ultdia: selectedFondo.ultdia,
            ult30dias: selectedFondo.ult30dias,
            ult90dias: selectedFondo.ult90dias,
            ultaño: selectedFondo.ultaño,
            monto: `$ ${capital}`,
            estado: 'Pendiente',
        };

        agregarFondo(nuevoFondo);
        toggleModal(false);
        notifier.tip("Operación pendiente, en las próximas 24hs evaluaremos y nos contactaremos con usted para realizar la inversión!");
    };

    const handleCapitalChange = (e) => {
        setCapital(e.target.value);
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const fondosactuales = [
        {
            tipo: "Mercado de dinero en pesos",
            nombre: "Super Ahorro $",
            valorcuotaparte: "$5287",
            ultdia: "0,21%",
            ult30dias: "7,19%",
            ult90dias: "20,93%",
            ultaño: "87,97%",
        },
        {
            tipo: "Mercado de dinero en pesos",
            nombre: "Super Ahorro $ PLUS A",
            valorcuotaparte: "$166",
            ultdia: "0,21%",
            ult30dias: "7,17%",
            ult90dias: "21,93%",
            ultaño: "92,13%",
        },
        {
            tipo: "Renta Fija en pesos",
            nombre: "Super Fondo Equilibrado",
            valorcuotaparte: "$15.287",
            ultdia: "0,37%",
            ult30dias: "7,19%",
            ult90dias: "22,93%",
            ultaño: "99,97%",
        },
        {
            tipo: "Renta Fija en pesos",
            nombre: "Super Bonos A",
            valorcuotaparte: "$259",
            ultdia: "0,14%",
            ult30dias: "4,19%",
            ult90dias: "21,93%",
            ultaño: "87,27%",
        },
        {
            tipo: "Renta Variable en Pesos",
            nombre: "Super Fondo Acciones $",
            valorcuotaparte: "$74,655",
            ultdia: "1,21%",
            ult30dias: "8,42%",
            ult90dias: "92,93%",
            ultaño: "144,97%",
        },
        {
            tipo: "Renta Variable en Pesos",
            nombre: "Super Fondo Renta Variable $",
            valorcuotaparte: "$805.30",
            ultdia: "0,91%",
            ult30dias: "11,42%",
            ult90dias: "40,93%",
            ultaño: "130,97%",
        },
        {
            tipo: "Renta Mixta en pesos",
            nombre: "Super Gestion Balanceado A $",
            valorcuotaparte: "$60.30",
            ultdia: "0,75%",
            ult30dias: "6,42%",
            ult90dias: "32,93%",
            ultaño: "119,97%",
        },
    ];



    return (
        <div>
            <button
                className="h-10 px-6 mr-6 font-mediutransition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark "
                onClick={toggleModal}
            >
                Ver los Fondos
            </button>

            {showModal && (
                <div className='z-[1000] h-screen w-screen fixed top-0 left-0  flex justify-center items-center bg-[rgba(1,1,1,0.6)]'>
                    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">

                        <div className="w-[80%] h-[90%] rounded-lg bg-dark p-3 flex flex-col gap-6 ">
                            <FiXCircle className="self-end text-3xl" onClick={() => setShowModal(false)} />
                            <h2 className="text-xl font-semibold mb-4">Fondos de Inversiones</h2>
                            <p className="text-gray-500 mb-4">Los fondos de inversión permiten a los inversores diversificar su dinero en una amplia gama de activos, lo que reduce el riesgo asociado con la inversión en un solo activo.</p>
                            <div className="overflow-x-auto flex justify-center ">
                                <table className="table-auto bg-dark rounded m-1">
                                    <thead>
                                        <tr>
                                            <th className="font-semibold p-2">Tipo de Fondo</th>
                                            <th className="font-semibold p-2">Nombre Fondo</th>
                                            <th className="font-semibold p-2">Valor Cuota Parte</th>
                                            <th className="font-semibold p-2">Ultimo Dia</th>
                                            <th className="font-semibold p-2">Ultimos 30 días</th>
                                            <th className="font-semibold p-2">Ultimos 90 días</th>
                                            <th className="font-semibold p-2">Ultimo año</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fondosactuales.map((fondo, index) => (
                                            <tr className="font-semibold" key={index}>
                                                <td className="p-2 row">{fondo.tipo}</td>
                                                <td className='p-2 row'> {fondo.nombre}</td>
                                                <td className="p-2 row">{fondo.valorcuotaparte}</td>
                                                <td className="p-2 row">
                                                    {fondo.ultdia}
                                                    <span>
                                                        <BsArrowUpShort color='green' />
                                                    </span>
                                                </td>
                                                <td className="p-2 row ">
                                                    {fondo.ult30dias}
                                                    <span>
                                                        <BsArrowUpShort color='green' />
                                                    </span>
                                                </td>
                                                <td className="p-2 row">
                                                    {fondo.ult90dias}
                                                    <span>
                                                        <BsArrowUpShort color='green' />
                                                    </span>
                                                </td>
                                                <td className="p-2 row-auto">
                                                    {fondo.ultaño}
                                                    <span>
                                                        <BsArrowUpShort color='green' />
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='block'>

                                <label htmlFor="capital">Monto del Capital:</label>
                                <div className="">
                                    <input className="bg-gray text-white rounded-md border-black p-1"
                                        type="number"
                                        id="capital"
                                        value={capital}
                                        onChange={handleCapitalChange}
                                    />
                                </div>
                                <label htmlFor="tipo">Tipo de Fondo</label>
                                <div className="flex justify-center">
                                    <select
                                        name="currencySelector"
                                        id="accountCurrency"
                                        className="bg-gray text-white rounded-md p-1"
                                        value={selectedOption}
                                        onChange={(e) => handleOptionChange(e.target.value)}
                                    >
                                        <option value="">Seleccionar...</option>
                                        {fondosactuales.map((fondo, index) => (
                                            <option key={index} value={fondo.nombre}>
                                                {fondo.nombre}
                                            </option>
                                        ))}
                                    </select>


                                </div>
                            </div>


                            <button
                                className="w-[50%] p-3 self-center font-medium text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none"
                                onClick={handleRealizarFondos}
                            >
                                Invertir en el Super Fondo de Acces Bank

                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default SuperFondosModal
