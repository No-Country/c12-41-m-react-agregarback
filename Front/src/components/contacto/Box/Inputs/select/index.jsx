import BoxInputClass from "../classGeneral"

const SelectComp = () =>{
    return(
    <>
    <div className="" id="type-of-document">
        <label for="type" className="text-left text-orange">
          Tipo de documento<b>*</b>
        </label>
        <div className="w-96.06 h-16.56">
          <select
            name=""
            className="w-full h-7 bg-white flex items-center px-2 text-gray rounded-md"
            id="type"
          >
            <option value="seleccion" className="text-dark">
              Seleccion
            </option>
            <option value="dni" className="text-dark">
              dni
            </option>
            <option value="seleccion" className="text-dark">
              Seleccion
            </option>
            <option value="seleccion" className="text-dark">
              Seleccion
            </option>
            <option value="seleccion" className="text-dark">
              Seleccion
            </option>
          </select>
        </div>
      </div>
      <div className="w-full" id="Documento">
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