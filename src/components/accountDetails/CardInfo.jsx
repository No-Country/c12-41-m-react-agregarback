import Card from "./Card";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { RiShakeHandsFill, RiQuestionnaireFill } from "react-icons/ri";
import Accesos from "./Accesos";
import { useState } from "react";

const CardInfo = () => {
  const [currentCard, setCurrentCard] = useState({});
  const cards = [
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
  ];

  const handleChangeCurrentCard = (e) => {
    const card = cards.find((card) => card.id == e.target.value);
    setCurrentCard(card);
  };

  return (
    <section className="pt-10">
      <article className="flex flex-col gap-6 justify-center items-center">
        <article className="relative">
          <div className="absolute right-[-20%] top-[-40%]">
            <img src="/accounts/Ellipse 10.png" alt="elipse" loading="lazy" />
          </div>
          <div className="absolute left-[-15%] bottom-[-30%]">
            <img src="/accounts/Ellipse 20.png" alt="elipse" loading="lazy" />
          </div>
          <Card
            accountNumber={currentCard.cardNumber}
            name={"Gabriel Shymabuku"}
            type={currentCard.type}
            date={currentCard.createdAt}
            img={`/accounts/${currentCard.type}.webp`}
          />
        </article>
        <select
          onChange={(e) => handleChangeCurrentCard(e)}
          className="outline-none text-sm text-white rounded-md bg-transparent py-1"
        >
          {cards.map((card) => (
            <option key={card.id} className="bg-gray" value={card.id}>
              {card.cardNumber}
            </option>
          ))}
        </select>
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
