import React, { useState } from "react";
import BoxInputClass, { boxDivInputs, boxInputs } from "../classGeneral";

const CorreoInput = ({ onEmailChange }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailExist, setEmailExist] = useState(false);

  const handleEmailChange = async (e) => {
    const value = e.target.value;
    setEmail(value);

    const isValidEmail = validateEmail(value);
    setEmailError(isValidEmail ? "" : "Correo electrónico inválido");

    if (isValidEmail) {
      try {
        const exists = await checkEmailExists(value);
        setEmailExist(exists);
      } catch (error) {
        console.log("Error al verificar el correo electrónico:", error);
      }
    } else {
      setEmailExist(false);
    }

    onEmailChange(value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkEmailExists = async (email) => {
    const API_KEY = "7029d1dee153ec7e6cab75c86890a81a";
    const response = await fetch(
      `http://apilayer.net/api/check?access_key=${API_KEY}&email=${email}&smtp=1&format=1`
    );
    const data = await response.json();
    return data.format_valid && data.smtp_check;
  };

  const getEmailTitle = () => {
    if (emailError) {
      return emailError;
    }
    if (emailExist) {
      return "El correo electrónico existe";
    }
    return "Ingrese un correo electrónico válido";
  };

  return (
    <div className={boxInputs} id="email">
      <label htmlFor="email" className="capitalize">
        Correo electrónico<b>*</b>
      </label>
      <div className={boxDivInputs}>
        <input
          type="email"
          required
          name="email"
          id="email"
          className={`${BoxInputClass} ${emailError ? "border-red-600" : ""}`}
          value={email}
          onChange={handleEmailChange}
          title={getEmailTitle()}
          placeholder="ejemplo@example.com"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default CorreoInput;
