import BoxInputClass from "../Inputs/classGeneral";

const CommentComp = () => {
  return (
    <div className="w-96.04 h-7.76">
      <h4 className=" font-inter font-semibold text-2xl  flex items-center text-orange  capitalize">
        comentario
      </h4>
      <div>
        <select
          name=""
          id=""
          className="w-1/2 h-7 bg-white flex items-center px-2 text-gray rounded-md capitalize"
        >
          <option value="">
            tema <b>*</b>
          </option>
          <option value="">sitio web</option>
          <option value="">productos</option>
          <option value="">servicios</option>
          <option value="">empleados</option>
          <option value="">punto-compras</option>
          <option value="">bancón</option>
          <option value="">solicitud de contrato</option>
          <option value="">otros...</option>
        </select>
        <textarea
          name=""
          id="mensaje"
          rows="4"
          className=" p-2.5 w-full text-sm text-gray bg-gray-50 rounded-lg border border-gray-300 my-2 focus:border-0"
        ></textarea>
      </div>
    </div>
  );
};
export default CommentComp;
