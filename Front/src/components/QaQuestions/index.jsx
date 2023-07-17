import React from 'react';

// Componente de pregunta frecuente
const FAQItem = ({ question, answer }) => (
  <div className="mb-4">
    <h3 className="text-xl font-bold">{question}</h3>
    <p className="text-gray-700">{answer}</p>
  </div>
);

// Componente de página de preguntas frecuentes para bancos
const FAQPage = () => {
  // Array de preguntas frecuentes para bancos
  const faqs = [
    {
      question: '¿Cuáles son los requisitos para abrir una cuenta bancaria?',
      answer: 'Para abrir una cuenta bancaria, necesitarás presentar tu identificación oficial, comprobante de domicilio y realizar un depósito inicial mínimo.'
    },
    {
      question: '¿Cuáles son las tarifas asociadas a mi cuenta bancaria?',
      answer: 'Las tarifas asociadas a tu cuenta bancaria pueden variar. Te recomendamos revisar el contrato y los términos y condiciones para obtener información detallada sobre las tarifas.'
    },
    {
      question: '¿Cómo puedo acceder a mi cuenta en línea?',
      answer: 'Puedes acceder a tu cuenta en línea ingresando tu nombre de usuario y contraseña en el portal bancario en nuestro sitio web.'
    },
    // Agrega más preguntas frecuentes aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Preguntas Frecuentes para Bancos</h1>
      {faqs.map(({ question, answer }, index) => (
        <FAQItem key={index} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default FAQPage;
