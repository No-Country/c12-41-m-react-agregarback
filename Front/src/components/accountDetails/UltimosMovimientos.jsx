const UltimosMovimientos = ({ account }) => {
  const { transfers } = account;

  return (
    <section className="z-20">
      <section className="bg-orange-navmenu w-full h-full rounded-[20px] p-10 flex flex-col gap-10">
        <h3 className="text-dark font-semibold tracking-wide text-2xl text-left">
          Últimos Movimientos
        </h3>
        {transfers.length > 0 ?
          <article className="grid gap-5">
            {transfers.map((transfer) => (
              <div
                key={transfer.id}
                className="w-full bg-gray rounded-2xl sm:rounded-full grid grid-cols-2 items-center px-3"
              >
                <span className="col-span-2">{transfer.createdAt}</span>
                <div className="grid grid-rows-2">
                  <span>Origen: {transfer.senderAccount}</span>
                  <span>Destino: {transfer.validationValue}</span>
                </div>
                <div className="grid grid-rows-2">
                  <span>Monto: ${transfer.amount}</span>
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
