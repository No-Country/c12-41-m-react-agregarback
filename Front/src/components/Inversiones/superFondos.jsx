import React, { useState, useEffect } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import SuperFondosModal from "./SuperFondosModal";
import { BsArrowUpShort } from "react-icons/bs";
const superFondos = () => {
  const [fondos, setFondos] = useState(() => {
    const storedFondos = sessionStorage.getItem("fondos");
    return storedFondos ? JSON.parse(storedFondos) : [];
  });
  const agregarFondo = (nuevoFondo) => {
    setFondos([...fondos, nuevoFondo]);
  };

  useEffect(() => {
    sessionStorage.setItem("fondos", JSON.stringify(fondos));
  }, [fondos]);

  return (
    <div className="bg-dark shadow-md rounded-md p-4">
      <span className="inline-block bg-gradient-to-r from-yellow to-orange rounded-full p-2">
        <AiOutlineLineChart size={50} className="text-dark" />
      </span>
      <h2 className="text-xl font-semibold mb-2">Fondos de Inversiones</h2>
      <p className="p-3 opacity-50 text-sm">
        En Acces Bank podes acceder a la mejor y mas accesible cotizacion las
        24hs!
      </p>

      <div className="border-gray-300 pt-4 mx-auto">
        <div className="w-full overflow-x-auto">
          <table className="table-auto bg-dark rounded m-1">
            <thead>
              <tr>
                <th className="font-semibold p-2">Estado de la inversión</th>
                <th className="font-semibold p-2">Nombre de fondo</th>
                <th className="font-semibold p-2">Capital</th>
                <th className="font-semibold p-2">Ultimo Dia</th>
                <th className="font-semibold p-2">Ultimos 30 días</th>
                <th className="font-semibold p-2">Ultimos 90 días</th>
                <th className="font-semibold p-2">Ultimo año</th>
              </tr>
            </thead>
            <tbody>
              {fondos.map((fondo, index) => (
                <tr className="font-semibold" key={index}>
                  <td className="p-2 row">{fondo.estado}</td>
                  <td className="p-2 row">{fondo.nombreFondo}</td>
                  <td className="p-2 row">{fondo.monto}</td>
                  <td className="p-2 row">
                    {fondo.ultdia}
                    <span>
                      <BsArrowUpShort color="green" />
                    </span>
                  </td>
                  <td className="p-2 row ">
                    {fondo.ult30dias}
                    <span>
                      <BsArrowUpShort color="green" />
                    </span>
                  </td>
                  <td className="p-2 row">
                    {fondo.ult90dias}
                    <span>
                      <BsArrowUpShort color="green" />
                    </span>
                  </td>
                  <td className="p-2 row-auto">
                    {fondo.ultaño}
                    <span>
                      <BsArrowUpShort color="green" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <SuperFondosModal agregarFondo={agregarFondo} />
      </div>
    </div>
  );
};

export default superFondos;
