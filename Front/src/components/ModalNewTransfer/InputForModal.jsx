const InputForModal = ({label , type , name , handleChangeTransferInfo , infoForTransfer , errors}) => {
  return (
    <div className="grid grid-cols-[90px,_1fr]">
      <label className="text-left font-medium" htmlFor="amount">
        {label}
      </label>
      <input
        className="px-3 rounded-md bg-gray text-white uppercase"
        type={type}
        name={name}
        onChange={(e) => handleChangeTransferInfo(e.target.value, name)}
        id={name}
        value={infoForTransfer[name]}
      />
      {<span className="h-4 text-[#FF0000] col-span-2">{errors}</span>}
    </div>
  );
};
export default InputForModal;
