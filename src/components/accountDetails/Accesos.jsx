const Accesos = ({ icon, text }) => {
  return (
    <div className="grid grid-rows-[1fr,_55px] bg-dark text-white rounded-md shadow-md">
      <div className="w-full h-full text-4xl flex items-center justify-center p-2">
        {icon}
      </div>
      <span className="capitalize flex justify-center items-center">
        {text}
      </span>
    </div>
  );
};
export default Accesos;
