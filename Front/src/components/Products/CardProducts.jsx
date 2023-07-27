const CardProducts = ({ title, description, icon }) => {
  return (
    <div className="relative mx-auto py-6 px-3 rounded-3xl xl:w-82 lg:w-79 md:w-50 h-[360px] flex justify-center items-center  my-4 shadow-xl transition duration-300 transform hover:scale-105">
      <div className="  h-full w-full flex flex-col items-center justify-evenly">
        <div className="flex  h-full 2xl:text-[24px]  xl:text-[23px] lg:text-[22px] md:text-[21px] text-[20px]   md:w-full  font-bold  justify-center  flex-col-reverse items-center"> 
          <h2 className="bg-gradient-to-r from-yellow to-orange h-full  flex justify-center items-center text-transparent bg-clip-text">
            {title}
          </h2>{" "}
          <span className="flex items-center w-max  justify-center text-[50px]  ">
            {icon}
          </span>
        </div>
        <p className=" transition  ease-in-out duration-500 font-semibold  text-white flex lg:justify-start items-start justify-center  h-full 2xl:text-[18px] xl:text-[16px]  xl:text-left lg:text-center lg:w-full w-3/4 ">{description}</p>
      </div>
    </div>
  );
};

export default CardProducts;
