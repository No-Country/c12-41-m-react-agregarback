  import React, { useState } from "react";
  import { AiOutlineCheck } from "react-icons/ai";
  import { CgDanger } from "react-icons/cg";
  import { calcularTNA, calcularInteresCompensatorioSimple, calcularPrimeraCuota, calcularInteresCompensatorioConIVA , calcularImpuestosIBBYSellados } from "./Funciones/Calculos";
  import Fechadespuesde30diasHabiles from "./Funciones/Fecha30before";
  import "./style.css"
import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css"; 
 
  const Loans = () => {

    const [userData, setUserData] = useState(null);
    const [showSimulator, setShowSimulator] = useState(true);
    const [interesCompe, setInteresCompe] = useState(0)
    const [InteresIbbYSellos, setinteresIbbySellos] = useState(0)
    const [interesCompeIva, SetInteresCompeIva] = useState(0);
    const [tea, setTea] = useState(0);
    const [primeraCuota, setPrimeraCuota] = useState(0);
    const [showSimutartorSolitud, setShowSimulatorSolitud] = useState(false);
    const [rangeCuotaValue, setRangeCuotaValue] = useState(3);
    const [rangeImporteValue, setRangeImporteValue] = useState(2000);
    const [tasaInteres, setTasaInteres] = useState(15);
    const [motivoPrestamo, setMotivoPrestamo] = useState("");
    const [fechaPrimerCuota, setFechaPrimerCuota] = useState(
      Fechadespuesde30diasHabiles()
    );
    const [showResultView, setShowResultView] = useState(false);

    const handleSuccesNotificacion = () =>{
      const notify = new AWN();
      notify.success("Su préstamo ha sido enviado. Aproximadamente en 72hs se le enviará la aprobación si ha sido aceptada.", {
        position: 'bottom-right',
    duration: 5000, // Duración de la notificación en milisegundos
    classNames: ['bg-orange', 'text-white', 'p-4', 'rounded'] 
      });
    }
    
    const handleButtonClick = () => {
      setShowSimulator(!showSimulator);
      setShowSimulatorSolitud(false);
    
    };
    const handleButtonSoliClick = () => {
      setShowSimulatorSolitud(!showSimutartorSolitud);
      setShowSimulator(false);
      const primeraCuota = calcularPrimeraCuota(
        rangeImporteValue,
        tasaInteres,
        rangeCuotaValue,
        fechaPrimerCuota
      );
      setUserData({ ...userData, primeraCuota });
      const resultadoCalculo = primeraCuota;
      setPrimeraCuota(resultadoCalculo);
      const capitalInicial = 10000;
      const interesCompe = calcularInteresCompensatorioSimple(
        tasaInteres,
        capitalInicial,
        fechaPrimerCuota
      );
      const resultadoInteres = interesCompe;
      setInteresCompe(resultadoInteres)
      console.log(interesCompe)
      const plazoMeses = rangeCuotaValue
      const interesCompeIva = calcularInteresCompensatorioConIVA(
        tasaInteres,
        capitalInicial,
        fechaPrimerCuota,
        plazoMeses
      );
      const Iva = interesCompeIva
      SetInteresCompeIva(Iva)
      const InteresIbbYSellos = calcularImpuestosIBBYSellados(capitalInicial);
      const resultadoImpuestos = InteresIbbYSellos
      
      setinteresIbbySellos(resultadoImpuestos)
      const tasaInteresDecimal = tasaInteres / 100;
      const frecuenciaDeCapitalizacion = 12; // Mensual, en este ejemplo
      const tea = Math.pow(1 + tasaInteresDecimal / frecuenciaDeCapitalizacion, frecuenciaDeCapitalizacion) - 1;
      const resultadoTea = tea
      setTea(resultadoTea);



      setUserData({ ...userData, interesCompe, resultadoImpuestos, resultadoTea });
      setShowResultView(true);

    };

    const handleRangeCuotasChange = (event) => {
      const newValue = parseInt(event.target.value);
      setRangeCuotaValue(newValue);
    };

    const handleRangeImporteChange = (event) => {
      const newValue = parseInt(event.target.value);
      setRangeImporteValue(newValue);
    };

    const handleTextImporteChange = async (e) => {
      const newValue = parseInt(e.target.value.replace(/\D/g, ""));
      const maxAllowedValue = 20000;
      const clampedValue = Math.min(newValue, maxAllowedValue);
      setRangeImporteValue(clampedValue);
    };

    const handleTextCuotaChange = (event) => {
      const newValue = parseInt(event.target.value.replace(/\D/g, ""));
      const maxAllowedValue = 72;
      const clampedValue = Math.min(newValue, maxAllowedValue);
      setRangeCuotaValue(clampedValue);
    };

    const handleFechaPrimerCuotaChange = (event) => {
      setFechaPrimerCuota(event.target.value);
    };

    const handleMotivoPrestamoChange = (e) => {
      const option = e.target.value;
      setMotivoPrestamo(option);
    };

    return (
      <main className="">
        <h2 className="relative top-28 text-center text-4xl uppercase">
          <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
            {showSimulator ? "El Prestamo que te conviene!!" : ""}
          </span>
        </h2>

        {showSimulator ? (
          <form className="border-1 relative m-auto min-h-[90vh] flex justify-center items-center">
            <div className="m-auto md:w-[493px] md:h-[367px] w-[393px] h-[367px] bg-[#312626] bg-opacity-50 rounded-[47px] transition-all duration-[1500ms] ">
              <div className="bg-orange-navmenu w-full h-20 rounded-t-[47px]">
                <p className="capitalize text-dark md:text-4xl text-3xl flex justify-center items-center h-full">
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
                  onClick={handleButtonSoliClick}
                >
                  Simula tu préstamo
                </button>
              </div>
            </div>
          </form>
        ) : showSimutartorSolitud ? (
          <form className="border-1 relative min-h-max flex justify-center items-center duration-1000 ease-out">
            <div className="md:w-[1149px] md:h-max  bg-[#312626] bg-opacity-50 rounded-[47px] transition-all duration-[2000ms] grid grid-rows-2 gap-4 items-center ">
              <div className="flex flex-col justify-center items-center w-2/3 m-auto ">
                <h2 className="relative text-center xl:text-4xl lg:text-3xl md:text-2xl text-lg uppercase mt-2">
                  <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text font-bold">
                    Con el calculador podes conocer tus posibilidades
                  </span>
                </h2>
                <h3 className="lg:text-2xl md:text-lg text-base mt-3 w-3/4">
                  Calculá un préstamo a tu medida y concreta todos tus proyectos
                  fácilmente
                </h3>
              </div>

              <div className="bg-[#1A1919] m-auto w-3/4 lg:h-[237px] md:h-[167px] h-[120px] flex flex-col items-center rounded-md shadow-md">
                <div className="bg-orange-navmenu w-full xl:h-20 lg:h-1/2 md:h-1/2 h-3/5 rounded-t-md flex justify-between px-5 lg:text-3xl md:text-xl text-base ">
                  <p className="text-dark w-1/2 xl:text-3xl lg:text-xl md:text-base text-sm flex justify-left items-center h-full">
                    Importe a solicitar
                  </p>
                  <input
                    type="text"
                    value={"$" + rangeImporteValue}
                    onChange={handleTextImporteChange}
                    className="capitalize border-b-2 xl:w-full  lg:w-max  md:w-1/2 w-2/3  lg:h-4/5 md:h-3/4 h-4/5 text-dark lg:text-3xl md:text-xl text-base  flex justify-end items-center bg-transparent text-right outline-none"
                    id="ImporteSolicitado"
                  />
                </div>
                <div className="w-2/3 flex items-center h-full flex-col justify-center">
                  <input
                    type="range"
                    className="w-full lg:h-5 md:h-3 h-1  bg-orange-navmenu appearance-none cursor-pointer rounded-full focus:outline-none focus-visible:ring text-dark focus-visible:ring-dark focus-visible:ring-opacity-50"
                    value={rangeImporteValue}
                    onChange={handleRangeImporteChange}
                    min="2000" // Valor mínimo permitido
                    max="20000" // Valor máximo permitido
                  />
                  <div className="flex w-full justify-between mt-3 md:text-base text-xs">
                    <p>$ 2.000</p>
                    <p>$ 20.000</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1919] mx-auto  w-3/4 lg:h-[237px] md:h-[167px] h-[120px]  flex flex-col items-center rounded-md shadow-md">
                <div className="bg-orange-navmenu w-full xl:h-20 lg:h-1/2 md:h-1/2 h-3/5 rounded-t-md flex justify-between px-5">
                  <div className="w-1/2">
                    <p className="text-dark w-full xl:text-3xl lg:text-xl md:text-base text-sm flex justify-left items-center h-max  ">
                      Cantidad de cuotas
                    </p>
                    <p className="text-gray opacity-75 uppercase w-full md:text-md text-xs flex justify-left items-center lg:h-1/3 md:h-1/2">
                      t.n.a: {calcularTNA(tasaInteres, rangeCuotaValue)}%
                    </p>
                  </div>
                  <input
                    type="text"
                    value={rangeCuotaValue}
                    className="capitalize border-b-2  xl:w-full  lg:w-max  md:w-1/2 w-2/3   lg:h-4/5 md:h-3/4 h-4/5 text-dark lg:text-3xl md:text-xl text-base flex justify-end items-center bg-transparent text-right outline-none"
                    onChange={handleTextCuotaChange}
                  />
                </div>
                <div className=" w-2/3 flex items-center h-full flex-col justify-center">
                  <input
                    type="range"
                    className="w-full lg:h-5 md:h-3 h-1 bg-orange-navmenu appearance-none cursor-pointer rounded-full focus:outline-none focus-visible:ring text-dark focus-visible:ring-dark focus-visible:ring-opacity-50"
                    value={rangeCuotaValue}
                    onChange={handleRangeCuotasChange}
                    min="3" // Valor mínimo permitido
                    max="72" // Valor máximo permitido
                  />
                  <div className="flex w-full justify-between mt-3 md:text-base text-xs">
                    <p>3</p>
                    <p>72</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-navmenu w-3/4 py-3 flex justfy-center mx-auto rounded-md shadow-md">
                <p className="text-dark w-1/2 xl:text-3xl lg:text-xl md:text-base text-sm flex justify-center items-center">
                  Pago de la Primera Cuota
                </p>
                <span className="capitalize text-dark w-1/2 md:text-3xl text-2xl flex justify-center items-center">
                  <input
                    type="date"
                    className="appearance-none  cursor-not-allowed w-2/2 md:w-2/3 l:text-3xl lg:text-xl md:text-base text-sm  px-4 py-2 outline-none focus:border-none rounded-md  shadow-sm focus:outline-none  focus:ring-orange focus:border-transparent bg-transparent"
                    value={fechaPrimerCuota}
                    onChange={handleFechaPrimerCuotaChange}
                    readOnly
                  />
                </span>
              </div>

              <div className="bg-[#1A1919] mx-auto  w-3/4 h-max py-[50px] flex flex-row justify-center items-center rounded-md shadow-md">
                <div className="w-1/2 flex justify-center">
                  <CgDanger className="md:w-10 md:h-10 w-5 h-5 text-orange-navmenu " />
                </div>
                <div className="1/3 text-left">
                  <p className="xl:text-[20px] lg:text-[15px] md:text-[12px] text-[10px] ">
                    <strong className="text-orange-navmenu uppercase">
                      Informacion: {""}
                    </strong>
                     La primer cuota será calculada de acuerdo con la cantidad de
                    días existentes entre la fecha de liquidación y la fecha hasta
                    la cual se difiera su pago. Al vencimiento de esta cuota se
                    deberán abonar los intereses acumulados.
                  </p>
                </div>
              </div>

              <div className="bg-orange-navmenu w-3/4 py-5 flex justfy-center mx-auto rounded-md shadow-md">
                <p className="text-dark w-1/2 xl:text-3xl lg:text-xl md:text-base text-sm flex justify-center items-center">
                  Motivo de Prestamo
                </p>
                <span className="capitalize text-dark w-1/2 xl:text-3xl lg:text-xl md:text-base text-sm flex justify-center items-center">
                  <select
                   required
                    name=""
                    id=""
                    className=" appearance px-4 py-2 outline-none focus:border-none rounded-md shadow-sm  focus:ring-orange focus:border-transparent bg-transparent custom-select text-gray-700 cursor-pointer hover:bg-transparent"
                    onChange={handleMotivoPrestamoChange}
                    value={motivoPrestamo}
                   
                  >
                    <option value="Sin Motivo" hidden> 
                     Motivo
                    </option>
                    <option
                      value="Viaje"
                      className="rounded-md w-2 hover:bg-orange-navmenu-active hover:bg-transparent cursor-pointer"
                    >
                      Viajes nacionales
                    </option>
                    <option value="Hogar">Hogar</option>
                    <option value="Vehiculos">Vehículos</option>
                    <option value="Sanidad">Sanidad</option>
                    <option value="Study">Estudios</option>
                    <option value="Boda">Bodas</option>
                    <option value="Reanifiacicion">Reanificación</option>
                  </select>
                </span>
              </div>
              {motivoPrestamo === "" && (
  <p className="text-red-500 text-center">
    Seleccionar un <strong className="text-orange font-bold uppercase">Motivo es Obligatorio *</strong>
  </p>
)}

              <div className="my-5 flex justify-evenly w-2/3 items-center mx-auto">
                <button
                  className="border-4 border-orange-navmenu duration-[1000ms] bg-transparent text-orange-navmenu md:text-[24px] text-cm md:py-2 md:px-6 px-4 py-1 rounded-full hover:bg-orange-navmenu hover:text-dark"
                  onClick={handleButtonClick}
                >
                  Volver
                </button>
                <button
                  className="border-4 border-orange-navmenu duration-[1000ms] bg-orange-navmenu text-dark md:text-[24px] text-cm md:py-2 md:px-6 px-4 py-1 rounded-full hover:bg-transparent hover:text-orange"
                  onClick={handleButtonSoliClick}
                  type="sumbit"
                >
                  Calcular
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="border-1 relative min-h-max flex justify-center items-center ease-out duration-1000">
            <div className="md:w-[1149px] flex justify-center flex-col items-center md:h-max w-[393px] h-[367px] bg-[#312626] bg-opacity-50 rounded-[47px] transition duration-[1000ms]  ">
              <div className="bg-[#1A1919] md:h-max md:w-3/4 justify-center rounded-md my-5 ease-out transition-all duration-1000">
                <div className="flex justify-center w-full items-center m-auto text-left border-b-2 border-orange-navmenu">
                  <img
                    src=" ./src/components/Icons/IconAccesBank.svg "
                    alt="icon"
                    className=" h-[150px] "
                  />
                  <div className="uppercase text-orange-navmenu text-left ">
                    <p className="font-bold md:text-4xl">prestamo</p>
                    <p className="font-thint md:text-xl opacity-50">personal</p>
                  </div>

                </div>

                <section className="w-3/4 m-auto h-max grid grid-flow-row gap-2 text-[22px] ">
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-start items-end  ">
                    <p className="capitalize text-white text-left">
                    
                      datos del préstamo
                    </p>
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="capitalize text-white">
                      
                      Importe neto a acreditar (1)
                    </p>
                    <p className=" text-white ">$ {rangeImporteValue.toFixed(2)}</p>
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="capitalize text-white"> cuenta destino</p>
                    <p className=" text-white capitalize "> Cuenta Unica </p>
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="capitalize text-white">
                      
                      cantidad de cuotas (2)
                    </p>
                    <p className=" text-white capitalize ">{rangeCuotaValue}</p>
                  </div>
                  <div className="border-b-2 text-whit border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="capitalize"> motivo del préstamo</p>
                    <p className={` capitalize ${
      motivoPrestamo ? "" : "text-orange font-bold uppercase"
    }`}
    >{motivoPrestamo ? motivoPrestamo : "Solicitud invalida"}</p>
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="capitalize text-white">
                      
                      Datos de la primera cuota
                    </p>
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="capitalize text-white">
                      
                      Importe primera cuota
                    </p>
                    <input
                      type="text"
                      onChange={handleButtonSoliClick}
                      value={"$ " + primeraCuota}
                      readOnly
                      className=" appearance-none pointer-events-none outline-none focus:border-none rounded-md  shadow-sm bg-transparent text-right"
                    />
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end   ">
                    <p className="capitalize text-white"> Fecha de primer pago</p>
                    <span className="flex justify-end text-right">
                    <input
                      type="date"
                      className="appearance-none pointer-events-none outline-none rounded-md   shadow-sm text-right bg-transparent  w-[146] "
                      value={fechaPrimerCuota}
                      onChange={handleFechaPrimerCuotaChange}
                      readOnly
                    />
                    </span>
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] mt-2 flex justify-between items-end  ">
                    <p className="capitalize text-white w-1/2 text-left">
                      
                      Capital e intereses compesatorios del periodo
                    </p>
                    <p className=" text-white capitalize "> $ {interesCompe}</p>
                      
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="uppercase text-white"> iva</p>
                    <p className=" text-white capitalize ">$ {interesCompeIva}</p>
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="capitalize text-white"> Otros Impuestos (3)</p>
                    <p className=" text-white capitalize ">$ {InteresIbbYSellos}</p>
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="capitalize text-white"> Tasas</p>
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="uppercase text-white"> Tipo de tasa</p>
                    <p className=" text-white capitalize ">Fija</p>
                  </div>

                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="capitalize text-white">
                      
                      tasa nominal anual (T.N.A)
                    </p>
                    <p className=" text-white capitalize "> {calcularTNA(tasaInteres, rangeCuotaValue)}%</p>
                  </div>
                  <div className="border-b-2 border-orange-navmenu w-full h-[53px] flex justify-between items-end  ">
                    <p className="capitalize text-white">
                      
                      tasa efectiva anual (T.E.A)
                    </p>
                    <p className=" text-white capitalize "> {tea.toFixed(2)} %</p>
                  </div>
                  <div className="w-full bg-[#322F2F] rounded-md h-full flex justify-center items-center my-1 p-2">
                    <div className="h-full w-1/4 flex items-center justify-center">
                      <CgDanger className="text-orange-navmenu h-12 w-12  " />
                    </div>
                    <div className="w-fit h-fit text-[15px] text-left">
                      <span className="text-orange-navmenu font-bold">
                        Resumen de términos y condiciones.
                      </span>
                      <ul className="list-disc ml-[25px]	">
                        <li>
                          Costo Financiero Total Efectivo Anual (Con Impuestos)
                          CFTEA C/Imp: 280,02%
                        </li>
                        <li>
                          Costo Financiero Total Efectivo Anual (Sin Impuestos)
                          CFTEA S/Imp: 204,59%
                        </li>
                      </ul>
                      <span className="text-orange-navmenu font-bold">
                        <ul>
                          <li>
                            (1) En caso de no coincidir el "importe Neto a
                            Acreditar" con el "importe a solicitar", la diferencia
                            corresponderá a Impuestos.
                          </li>
                          <li>
                            (2) El plazo del préstamo está expresado en meses.
                          </li>
                          <li>(3) IIBB y/o sellados.</li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className="my-3 flex justify-evenly w-full items-center  ">
                    <button
                      className="border-4 border-orange-navmenu duration-[1000ms] bg-transparent text-orange-navmenu md:text-[24px] text-cm md:py-2 md:px-6 px-4 py-1 rounded-full hover:bg-orange-navmenu hover:text-dark"
                      onClick={handleButtonSoliClick}
                    >
                      Cancelar
                    </button>
                    <button
                      className="border-4 border-orange-navmenu duration-[1000ms] capitalize bg-orange-navmenu text-dark md:text-[24px] text-cm md:py-2 md:px-10 px-4 py-1 rounded-full hover:bg-transparent hover:text-orange"
                      onClick={() => {
    handleButtonClick();
    handleSuccesNotificacion();
  }}
                    >
                      enviar
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  };

  export default Loans;
