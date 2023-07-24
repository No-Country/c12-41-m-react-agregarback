const CardProducts = ({ title, description, icon }) => {
  return (
    <div className="relative mx-auto py-6 px-6 rounded-3xl w-64 my-4 shadow-xl transition duration-300 transform hover:scale-105">
      <div className="mt-8">
        <div className="flex gap-4 mb-8 text-3xl font-bold">
          <h2 className="bg-gradient-to-r from-yellow to-orange text-transparent bg-clip-text">
            {title}
          </h2>{" "}
          <span className="flex items-center justify-center text-[50px]">
            {icon}
          </span>
        </div>
        <p className="text-xl font-semibold my-2 text-white">{description}</p>
      </div>
    </div>
  );
};

export default CardProducts;
