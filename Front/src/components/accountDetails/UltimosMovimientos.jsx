import { formatearSaldoDelUsuario } from "../../utils/formatSaldo";
import {FaMoneyBillTransfer} from 'react-icons/fa6'

const UltimosMovimientos = ({ account }) => {
  const { transfers } = account;

  const formatDate =(dateTransfer)=>{
      const opciones = { year: 'numeric', month: 'numeric', day: 'numeric' };
      const dateFormat = new Date(dateTransfer).toLocaleDateString(undefined, opciones);
      console.log(dateFormat)
      return dateFormat;
  }

  
  
  
  
  return (
    <section className="z-20">
      <section className="bg-orange-navmenu w-full h-full rounded-[20px] px-3 py-3 flex flex-col gap-10">
        <h3 className="text-dark font-bold tracking-wide text-3xl text-left px-4 py-3">
          Últimos Movimientos
        </h3>
        {transfers.length > 0 ?
          <article className="grid gap-5">
            {transfers.map((transfer) => (
             
              <div
                key={transfer.id}
                className="w-full bg-gray rounded-xl sm:rounded-full px-3 sm:text-sm"
              >
                <span className="col-span-2 font-bold text-base">{formatDate(transfer.createdAt)}</span>
                <div className="grid grid-cols-[60px,_1fr] grid-flow-col gap-3 overflow-hidden">
                  <div className=" text-orange py-6 px-3 sm:text-sm flex justify-center items-center"> <FaMoneyBillTransfer size={40} /></div>
                 <div className="grid grid-rows-3">
                  <div className=" grid sm:grid-cols-2"><label className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text font-bold">Origen:</label> <span>{transfer.senderAccount}</span></div>
                  <div className=" grid sm:grid-cols-2"><label className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text font-bold">Destino:</label> <span>{transfer.validationValue}</span></div>
                  <div className="grid sm:grid-cols-2"><label className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text font-bold">Monto:</label><span>${formatearSaldoDelUsuario(transfer.amount)}</span></div>
                </div>
                </div>
              </div>
            ))}
          </article> :
          <p className="text-dark">Aún no se han realizado movimientos en esta cuenta</p>
        }

      </section>
    </section>
  );
};
export default UltimosMovimientos;
