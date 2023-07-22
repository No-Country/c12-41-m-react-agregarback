import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Loans = () => {
  const [showSimulator, setShowSimulator] = useState(true);
  const [rangeCuotaValue, setRangeCuotaValue] = useState(3);
  const [rangeImporteValue, setRangeImportValue] = useState(2000);
  const [tasaInteres, setTasaInteres] = useState(15);

  const handleButtonClick = () => {
    // Cambiar el estado para mostrar la otra vista
    setShowSimulator(!showSimulator);
  };

  const handleRangeCuotasChange = (event) => {
    const newValue = parseInt(event.target.value);
    setRangeCuotaValue(newValue);
  };

  const HandleRangeImporteChange = (event) => {
    const newValue = parseInt(event.target.value);
    setRangeImportValue(newValue);
  };

  const handleTextImporteChange = (event) => {
    const newValue = parseInt(event.target.value.replace(/\D/g, ""));
    const maxAllowedValue = 20000; // Valor máximo permitido
    const clampedValue = Math.min(newValue, maxAllowedValue);
    setRangeImportValue(clampedValue);
  };

  const handleTextCuotaChange = (event) => {
    const newValue = parseInt(event.target.value.replace(/\D/g, ""));
    const maxAllowedValue = 72; // Valor máximo permitido
    const clampedValue = Math.min(newValue, maxAllowedValue);
    setRangeCuotaValue(clampedValue);
  };

  // Función para obtener la fecha después de 30 días en formato DD-MM-YYY
  const Fechadespuesde30dias = () => {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() + 30);
    const year = hoy.getFullYear();
    const month = String(hoy.getMonth() + 1).padStart(2, "0");
    const day = String(hoy.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  // Función para calcular la TNA en base a la tasa efectiva anual (TEA) y la cantidad de cuotas
  const calcularTNA = (tea, cuotas) => {
    const tasaInteresDecimal = tea / 100;
    const periodosEnAnio = 12;
    const tasaNominialAnual = ((1 + tasaInteresDecimal / periodosEnAnio) ** periodosEnAnio - 1) * 100;
    const tna = tasaNominialAnual * cuotas;
    return tna.toFixed(2); // Redondeamos a 2 decimales
  };

  return (
    <main className=" ">
      <h2 className="relative top-28 text-center text-4xl uppercase ">
        <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
          {showSimulator ? "El Prestamo que te conviene!!" : ""}
        </span>
      </h2>

      {showSimulator ? (
        <div className="border-1 relative m-auto min-h-[90vh] flex justify-center items-center">
          {/* Contenido del simulador */}
          <div className="m-auto md:w-[493px] md:h-[367px] w-[393px] h-[367px] bg-[#312626] bg-opacity-50 rounded-[47px] transition-all duration-[1200ms] ">
            <div className="bg-orange-navmenu w-full h-20 rounded-t-[47px]">
              <p className="capitalize text-dark md:text-4xl text-3xl flex justify-center items-center h-full ">
                prestamo personal
              </p>
            </div>
            <h4 className="md:pt-4 pt-4 font-inter font-medium md:text-[40px] text-3xl leading-[48px] flex items-center justify-center text-orange-navmenu">
              Tasa Fija (1)
            </h4>
            <div className="flex justify-evenly md:h-36 h-40 items-center md:flex-row flex-col m-auto duration-1000 ">
              <AiOutlineCheck className="bg-orange-navmenu md:w-10 md:h-10 w-16 h-16 flex justify-center items-center rounded-full" />
              <p className="md:text-[24px] text-xl">
                Podes pagarlo en hasta 72 meses (*)
              </p>
            </div>
            <div className="w-full h-16 flex items-center justify-center">
              <button
                className="border-4 border-orange-navmenu transition-colors duration-1000 bg-transparent text-orange-navmenu md:text-[24px] text-cm md:py-2 md:px-6 px-4 py-1 rounded-full hover:bg-orange-navmenu hover:text-dark"
                onClick={handleButtonClick}
              >
                Simula tu préstamo
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Otra vista que se muestra al hacer clic en el botón
        <div className="border-1 relative min-h-full flex justify-center items-center">
          <div className=" md:w-[1149px] md:h-[1000px] w-[393px] h-[367px] bg-[#312626] bg-opacity-50 rounded-[47px] transition-all duration-[2000ms] grid grid-rows-4 gap-2 items-center ">
            <div className="flex flex-col w-full justify-center items-center">
              <h2 className="relative  text-center text-4xl uppercase ">
                <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
                  Con el calculador podes conocer tus posibilidades
                </span>
              </h2>
              <h3 className="text-2xl mt-3  w-1/2">
                Calculá un préstamo a tu medida y concreta todos tus proyectos
                fácilmente
              </h3>
            </div>

            {/* Contenido del otro view */}
            <div className="bg-[#1A1919] m-auto w-3/4 h-[237px] flex  flex-col items-center rounded-md shadow-md">
              <div className="bg-orange-navmenu w-full h-20 rounded-t-md flex justify-between px-5">
                <p className="text-dark w-1/2 md:text-3xl text-2xl flex justify-left items-center h-full ">
                  Importe a solicitar
                </p>
                <input
                  type="text"
                  value={"$" + rangeImporteValue}
                  onChange={handleTextImporteChange}
                  className="capitalize border-b-2 w-full h-4/5 text-dark md:text-3xl text-2xl flex justify-end items-center bg-transparent text-right outline-none"
                />
              </div>

              <div className="w-2/3 flex items-center h-full flex-col justify-center">
                <input
                  type="range"
                  className="w-full h-5 bg-orange-navmenu appearance-none cursor-pointer rounded-full focus:outline-none focus-visible:ring text-dark focus-visible:ring-dark focus-visible:ring-opacity-50"
                  value={rangeImporteValue} 
                  onChange={HandleRangeImporteChange} 
                  min="2000" // Valor mínimo permitido
                  max="20000" // Valor máximo permitido
                />

                <div className="flex w-full justify-between mt-3">
                  <p>$ 2.000 </p>
                  <p>$ 20.000</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1919] mx-auto mt-10 w-3/4 h-[237px] flex flex-col items-center rounded-md shadow-md">
              <div className="bg-orange-navmenu w-full h-20 rounded-t-md flex justify-between px-5">
                <div className="w-1/2">
                  <p className="text-dark w-full md:text-3xl text-2xl flex justify-left items-center h-2/2">
                    Cantidad de cuotas
                  </p>
                  <p className="text-gray opacity-75 uppercase w-full md:text-md text-cm flex justify-left items-center h-1/3">
                    t.n.a: {calcularTNA(tasaInteres, rangeCuotaValue)}%
                  </p>
                </div>
                <input
                  type="text"
                  value={rangeCuotaValue}
                  className="capitalize border-b-2 w-full h-4/5 text-dark md:text-3xl text-2xl flex justify-end items-center bg-transparent text-right outline-none"
                  onChange={handleTextCuotaChange}
                />
              </div>

              <div className="w-2/3 flex items-center h-full flex-col justify-center">
                <input
                  type="range"
                  className="w-full h-5 bg-orange-navmenu appearance-none cursor-pointer rounded-full focus:outline-none focus-visible:ring text-dark focus-visible:ring-dark focus-visible:ring-opacity-50"
                  value={rangeCuotaValue} 
                  onChange={handleRangeCuotasChange} 
                  min="3" // Valor mínimo permitido
                  max="72" // Valor máximo permitido
                />

                <div className="flex w-full justify-between mt-3">
                  <p>3</p>
                  <p>72</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-navmenu w-3/4 h-20 flex justfy-center mx-auto my-auto   rounded-md shadow-md">
              <p className="text-dark w-1/2 md:text-3xl text-2xl flex justify-center items-center">
                Pago de la Primera Cuota
              </p>

              <span className="capitalize text-dark w-1/2 md:text-3xl text-2xl flex justify-center items-center">
                <input
                  type="date"
                  className="appearance-none w-2/3 px-4 py-2 outline-none focus:border-none rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent bg-transparent"
                  defaultValue={Fechadespuesde30dias()} 
                  readOnly
                />
              </span>
            </div>

            <div className="">
              <button
                className="border-4 border-orange-navmenu  duration-[1000ms]  bg-transparent text-orange-navmenu md:text-[24px] text-cm md:py-2 md:px-6 px-4 py-1 rounded-full hover:bg-orange-navmenu hover:text-dark"
                onClick={handleButtonClick}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Loans;
