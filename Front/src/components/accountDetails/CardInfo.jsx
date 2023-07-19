import { useState } from "react";


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
    </section>
  );
};
export default CardInfo;
