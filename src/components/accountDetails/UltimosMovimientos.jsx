const UltimosMovimientos = () => {
  const transferencias = [
    {
      id: 3,
      amount: 400,
      senderAccount: 145168868,
      receiverAccount: 747168868,
      accountId: 2,
      createdAt: "2023-07-06T22:39:12.000Z",
      updatedAt: "2023-07-06T22:39:12.000Z",
    },
    {
      id: 4,
      amount: 600,
      senderAccount: 675168867,
      receiverAccount: 253168868,
      accountId: 1,
      createdAt: "2023-07-06T22:39:58.000Z",
      updatedAt: "2023-07-06T22:39:58.000Z",
    },
    {
      id: 5,
      amount: 200,
      senderAccount: 675168867,
      receiverAccount: 253168868,
      accountId: 1,
      createdAt: "2023-07-06T22:41:05.000Z",
      updatedAt: "2023-07-06T22:41:05.000Z",
    },
    {
      id: 6,
      amount: 500,
      senderAccount: 145168868,
      receiverAccount: 747168868,
      accountId: 2,
      createdAt: "2023-07-06T22:42:12.000Z",
      updatedAt: "2023-07-06T22:42:12.000Z",
    },
    {
      id: 7,
      amount: 50,
      senderAccount: 145168868,
      receiverAccount: 747168868,
      accountId: 2,
      createdAt: "2023-07-06T22:56:51.000Z",
      updatedAt: "2023-07-06T22:56:51.000Z",
    },
  ];
  return (
    <section className="z-20">
      <section className="bg-white w-full h-full rounded-[20px] p-10 flex flex-col gap-10">
        <h3 className="text-dark font-semibold tracking-wide text-2xl text-left">
          Últimos Movimientos
        </h3>
        <article className="grid gap-5">
          {transferencias.map((transfer) => (
            <div
              key={transfer.id}
              className="w-full bg-gray rounded-2xl sm:rounded-full grid grid-cols-2 items-center px-3"
            >
              <span className="col-span-2">{transfer.createdAt}</span>
              <div className="grid grid-rows-2">
                <span>Origen: {transfer.senderAccount}</span>
                <span>Destino: {transfer.receiverAccount}</span>
              </div>
              <div className="grid grid-rows-2">
                <span>Monto: {transfer.amount}</span>
              </div>
            </div>
          ))}
        </article>
      </section>
    </section>
  );
};
export default UltimosMovimientos;
