import { useState } from "react";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiQuestionnaireFill, RiShakeHandsFill } from "react-icons/ri";

import Accesos from "./Accesos";
import CarruselCard from "./CarruselCard";

const CardInfo = ({ account }) => {
  const { accountNumber, alias, amount, cards, cbu, cvu, status, transfers } = account;

  return (
    <section className="pt-10">
      <article className="flex flex-col gap-6 justify-center items-center relative py-10">
        <article className="relative">
          <div className="absolute right-[-20%] top-[-40%]">
            <img src="/accounts/Ellipse 10.png" alt="elipse" loading="lazy" />
          </div>
          <div className="absolute left-[-15%] bottom-[-10%]">
            <img src="/accounts/Ellipse 20.png" alt="elipse" loading="lazy" />
          </div>
          <CarruselCard listOfCards={cards} />
        </article>
      </article>
      <article className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-3 auto-cols-fr py-10">
        <Accesos text={"Inversiones"} icon={<AiOutlineLineChart />} />
        <Accesos text={"prestamos"} icon={<FaHandHoldingDollar />} />
        <Accesos text={"Centro de ayuda"} icon={<RiQuestionnaireFill />} />
        <Accesos text={"Solicitar nueva tarjeta"} icon={<BsCreditCard2BackFill />} />
        <Accesos text={"Solicitar nueva cuenta"} icon={<RiShakeHandsFill />} />
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
