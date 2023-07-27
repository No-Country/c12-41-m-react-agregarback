import React, { useRef, useState, useEffect } from "react";
import CommentComp from "./Comentario";
import Verificado from "./verficado";
import { TickIcon } from "../../Icons";
import SelectComp from "./Inputs/select";
import NameAndSurname from "./Inputs/NameSurname";
import NumberTel from "./Inputs/NumberTel";
import CorreoInput from "./Inputs/Email";
import AWN from "awesome-notifications";

const Boxcontact = ({ submitEndpoint }) => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          selectedOption: "",
          identificatio: "",
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
      identifiacion,
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
      identifiacion &&
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
      localStorage.removeItem("formData"); // Eliminar los datos del localStorage al enviar el formulario

      // Enviar los datos al endpoint
      fetch(submitEndpoint, {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta del endpoint:", data);
          handleSuccesNotificacion(); // Llamamos a la función de notificación de éxito aquí después de recibir una respuesta exitosa del servidor.
        })
        .catch((error) => {
          console.error("Error al enviar los datos:", error);
        });

      setFormError("");
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

  const handleFormSubmit = (name, surname) => {
    console.log("Name:", name);
    console.log("Surname:", surname);
  };

  const handleIdentificationChange = (value) => {
    handleInputChange("identifiacion", value);
  };

  const handleEmailChange = (email) => {
    handleInputChange("emailValue", email);
  };

  const handleCommentChange = (option, comment) => {
    handleInputChange("commentOption", option);
    handleInputChange("comment", comment);
  };

  const handleSuccesNotificacion = () => {
    const notify = new AWN();
    notify.success(
      `¡Hemos enviado tu formulario de ayuda! Pronto nos pondremos en contacto contigo a través del correo electrónico proporcionado. Ten en cuenta que si es un día no hábil o feriado, te responderemos en el día hábil más próximo. ¡Gracias por contactarnos!`,
      {
        position: "bottom-left",
        duration: 5000, // Duración de la notificación en milisegundos
        classNames: ["bg-orange", "text-white", "p-4", "rounded"],
      }
    );

    // Recargar después de 5 segundos (igual al tiempo de duración de la notificación)
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  useEffect(() => {
    if (!submitted) {
      // Reiniciar los campos del formulario después de un envío exitoso
      setFormData({
        selectedOption: "",
        identifiacion: "",
        name: "",
        surname: "",
        areaNumber: "",
        phoneNumber: "",
        emailValue: "",
        commentOption: "",
        comment: "",
      });
    }
  }, [submitted]);

  return (
    <div className="relative">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="md:w-4/4 md:h-fit md:bg-opacity-90 bg-opacity-90 md:bg-dark bg-transparent mix-blend-normal md:border border-dark rounded-md p-2 m m-auto md:m-3 md:transition-2"
      >
        <h2 className="w-96.04 h-7.76 font-inter font-semibold text-2xl md:text-3xl flex items-center text-orange my-2 justify-center">
          <span className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
            Completa tus datos
          </span>
        </h2>
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
          (*) Required interaction fields
        </p>

        <CommentComp onCommentChange={handleCommentChange} />

        {formError && <p className="text-orange">{formError}</p>}

        <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 relative">
          <Verificado />

          <button
            type="submit"
            className="w-40 h-10 flex md:absolute md:bottom-4 md:right-4 m-auto justify-center items-center rounded-full bg-orange text-dark font-bold focus:bg-dark focus:ease-in ease-out transition duration-500 focus:text-white"
            disabled={!isFormValid}
            onClick={handleSuccesNotificacion}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Boxcontact;
