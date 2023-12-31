import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Bar } from "react-chartjs-2"
import ChartDolarOficial from './ChartDolarOficial'
import { FiXCircle } from "react-icons/fi";
const DolarModal = () => {
  //PEDIDOS A LA API DE DOLAR
  const [showModal, setShowModal] = useState(false);
  const [dolarOficialData, setDolarOficialData] = useState({
    compra: 0,
    venta: 0,
  });
  const [dolarBlueData, setDolarBlueData] = useState({
    compra: 0,
    venta: 0,
  });
  const [dolarBolsaData, setDolarBolsaData] = useState({
    compra: 0,
    venta: 0,
  });

  useEffect(() => {
    const fetchDolarBlueData = async () => {
      try {
        const response = await axios.get(
          "https://dolar-api-argentina.vercel.app/v1/dolares/blue"
        );
        setDolarBlueData(response.data);
      } catch (error) {
        console.error("Error fetching dolar data:", error);
      }
    };

    if (showModal) {
      fetchDolarBlueData();
    }
  }, [showModal]);






    useEffect(() => {
        const fetchDolarData = async () => {
            try {
                const response = await axios.get('https://dolar-api-argentina.vercel.app/v1/dolares/oficial');
                setDolarOficialData(response.data);
            } catch (error) {
                console.error('Error fetching dolar data:', error);
            }
        };

    if (showModal) {
      fetchDolarData();
    }
  }, [showModal]);


  useEffect(() => {
    const fetchDolarBolsaData = async () => {
      try {
        const response = await axios.get(
          "https://dolar-api-argentina.vercel.app/v1/dolares/bolsa"
        );
        setDolarBolsaData(response.data);
      } catch (error) {
        console.error("Error fetching dolar data:", error);
      }
    };

    if (showModal) {
      fetchDolarBolsaData();
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <button
        className="h-10 px-6 mr-6 font-mediutransition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark "
        onClick={toggleModal}
      >
        ¡Ver cotizacion en vivo!
      </button>

      {showModal && (
        <div className="z-[1000] h-screen w-screen fixed top-0 left-0  flex justify-center items-center bg-[rgba(1,1,1,0.6)]">
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="bg-gray h-[90vh] p-6 rounded-lg border-2 border-orange relative">
              <h2 className="sm:text-xl font-semibold mb-4">Cotizaciones:</h2>

              <div className="flex justify-center text-xs flex-wrap sm:text-lg">
                <div className="block px-5">
                  <h3 className="font-semibold">Dolar Oficial</h3>
                  <p className="text-gray-500 mb-4">
                    Compra: ${dolarOficialData.compra} | Venta: $
                    {dolarOficialData.venta}
                  </p>
                </div>

                <div className="block px-5">
                  <h3 className="font-semibold">Dolar Blue</h3>
                  <p className="text-gray-500 mb-4">
                    Compra: ${dolarBlueData.compra} | Venta: $
                    {dolarBlueData.venta}
                  </p>
                </div>

                <div className="block px-5">
                  <h3 className="font-semibold">Dolar Bolsa</h3>
                  <p className="text-gray-500 mb-4">
                    Compra: ${dolarBolsaData.compra} | Venta: $
                    {dolarBolsaData.venta}
                  </p>
                </div>
              </div>

              <ChartDolarOficial />

              <div className="pt-5">
                <button
                  className="text-white font-semibold right-2 top-2 absolute text-3xl"
                  onClick={toggleModal}
                >
                  <FiXCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DolarModal;
