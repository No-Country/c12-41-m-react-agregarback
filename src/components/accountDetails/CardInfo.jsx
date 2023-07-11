import { useState } from "react";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { RiQuestionnaireFill, RiShakeHandsFill } from "react-icons/ri";
import Accesos from "./Accesos";
import CarruselCard from "./CarruselCard";

const CardInfo = () => {
  const [listOfCards, setListOfCards] = useState([]);
  //   {
  //     id: 1,
  //     cardNumber: "8219544817579717",
  //     cvv: 406,
  //     creditLine: 1000,
  //     type: "masterCard",
  //     category: "credito",
  //     status: "active",
  //     accountId: 1,
  //     userId: 1,
  //     createdAt: "2023-07-11T01:40:41.000Z",
  //     updatedAt: "2023-07-11T01:40:41.000Z",
  //   },
  //   {
  //     id: 2,
  //     cardNumber: "2541208289745521",
  //     cvv: 740,
  //     creditLine: null,
  //     type: "masterCard",
  //     category: "debito",
  //     status: "active",
  //     accountId: 2,
  //     userId: 1,
  //     createdAt: "2023-07-11T01:40:56.000Z",
  //     updatedAt: "2023-07-11T01:40:56.000Z",
  //   },
  //   {
  //     id: 3,
  //     cardNumber: "8578514226283121",
  //     cvv: 527,
  //     creditLine: null,
  //     type: "visa",
  //     category: "debito",
  //     status: "active",
  //     accountId: 2,
  //     userId: 1,
  //     createdAt: "2023-07-11T01:41:05.000Z",
  //     updatedAt: "2023-07-11T01:41:05.000Z",
  //   },
  //   {
  //     id: 4,
  //     cardNumber: "6076220195236161",
  //     cvv: 791,
  //     creditLine: 1000,
  //     type: "americanExpress",
  //     category: "credito",
  //     status: "active",
  //     accountId: 2,
  //     userId: 1,
  //     createdAt: "2023-07-11T01:41:33.000Z",
  //     updatedAt: "2023-07-11T01:41:33.000Z",
  //   },
  // ];

  const accounts = [
    {
      id: 1,
      amount: 700,
      accountNumber: 675168867,
      cbu: "5279168459487761556066",
      cvu: "1946096101960161701193",
      alias: "user.7273",
      status: "active",
      currency: "usd",
      userId: 1,
      createdAt: "2023-07-06T21:40:42.000Z",
      updatedAt: "2023-07-06T22:41:05.000Z",
      cards: [
        {
          id: 1,
          cardNumber: "8219544817579717",
          cvv: 406,
          creditLine: 1000,
          type: "masterCard",
          category: "credito",
          status: "active",
          accountId: 1,
          userId: 1,
          createdAt: "2023-07-11T01:40:41.000Z",
          updatedAt: "2023-07-11T01:40:41.000Z",
        },
      ],
    },
    {
      id: 2,
      amount: 1230,
      accountNumber: 145168868,
      cbu: "2764180945997177147976",
      cvu: "3202503944480354597734",
      alias: "user.3409",
      status: "active",
      currency: "soles",
      userId: 1,
      createdAt: "2023-07-06T22:19:00.000Z",
      updatedAt: "2023-07-06T22:58:38.000Z",
      cards: [
        {
          id: 4,
          cardNumber: "6076220195236161",
          cvv: 791,
          creditLine: 1000,
          type: "americanExpress",
          category: "credito",
          status: "active",
          accountId: 2,
          userId: 1,
          createdAt: "2023-07-11T01:41:33.000Z",
          updatedAt: "2023-07-11T01:41:33.000Z",
        },
        {
          id: 3,
          cardNumber: "8578514226283121",
          cvv: 527,
          creditLine: null,
          type: "visa",
          category: "debito",
          status: "active",
          accountId: 2,
          userId: 1,
          createdAt: "2023-07-11T01:41:05.000Z",
          updatedAt: "2023-07-11T01:41:05.000Z",
        },
        {
          id: 2,
          cardNumber: "2541208289745521",
          cvv: 740,
          creditLine: null,
          type: "masterCard",
          category: "debito",
          status: "active",
          accountId: 2,
          userId: 1,
          createdAt: "2023-07-11T01:40:56.000Z",
          updatedAt: "2023-07-11T01:40:56.000Z",
        },
      ],
    },
  ];

  const hanldeSlectAccount = (e) => {
    const account = accounts.find((account) => account.id == e.target.value);
    setListOfCards(account.cards);
  };

  return (
    <section className="pt-10">
      <article className="flex flex-col gap-6 justify-center items-center relative p-10">
        <div className="flex gap-5 absolute z-20 left-[50%] translate-x-[-100%] top-[0]">
          <span>Accounts</span>
          <select
            onChange={(e) => hanldeSlectAccount(e)}
            className="outline-none text-sm text-white rounded-md bg-transparent py-1"
          >
            {accounts.map((account) => (
              <option key={account.id} className="bg-gray" value={account.id}>
                {account.accountNumber}
              </option>
            ))}
          </select>
        </div>
        <article className="relative">
          <div className="absolute right-[-20%] top-[-40%]">
            <img src="/accounts/Ellipse 10.png" alt="elipse" loading="lazy" />
          </div>
          <div className="absolute left-[-15%] bottom-[-30%]">
            <img src="/accounts/Ellipse 20.png" alt="elipse" loading="lazy" />
          </div>
          <CarruselCard listOfCards={listOfCards} />
        </article>
      </article>
      <article className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-3 auto-cols-fr py-10">
        <Accesos text={"Servicios"} icon={<BsCreditCard2BackFill />} />
        <Accesos text={"prestamos"} icon={<RiShakeHandsFill />} />
        <Accesos text={"Centro de ayuda"} icon={<RiQuestionnaireFill />} />
        <Accesos text={"Servicios"} icon={<BsCreditCard2BackFill />} />
        <Accesos text={"prestamos"} icon={<RiShakeHandsFill />} />
        <Accesos text={"Centro de ayuda"} icon={<RiQuestionnaireFill />} />
      </article>
      <article className="grid gap-10">
        <h4 className="font-medium">Lorem ipsum, dolor sit amet consectetur</h4>
        <div className="grid sm:grid-cols-2">
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos
            ab dolorem eum dolore cum, non distinctio eligendi obcaecati ipsum
            quas cupiditate aspernatur, eveniet quo consectetur iure officia
            earum quisquam.
          </p>
          <div>
            <img
              className="w-[280px] mx-auto"
              src="/accounts/logocurrency.svg"
              alt="img bank"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </section>
  );
};
export default CardInfo;
