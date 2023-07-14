import React, { useState } from "react";
import BoxInputClass, { boxDivInputs } from "../classGeneral";

const NumberTel = ({ onInputChange }) => {
  const [areaNumber, setAreaNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const areaRegex = /^\d{1,4}$/;
  const phoneRegex = /^\d{1,10}$/;

  const handleAreaChange = (e) => {
    let value = e.target.value;
    if (!areaRegex.test(value)) {
      value = value.replace(/[^0-9]/g, "");
    }

    setAreaNumber(value);
    onInputChange(value, phoneNumber);
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (!phoneRegex.test(value)) {
      value = value.replace(/[^0-9]/g, "");
    }

    setPhoneNumber(value);
    onInputChange(areaNumber, value);
  };

  const isAreaNumberEmpty = areaNumber.trim() === "";
  const isPhoneNumberEmpty = phoneNumber.trim() === "";

  return (
    <div className="grid md:grid-cols-2 md:gap-2" id="Numero">
      <div>
        <label htmlFor="nArea" className="capitalize">
          Número de área<b>*</b>
        </label>
        <div
          className={`${boxDivInputs} ${
            isAreaNumberEmpty ? "opacity-50" : ""
          }`}
        >
          <input
            type="tel"
            id="nArea"
            className={`${BoxInputClass} ${
              isAreaNumberEmpty ? "bg-gray-300 cursor-not-allowed" : ""
            }`}
            value={areaNumber}
            onChange={handleAreaChange}
            maxLength={4}
            placeholder="1234"
            title="Ingrese un número de área válido de 1 a 4 dígitos"
            minLength={1}
            autoComplete="off"
            disabled={isAreaNumberEmpty}
          />
        </div>
      </div>

      <div>
        <label htmlFor="num" className="capitalize">
          Teléfono/Celular<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <input
            type="tel"
            required
            id="num"
            className={`${BoxInputClass} ${
              isPhoneNumberEmpty ? "opacity-50" : ""
            }`}
            value={phoneNumber}
            onChange={handlePhoneChange}
            maxLength={10}
            placeholder="XXXXXXXXX"
            title="Ingrese un número de teléfono/celular válido de 1 a 10 dígitos"
            minLength={1}
            autoComplete="off"
            disabled={isPhoneNumberEmpty}
          />
        </div>
      </div>
    </div>
  );
};

export default NumberTel;
export { NumberTel };
