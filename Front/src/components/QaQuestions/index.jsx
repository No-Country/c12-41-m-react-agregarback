import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQPage = () => {
  const faqItems = [
    {
      question: "Solicita una Tarjeta AccesBank",
      content: {
        text1: `Pregunta: ¿Cómo solicito una tarjeta Accesbank? `,
        text2: "Respuesta: Accesbank ha diseñado una herramienta en línea para ayudarte a tomar decisiones sobre las tarjetas que tienes disponibles. "
      },
    },
    {
      question: "Pagar las facturas",
      content:
        {
          
          text1: `Pregunta: ¿Puedo pagar las facturas de servicios que aceptan Accesbank directamente desde este sitio?`,
          text2: "Respuesta: No. Para pagar una factura, visita el sitio web del proveedor de servicio para conocer las instrucciones de cómo pagarles. "
   
        }
    },
    {
      question: "Se comprometió mi tarjeta",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper massa.",
    },
    {
      question: "Beneficios de la Tarjeta",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper massa.",
    },
    {
      question: "Tarjetas con Chip/EMV",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper massa.",
    },
    {
      question: "Comienzas a Aceptar",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper massa.",
    },
    {
      question: "Consultas por las autoridades",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper massa.",
    },
    {
      question: "Reposición de Tarjeta",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper massa.",
    },
    {
      question: "Robo o extravío de Tarjeta",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper massa.",
    },
    {
      question: "Comunicar un Fraude",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper massa.",
    },
    {
      question: "Telefónica o Correo Electrónico Fraudulento",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper massa.",
    },
    {
      question: "Soporte de navegador",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae semper massa.",
    },
  ];

  return (
    <div className="h-screen bg-Qa-bg bg-cover bg-no-repeat relative flex justify-center">
      <div className="absolute bg-gradient-to-t from-dark via-gray to-dark opacity-95 h-screen w-full"></div>
      <div className="z-10 h-screen w-1/2">
        <h2 className="text-4xl font-bold text-orange mt-5 text-left">
          <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
          Preguntas Frecuentes

          </span>
        </h2>
        <section className="bg-dark h-max-screen mt-10">
          {faqItems.map((item, index) => (
            <FaqItem
              question={item.question}
              content={item.content}
              key={index}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

const FaqItem = ({ question, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex justify-between px-6 items-center h-[46px] cursor-pointer hover:bg-gray transition-colors"
        onClick={toggleOpen}
      >
        <h3 className="text-orange text-left text-xl">{question}</h3>
        {isOpen ? (
          <AiOutlineMinus className="fill-orange w-6 h-6" />
        ) : (
          <AiOutlinePlus className="fill-orange w-6 h-6" />
        )}
      </div>
      {isOpen && <div className="px-6 py-4 flex-wrap flex justify-start text-left">
       <p> {content.text1 }</p>
       <p>{content.text2}</p></div>}
    </div>
  );
};

export default FAQPage;
