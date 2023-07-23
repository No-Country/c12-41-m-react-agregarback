import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://res.cloudinary.com/danjwp1pg/image/upload/c_scale,w_1320,h_583/v1689853943/Carousel/prest.jpg",
    "https://res.cloudinary.com/danjwp1pg/image/upload/c_scale,w_1320,h_583/v1689853948/Carousel/tarjetaab.jpg",
    "https://res.cloudinary.com/danjwp1pg/image/upload/v1689858271/Carousel/ahorro.jpg",
    "https://res.cloudinary.com/danjwp1pg/image/upload/v1689857784/Carousel/investment.jpg",
    "https://res.cloudinary.com/danjwp1pg/image/upload/v1689853938/Carousel/servicios.jpg",
  ];

  const titles = [
    "Préstamos",
    "Tarjetas de Crédito",
    "Caja de Ahorro",
    "Inversiones",
    "Pago de Servicios",
  ];

  const paragraphs = [
    "¡Solicitá hoy tu préstamo personal para hacer realidad tus proyectos!",
    "¡Con tu tarjeta de crédito de AccessBank tenés miles de promociones y descuentos!",
    "¡Descubre una nueva forma de gestionar tu dinero con nuestra caja de ahorro!",
    "¡Multiplica tus ganancias con nuestras inversiones digitales!",
    "¡Disfrutá de la comodidad de pagar tus servicios en línea!",
  ];
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (    
    <div className="bg-dark relative rounded-lg overflow-hidden">
      <div
        className="flex transition-all duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          // width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="grid-grid-rows-[1fr_auto] w-full rounded-lg p-4 flex-shrink-0"
          >
            <img
              className="max-h-[550px] w-full justify-center object-cover rounded-lg"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <div className="mt-4 h-[90px]">
              <h2 className="mb-5 font-sans text-2xl font-bold tracking-tight text-yellow sm:text-4xl sm:leading-none">{titles[index]}</h2>
              <p className="text-orange text-lg sm:text-2xl font-semibold bg-clip-text">{paragraphs[index]}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 z-10 bg-white text-gray p-3 rounded-full shadow-md transform -translate-y-1/2"
      >
        <FaArrowLeft className="h-4 aspect-square sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 z-10 bg-white text-gray p-3 rounded-full shadow-md transform -translate-y-1/2"
      >
        <FaArrowRight className="h-4 aspect-square sm:h-6 sm:w-6" />
      </button>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 mx-2 rounded-full ${
              index === currentSlide ? "bg-gray-900" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>

  );
};

export default Carousel;