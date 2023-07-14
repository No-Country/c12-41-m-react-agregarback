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
    e.target.value = value;

    if (value.length > 0) {
      value = "+" + value;
    }

    setAreaNumber(value);
    onInputChange(value, phoneNumber);
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (!phoneRegex.test(value)) {
      value = value.replace(/[^0-9]/g, "");
    }
    e.target.value = value;

    setPhoneNumber(value);
    onInputChange(areaNumber, value);
  };

  const isAreaNumberMin = areaNumber.length < 1;

  return (
    <div className="grid md:grid-cols-2 md:gap-2" id="Numero">
      <div>
        <label htmlFor="nArea" className="capitalize">
          Número de área<b>*</b>
        </label>
        <div
          className={`${boxDivInputs} ${
            isAreaNumberMin ? "border-red-600" : ""
          }`}
        >
          <input
            type="tel"
            id="nArea"
            className={`${BoxInputClass} ${
              isAreaNumberMin ? "bg-red-100" : ""
            }`}
            value={areaNumber}
            onChange={handleAreaChange}
            maxLength={5}
            placeholder="1234"
            title="Ingrese un número de área válido de 1 a 4 dígitos"
            minLength={1}
            autoComplete="off"
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
            className={BoxInputClass}
            value={phoneNumber}
            onChange={handlePhoneChange}
            maxLength={10}
            placeholder="XXXXXXXXX"
            title="Ingrese un número de teléfono/celular válido de 1 a 10 dígitos"
            minLength={1}
            
          />
        </div>
      </div>
    </div>
  );
};

export default NumberTel;
export { NumberTel };
