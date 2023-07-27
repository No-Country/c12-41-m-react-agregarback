import { formatearSaldoDelUsuario } from "../../utils/formatSaldo";
import {FaMoneyBillTransfer} from 'react-icons/fa6'

const UltimosMovimientos = ({ account }) => {
  const  transfers  = [...account.transfers].reverse();

  const formatDate =(dateTransfer)=>{
      const opciones = { year: 'numeric', month: 'numeric', day: 'numeric' };
      const dateFormat = new Date(dateTransfer).toLocaleDateString(undefined, opciones);
      return dateFormat;
  }

    
  return (
    <section className="z-20">
      <section className="bg-orange-navmenu w-full rounded-[20px] px-3 py-3 flex flex-col gap-10 h-[100vh] shadow-xl shadow-dark/30 overflow-y-scroll">
        <h3 className="text-dark font-bold tracking-wide text-3xl text-left px-4 py-3">
          Últimos Movimientos
        </h3>
        {transfers.length > 0 ?
          <article className="grid gap-5">
            {transfers.map((transfer) => (
             
              <div
                key={transfer.id}
                className="w-full bg-gray rounded-xl sm:rounded-full px-3 py-4 sm:text-base"
              >
                <span className="col-span-2 font-bold text-base">{formatDate(transfer.createdAt)}</span>
                <div className="grid grid-cols-[60px,_1fr] grid-flow-col gap-3 overflow-hidden">
                  <div className=" text-orange  flex justify-center items-center"> <FaMoneyBillTransfer size={40} /></div>
                 <div className="grid grid-rows-3">
                  <div className=" grid sm:grid-cols-2"><label className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text font-bold">Origen:</label> <span className="sm:text-left">{transfer.senderAccount}</span></div>
                  <div className=" grid sm:grid-cols-2"><label className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text font-bold">Destino:</label> <span className="sm:text-left">{transfer.validationValue}</span></div>
                  <div className="grid sm:grid-cols-2"><label className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text font-bold">Monto:</label><span className="sm:text-left">${formatearSaldoDelUsuario(transfer.amount)}</span></div>
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
