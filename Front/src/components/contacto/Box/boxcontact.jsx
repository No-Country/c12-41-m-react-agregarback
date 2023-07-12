import CommentComp from "./Comentario";
import InputsContact from "./Inputs/inputs";
import Verificado from "./verficado";

const Boxcontact = () => {
    
  return (
    <form
      className="w-4/4 h-fit bg-opacity-60 bg-dark mix-blend-normal border border-dark rounded-md p-2 m-3" 
      for=""
    >
      <h2 className="w-96.04 h-7.76 font-inter font-semibold text-3xl  flex items-center text-orange my-2 ">
        Completa tus datos
      </h2>
      <InputsContact />
      <p className=" text-left font-extrabold text-orange capitalize my-2">
        (*) campos de interaccion obligatorios
      </p>
      <CommentComp />
      <div className="grid grid-cols-2 grid-rows-0 gap-2">
        <Verificado />
        <button
          type="submit"
          className=" w-40 h-10 flex justify-center items-center m-auto rounded-md bg-orange text-dark font-bold hover:bg-dark hover:ease-in ease-out transition duration-500 hover:text-white"
          
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
export default Boxcontact;
