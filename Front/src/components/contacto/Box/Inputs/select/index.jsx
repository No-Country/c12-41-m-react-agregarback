import { useState } from "react";
import BoxInputClass, { boxDivInputs, boxInputs } from "../classGeneral";

const SelectComp = () => {
  const [selectedOption, setselectedOption] = useState("");
  const [inputValue, setinputValue] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = (event.target.value);
    setselectedOption(selectedValue)
  

 if(selectedValue === "dni" ){
     setinputValue("XXXXXXXXX")
 } else if (selectedValue ==="pass"){
   setinputValue("Elegiste " + selectedValue )
 } else if (selectedValue === "CUIL"){
   setinputValue(selectedValue)
 } else if( selectedValue === "CUIT"){
   setinputValue(selectedValue)
 }
};

const handleInputChange = (event) => {
   setinputValue(event.target.value)
}


  return (
    <>
      <div className={boxInputs} id="type-of-document">
        <label for="type" className="text-left text-orange">
          Tipo de documento<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <select
            name=""
            className="md:w-full w-full  h-7 bg-white md:flex md:items-center md:px-2 text-gray rounded-md"
            id="type"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="seleccion">Seleccion</option>
            <option value="dni" className="text-dark">
              DNI
            </option>
            <option value="pass" className="text-dark">
              PAS
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
        <label for="documento" className="">
          Documento<b>*</b>
        </label>
        <div className="w-96.06 h-16.56">
          <input
            type="text"
            id="documento"
            placeholder="XXXXXXX"
            className={BoxInputClass}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default SelectComp;
