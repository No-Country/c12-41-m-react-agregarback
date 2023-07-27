import React, { useState } from "react";
import { FiXCircle } from "react-icons/fi"
import AWN from "awesome-notifications";

const PlazoFijoModal = ({ agregarOperacion }) => {
  const notifier = new AWN();
  const [showModal, setShowModal] = useState(false);
  const [capital, setCapital] = useState("");
  const [plazoDias, setPlazoDias] = useState(30);
  const [tnaResult, setTnaResult] = useState("");
  const [inversionTotal, setInversionTotal] = useState("")


  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleRealizarPlazoFijo = () => {
    // Aquí se debería hacer la lógica para guardar la operación en la base de datos u otro almacenamiento.
    // Por ahora, solo vamos a simular una operación con valores estáticos.
    const nuevaOperacion = {
      tipo: "Plazo fijo",
      monto: `$ ${capital}`,
      estado: "Pendiente", // Podrías cambiar el estado según lo necesites
      plazo: `${plazoDias} días`,
      tasa: `${tnaResult}%`
    };

    agregarOperacion(nuevaOperacion);
    toggleModal(false);
    notifier.tip("Operacion pendiente, en las proximas 24hs evaluaremos y nos contactaremos con usted para realizar la inversion!");
  };


  const handleCapitalChange = (e) => {
    setCapital(e.target.value);
  };

  const handlePlazoDiasChange = (e) => {
    setPlazoDias(e.target.value);
  };

  const calcularTNA = () => {
    const tea = 10;
    const cuotas = plazoDias / 30;
    const tasaInteresDecimal = tea / 100;
    const periodosEnAnio = 12;
    const tasaNominialAnual =
      ((1 + tasaInteresDecimal / periodosEnAnio) ** periodosEnAnio - 1) * 100;
    const tna = tasaNominialAnual * cuotas;

    const initialCapital = parseFloat(capital);
    const totalInterest = initialCapital * ((1 + tasaInteresDecimal / periodosEnAnio) ** (periodosEnAnio * (cuotas / 12)));
    const totalCapital = initialCapital + totalInterest;

    setTnaResult(tna.toFixed(2));
    setInversionTotal(totalCapital.toFixed(2)); // Updated the state variable for total capital
  };

  return (
    <>
      <button
        className="h-10 px-6 mr-6 font-mediutransition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark"
        onClick={toggleModal}
      >
        Invertir en plazos fijos
      </button>

      {showModal && (
        <div className='z-[1000] h-screen w-screen fixed top-0 left-0  flex justify-center items-center bg-[rgba(1,1,1,0.6)]'>
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">

            <div className="w-[350px] rounded-lg bg-dark p-3 flex flex-col gap-6 ">

              <FiXCircle className="self-end text-3xl" onClick={() => setShowModal(false)} />
              <h2 className="text-xl font-semibold mb-4">Simulador Plazo Fijo</h2>
              <p className="p-3 opacity-50 text-sm">
                Ahora podés constituir un depósito a plazo fijo sin ser cliente/a
                del Banco Provincia.
              </p>

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


                <label htmlFor="plazoDias" className="block text-gray-700">Plazo en días (mínimo 30 días):</label>
                <div className="mb-5">
                  <input
                    type="range"
                    id="plazoDias"
                    value={plazoDias}
                    onChange={handlePlazoDiasChange}
                    min="30"
                    max="365"
                    className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-300 rounded-md focus:ring focus:ring-opacity-50"
                  />
                  <p className="text-gray-500 mt-2">Días seleccionados: {plazoDias}</p>
                </div>


                <button
                  type="submit"
                  className="w-[40%] p-3 self-center font-medium text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none"
                  onClick={calcularTNA}
                >
                  Calcular TNA
                </button>
                <div>
                  <p className="text-gray-500 mb-4">TNA: {tnaResult}%</p>
                  {inversionTotal && <p className="text-gray-500 mb-4">Total Final: ${inversionTotal}</p>}

                </div>
              </div>
              <button
                className="w-[50%] p-3 self-center font-medium text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none"
                onClick={handleRealizarPlazoFijo}
              >
                Realizar el plazo fijo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlazoFijoModal;
