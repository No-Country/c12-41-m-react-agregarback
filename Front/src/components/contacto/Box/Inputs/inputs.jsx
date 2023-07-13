import BoxInputClass, { boxDivInputs, boxInputs } from "./classGeneral";
import SelectComp from "./select";

const InputsContact = () => {

  return (
    <div className="h-fit md:w-fit w-full flex flex-col justify-center items-center md:grid   md:grid-cols-2 md:grid-rows-3 md:gap-12 gap-3 text-orange text-left">
      <SelectComp/>
      
      <div className={boxInputs} id="user">
        <label for="Name" className="capitalize">
          nombre<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <input
            type="text"
           required
            id="Name"
            className={BoxInputClass}
          />
        </div>
      </div>
      <div className={boxInputs} id="apellido">
        <label for="ape" className="capitalize">
          apellido<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <input
            type="text"
            required
            id="ape"
            className={BoxInputClass}
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 md:grid-rows-0 md:gap-2" id="Numero">
        <div>
        <label for="nArea" className="capitalize">
          n*area<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <input
            type="tel"
           
            id="nArea"
            className={BoxInputClass}
          />
        </div>
        </div>
        <div>
        <label for="num" className="capitalize">
          tel/cel<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <input
            type="tel"
            required
            id="num"
            className={BoxInputClass}
          />
        </div>
        </div>
        
      </div>
      <div className={boxInputs} id="email">
        <label for="email" className="capitalize">
          correo electronico<b>*</b>
        </label>
        <div className={boxDivInputs}>
          <input
            type="email"
            required
            id="email"
            className={BoxInputClass}
          />
        </div>
      </div>
    </div>
  );
};
export default InputsContact;
