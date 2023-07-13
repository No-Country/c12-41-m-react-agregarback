import BoxInputClass, { boxDivInputs, boxInputs } from "../classGeneral"

const SelectComp = () =>{
    return(
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
          >
            <option value="seleccion" >
              Seleccion
            </option>
            <option value="dni" className="text-dark">
              DNI
            </option>
            <option value="seleccion" className="text-dark">
              LE
            </option>
            <option value="seleccion" className="text-dark">
              LC
            </option>
            <option value="CI" className="text-dark">
              CI
            </option>
            <option value="CI" className="text-dark">
              CI
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
            placeholder="Documento"
            id="documento"
            className={BoxInputClass}
          />
        </div>
      </div>
      </>
    )
}

export default SelectComp