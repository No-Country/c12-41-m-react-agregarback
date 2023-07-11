const Card = ({ type, name, accountNumber, date, img }) => {
  return (
    <div className="w-[280px] h-[190px] rounded-3xl border-t-[1px] border-r-[1px] border-[#A8A8A8] grid grid-rows-2 backdrop-blur-[8px] shadow-lg bg-gradient-to-r from-white/10 to-transparent ">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex justify-end items-center">
          <div>
            <img
              className="w-[40px] object-contain"
              src={img}
              alt="card type"
              download="lazy"
            />
          </div>
          <h4 className="font-serif text-xs capitalize w-[60px]">{type}</h4>
        </div>
        <div className="grid self-center justify-end pr-2">
          <img src="/accounts/Group.png" alt="" />
        </div>
      </div>
      <div className="grid grid-rows-2 pb-5 gap-2">
        <div className="pl-[30px] grid grid-rows-2 justify-start items-center">
          <h4 className="capitalize text-[10px] opacity-60 text-left">
            {name}
          </h4>
          <span>{accountNumber}</span>
        </div>
        <div className="pl-[30px] grid grid-rows-2 justify-start">
          <span className="capitalize text-[10px] opacity-60 text-left items-center">
            validade
          </span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
