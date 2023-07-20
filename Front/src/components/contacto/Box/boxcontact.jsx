import React, { useRef, useState, useEffect } from "react";
import CommentComp from "./Comentario";
import Verificado from "./verficado";
import { TickIcon } from "../../Icons";
import SelectComp from "./Inputs/select";
import NameAndSurname from "./Inputs/NameSurname";
import NumberTel from "./Inputs/NumberTel";
import CorreoInput from "./Inputs/Email";

const Boxcontact = ({ submitEndpoint }) => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          selectedOption: "",
          name: "",
          surname: "",
          areaNumber: "",
          phoneNumber: "",
          emailValue: "",
          commentOption: "",
          comment: "",
        };
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const {
      selectedOption,
      name,
      surname,
      areaNumber,
      phoneNumber,
      emailValue,
      commentOption,
      comment,
    } = formData;

    const isFormValid =
      selectedOption &&
      name &&
      surname &&
      areaNumber &&
      phoneNumber &&
      emailValue &&
      commentOption &&
      comment.length >= 20;

    setIsFormValid(isFormValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      setSubmitted(true);
      console.log("FormData:", formData);
      localStorage.removeItem("formData"); // Remover los datos del localStorage al enviar el formulario

      // Enviar los datos al endpoint
      fetch(submitEndpoint, {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta del endpoint:", data);
        })
        .catch((error) => {
          console.error("Error al enviar los datos:", error);
        });

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      setFormError("Por favor complete todos los campos obligatorios.");
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSelectedOptionChange = (option) => {
    handleInputChange("selectedOption", option);
  };

  const handleIdentificationChange = (value) => {
    handleInputChange("identification", value);
  };

  const handleFormSubmit = (name, surname) => {
    console.log("Nombre:", name);
    console.log("Apellido:", surname);
  };

  const handleEmailChange = (email) => {
    handleInputChange("emailValue", email);
  };

  const handleCommentChange = (option, comment) => {
    handleInputChange("commentOption", option);
    handleInputChange("comment", comment);
  };

  return (
    <div className="relative">
      <form action="https://getform.io/f/55d2b4a0-d498-45f3-a2b7-d6c5527dbaa3" method="post"
        ref={formRef}
        onSubmit={handleSubmit}
        className="md:w-4/4 md:h-fit md:bg-opacity-90 bg-opacity-90 bg-dark mix-blend-normal border border-dark rounded-md p-2 m m-auto md:m-3 md:transition-2"
      >
        <h2 className="w-96.04 h-7.76 font-inter font-semibold text-2xl md:text-3xl flex items-center text-orange my-2">
          <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
          Completa tus datos
          </span>
     
fanta432        </h2>
        <div className="h-fit md:w-fit w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 md:grid-rows-3 md:gap-4 gap-2 text-orange text-left">
          <SelectComp
            onSelectedOptionChange={handleSelectedOptionChange}
            onIdentificationChange={handleIdentificationChange}
          />

          <NameAndSurname
            onFormSubmit={handleFormSubmit}
            onInputChange={(name, surname) => {
              handleInputChange("name", name);
              handleInputChange("surname", surname);
            }}
          />

          <NumberTel
            onInputChange={(areaNumber, phoneNumber) => {
              handleInputChange("areaNumber", areaNumber);
              handleInputChange("phoneNumber", phoneNumber);
            }}
          />

          <CorreoInput onEmailChange={handleEmailChange} />
        </div>

        <p className="text-left font-extrabold text-orange capitalize md:my-4 my-1">
          (*) Campos de interacción obligatorios
        </p>

        <CommentComp onCommentChange={handleCommentChange} />

        {formError && (
          <p className="text-red-500">{formError}</p>
        )}

        <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 relative">
          <Verificado />

          <button
            type="submit"
            className="w-40 h-10 flex md:absolute md:bottom-4 md:right-4 m-auto justify-center items-center rounded-full bg-orange text-dark font-bold focus:bg-dark focus:ease-in ease-out transition duration-500 focus:text-white"
            disabled={!isFormValid}
          >
            Enviar
          </button>
        </div>
      </form>

      {submitted && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-64 h-12 bg-green text-white text-xl font-bold rounded-full shadow-lg">
          <TickIcon className="w-5 h-5 mr-2 fill-current text-orange" />
          Enviado correctamente
        </div>
      )}
    </div>
  );
};

export default Boxcontact;
