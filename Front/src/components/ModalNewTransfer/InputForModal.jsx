const InputForModal = ({label , type , name , handleChangeTransferInfo , infoForTransfer , errors}) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2">
      <label className="text-left font-medium w-[90px]" htmlFor="amount">
        {label}
      </label>
      <input
        className="bg-transparent outline-none border-b-2 border-yellow text-white uppercase grow"
        type={type}
        name={name}
        onChange={(e) => handleChangeTransferInfo(e.target.value, name)}
        id={name}
        value={infoForTransfer[name]}
      />
      {<span className="h-4 text-yellow text-[12px] col-span-2">{errors}</span>}
    </div>
  );
};
export default InputForModal;
