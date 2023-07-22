import { useEffect, useState } from "react";
import Card from "./Card";

const CarruselCard = ({ listOfCards, name }) => {
  const [carruselPosition, setCarruselPosition] = useState(0);
  const handleChangeCurrentCard = (e) => {
    setCarruselPosition(e.target.value);
  };
  useEffect(() => {
    setCarruselPosition(0);
  }, [listOfCards]);

  return (
    <>
      <section className="w-[280px] h-[190px] overflow-hidden relative pb-5">
        <div
          style={{ left: carruselPosition * -100 + "%" }}
          className={`flex w-[300%] absolute`}
        >

          {listOfCards.map((card) => (
            <Card
              key={card.id}
              accountNumber={card.cardNumber}
              name={name}
              type={card.type}
              date={card.createdAt}
              img={`/accounts/${card.type}.webp`}
            />
          ))}
        </div>
      </section>
      <div className="grid grid-cols-3 gap-4 relative justify-items-center h-[45px]">
        {listOfCards.map((item, i) => (
          <button
            key={item.id}
            value={i}
            onClick={handleChangeCurrentCard}
            type="button"
            className={`w-[40px] aspect-square hover:bg-orange rounded-full ${carruselPosition == i ? "bg-dark" : "bg-white"
              }`}
          />
        ))}
      </div>
    </>
  );
};
export default CarruselCard;
