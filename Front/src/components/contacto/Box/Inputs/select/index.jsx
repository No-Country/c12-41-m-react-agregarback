import React, { useState } from "react";
import BoxInputClass, { boxInputs, boxDivInputs } from "../classGeneral";

const SelectComp = ({ onSelectedOptionChange, onIdentificationChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [identification, setIdentification] = useState("");
  const [validationResult, setValidationResult] = useState("");

  const handleSelectedOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    setIdentification("");
    setValidationResult("");
    onSelectedOptionChange(option);
  };

  const handleIdentificationChange = (e) => {
    const value = e.target.value;
    const regexMap = {
      DNI: /^\d{0,8}$/,
      Pasaporte: /^[A-Za-z0-9]{0,20}$/,
      CUIL: /^(20|23|24|27)\d{0,11}$/,
      CUIT: /^(30|33|34)\d{0,11}$/,
    };
    const regex = regexMap[selectedOption] || /^.*$/;
    const sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, "").slice(0, regex.test(value) ? regex.exec(value)[0].length : 0);
    setIdentification(sanitizedValue);
    handleValidation(sanitizedValue);
    onIdentificationChange(sanitizedValue);
  };

  const handleValidation = (value) => {
    const validations = {
      DNI: /^\d{1,8}$/,
      Pasaporte: /^[A-Za-z0-9]{1,20}$/,
      CUIL: /^(20|23|24|27)\d{1,11}$/,
      CUIT: /^(30|33|34)\d{1,11}$/,
    };

    const regex = validations[selectedOption];

    if (regex && value.length > 0) {
      if (!regex.test(value)) {
        setValidationResult("Número de identificación inválido");
      } else {
        setValidationResult("");
      }
    } else {
      setValidationResult("");
    }
  };

  const inputTitle = (() => {
    switch (selectedOption) {
      case "DNI":
        return "Ingrese un número de DNI válido (1 a 8 dígitos)";
      case "Pasaporte":
        return "Ingrese un número de pasaporte válido (hasta 20 caracteres alfanuméricos)";
      case "CUIL":
        return "Ingrese un número de CUIL válido (11 dígitos)";
      case "CUIT":
        return "Ingrese un número de CUIT válido (11 dígitos)";
      default:
        return "Elige un tipo de documento";
    }
  })();

  const inputPlaceholder = (() => {
    switch (selectedOption) {
      case "DNI":
        return "Ejemplo: 12345678";
      case "Pasaporte":
        return "Ejemplo: ABC123456";
      case "CUIL":
        return "Ejemplo: 20123456789";
      case "CUIT":
        return "Ejemplo: 30123456789";
      default:
        return "Elige un tipo de documento";
    }
  })();

  const maxCharacters = (() => {
    switch (selectedOption) {
      case "DNI":
        return 8;
      case "Pasaporte":
        return 20;
      case "CUIL":
      case "CUIT":
        return 11;
      default:
        return 0;
    }
  })();

  const isOptionSelected = selectedOption === "";

  return (
    <>
      <div className={`${boxInputs} ${isOptionSelected ? "opacity-50" : ""}`} id="type-of-document">
        <label htmlFor="type" className="text-left text-orange">
          Tipo de documento<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <select
            name=""
            className={`${boxDivInputs} w-full h-7 bg-white flex items-center px-2 text-gray rounded-md`}
            id="type"
            value={selectedOption}
            onChange={handleSelectedOptionChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="DNI" className="text-dark">
              DNI
            </option>
            <option value="Pasaporte" className="text-dark">
              Pasaporte
            </option>
            <option value="CUIL" className="text-dark">
              CUIL
            </option>
            <option value="CUIT" className="text-dark">
              CUIT
            </option>
          </select>
        </div>
      </div>
      <div className={boxInputs} id="Documento">
        <label htmlFor="documento" className="">
          Documento<b>*</b>
        </label>
        <div className="w-96.06 h-16.56 relative">
          <input
            type="text"
            id="documento"
            placeholder={inputPlaceholder}
            className={`${BoxInputClass} ${isOptionSelected ? "bg-gray-500 opacity-50 cursor-not-allowed" : ""}`}
            value={identification}
            onChange={handleIdentificationChange}
            disabled={!selectedOption}
            maxLength={maxCharacters}
            required
            title={inputTitle}
          />

          {validationResult && selectedOption && identification !== "" && (
            <div className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 bg-red-600 text-red-100 text-xs rounded py-1 px-2 mt-1">
              {validationResult}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectComp;
