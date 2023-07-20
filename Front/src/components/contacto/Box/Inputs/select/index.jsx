import React, { useState } from "react";
import BoxInputClass, { boxInputs, boxDivInputs } from "../classGeneral";

const SelectComp = ({ onSelectedOptionChange, onIdentificationChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [identification, setIdentification] = useState("");
  const [validationResult, setValidationResult] = useState("");

  const regexMap = {
    DNI: /^\d{0,8}$/,
    Pasaporte: /^[A-Za-z0-9]{0,20}$/,
    CUIL: /^\d{0,2}-\d{0,8}-\d{0,1}$/, // Formato: 20-12345678-9
    CUIT: /^\d{0,2}-\d{0,8}-\d{0,1}$/, // Formato: 30-12345678-9
  };

  const handleSelectedOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    setIdentification("");
    setValidationResult("");
    onSelectedOptionChange(option);
  };

  const handleIdentificationChange = (e) => {
    const value = e.target.value;
    const regex = regexMap[selectedOption] || /^.*$/;

    // Agregar automáticamente el prefijo "20-" para CUIL y "30-" para CUIT
    let formattedValue = value;
    if (selectedOption === "CUIL" && value.length < 3) {
      formattedValue = `20-${value}`;
    } else if (selectedOption === "CUIT" && value.length < 3) {
      formattedValue = `30-${value}`;
    }

    // Agregar automáticamente el sufijo "-9" si el valor tiene el formato correcto
    if (selectedOption === "CUIL" || selectedOption === "CUIT") {
      if (formattedValue.match(/^\d{2}-\d{8}$/)) {
        formattedValue += "-9";
      }
    }

    const sanitizedValue = formattedValue.replace(/[^A-Za-z0-9-]/g, "");
    setIdentification(sanitizedValue);
    handleValidation(sanitizedValue);
    onIdentificationChange(sanitizedValue);
  };


  const handleValidation = (value) => {
    const regex = regexMap[selectedOption];

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

  const inputTitle = selectedOption
    ? {
        DNI: "Ingrese un número de DNI válido (1 a 8 dígitos)",
        Pasaporte: "Ingrese un número de pasaporte válido (hasta 20 caracteres alfanuméricos)",
        CUIL: "Ingrese un número de CUIL válido (Formato: 20-12345678-9)",
        CUIT: "Ingrese un número de CUIT válido (Formato: 30-12345678-9)",
      }[selectedOption]
    : "Elige un tipo de documento";

  const inputPlaceholder = selectedOption
    ? {
        DNI: "Ejemplo: 12345678",
        Pasaporte: "Ejemplo: ABC123456",
        CUIL: "Ejemplo: 20-12345678-9",
        CUIT: "Ejemplo: 30-12345678-9",
      }[selectedOption]
    : "Elige un tipo de documento";

  const maxCharacters = selectedOption
    ? {
        DNI: 8,
        Pasaporte: 20,
        CUIL: 13,
        CUIT: 13,
      }[selectedOption]
    : 0;

  return (
    <>
      <div className={boxInputs} id="type-of-document">
        <label htmlFor="type" className="text-left text-orange">
          Tipo de documento<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <select
            name="TipoDeDocumento"
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
            name="text"
            id="documento"
            placeholder={inputPlaceholder}
            className={BoxInputClass}
            value={identification}
            onChange={handleIdentificationChange}
            disabled={!selectedOption}
            maxLength={maxCharacters}
            required
            title={inputTitle}
            autoComplete="off"
          />


        </div>
      </div>
    </>
  );
};

export default SelectComp;
