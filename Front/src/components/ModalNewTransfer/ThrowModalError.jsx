import { Link } from "react-router-dom";

const ThrowModalError = ({ error }) => {
  return (
    <section className="erorr w-full h-[100vh] bg-dark/40 flex flex-col justify-center fixed items-center p-3 z-50 top-0 left-0">
      <div className="w-full max-w-[400px] uppercase font-semibold min-h-[250px] rounded-lg text-dark grid content-center bg-white relative">
        {error}
        <button type="button" className="bg-gray absolute w-[200px] left-[50%] translate-x-[-50%] rounded-lg py-3 bottom-5">
          <Link className="text-[#ff0000] my-5" to={"/"}>
            Go Back
          </Link>
        </button>
      </div>
    </section>
  );
};
export default ThrowModalError;
