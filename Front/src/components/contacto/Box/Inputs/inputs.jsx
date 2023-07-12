import BoxInputClass from "./classGeneral";
import SelectComp from "./select";

const InputsContact = () => {
   

  return (
    <div className="h-fit grid grid-cols-2 grid-rows-3 gap-12 text-orange text-left">
      <SelectComp/>
      
      <div className="w-full" id="Documento">
        <label for="Name" className="capitalize">
          nombre<b>*</b>
        </label>
        <div className="w-96.06 h-16.56">
          <input
            type="text"
           required
            id="Name"
            className={BoxInputClass}
          />
        </div>
      </div>
      <div className="w-full" id="Documento">
        <label for="ape" className="capitalize">
          apellido<b>*</b>
        </label>
        <div className="w-96.06 h-16.56">
          <input
            type="text"
            required
            id="ape"
            className={BoxInputClass}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 grid-rows-0 gap-2" id="Numero">
        <div>
        <label for="nArea" className="capitalize">
          n*area<b>*</b>
        </label>
        <div className="w-96.06 h-16.56">
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
        <div className="w-96.06 h-16.56">
          <input
            type="tel"
            required
            id="num"
            className={BoxInputClass}
          />
        </div>
        </div>
        
      </div>
      <div className="w-full" id="Documento">
        <label for="email" className="capitalize">
          correo electronico<b>*</b>
        </label>
        <div className="w-96.06 h-16.56">
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
