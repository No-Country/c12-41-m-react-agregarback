const ThrowModalError = ({ error }) => {
  return (
    <section className="erorr w-full h-[100vh] bg-dark/40 flex justify-center fixed items-center p-3 z-50 top-0 left-0">
      <div className="w-full max-w-[400px] uppercase font-semibold min-h-[250px] rounded-lg text-dark grid content-center bg-white relative">
        {error}
      </div>
    </section>
  );
};
export default ThrowModalError;
