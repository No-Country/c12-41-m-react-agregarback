import React, { useState } from "react";
import BoxInputClass, { boxDivInputs, boxInputs } from "../classGeneral";

const NameAndSurname = ({ onFormSubmit, onInputChange }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    setName(value);
    onInputChange(value, surname);
  };

  const handleSurnameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    setSurname(value);
    onInputChange(name, value);
  };

  const isNameValid = /^[A-Za-z]+$/.test(name);
  const isSurnameValid = /^[A-Za-z]+$/.test(surname);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNameValid && isSurnameValid) {
      onFormSubmit(name, surname);
    }
  };

  return (
    <>
      <div className={boxInputs} id="user">
        <label htmlFor="Name" className="capitalize">
          Nombre<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <input
            type="text"
            required
            id="Name"
            className={BoxInputClass}
            value={name}
            onChange={handleNameChange}
            title={isNameValid ? "" : "Ingrese solo letras en el nombre"}
            autoComplete="off"
            placeholder="Ejemplo: Juan"
          />
        </div>
      </div>

      <div className={boxInputs} id="apellido">
        <label htmlFor="ape" className="capitalize">
          Apellido<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <input
            type="text"
            required
            id="ape"
            className={BoxInputClass}
            value={surname}
            onChange={handleSurnameChange}
            title={isSurnameValid ? "" : "Ingrese solo letras en el apellido"}
            autoComplete="off"
            placeholder="Ejemplo: Pérez"
          />
        </div>
      </div>
    </>
  );
};

export default NameAndSurname;
