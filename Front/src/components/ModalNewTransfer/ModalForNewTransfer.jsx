import { useEffect, useRef, useState } from "react";
import { FiXCircle } from "react-icons/fi";
import useFetch from "../../utils/useFetch";
import ThrowModalError from "./ThrowModalError";

const ModalForNewTransfer = ({
  setIsModalActive,
  currentContact,
  setCurrentContact,
}) => {
  const [CurrentAccount, setCurrentAccount] = useState();
  const from = useRef(null);

  const userId = 3;
  const { data, loading, error } = useFetch(`account/${userId}`);
  if (error) {
    return <ThrowModalError error={error} />;
  }

  useEffect(() => {
    if (currentContact) {
      setIsModalActive(true);
    }
  }, [currentContact]);

  const handleCloseModal = () => {
    setIsModalActive(false);
    setCurrentContact();
    from.current.reset();
  };

  const handleChangeCurrentAccount = (e) => {
    setCurrentAccount(JSON.parse(e.target.value));
  };

  const handleSubmitTransfer = (e) => {
    e.preventDefault();
    const transferData = {
      accountId: CurrentAccount.id,
      acoount: CurrentAccount.accountNumber,
      amount: e.target.amount.value,
      validation: e.target.validation.value,
      validationValue: e.target.validationValue.value,
    };
    console.log(transferData);
  };

  return (
    <section className="w-full h-[100vh] top-0 bg-dark/40 flex justify-center items-center p-3 left-0 fixed z-50">
      <article className="w-full max-w-[400px] min-h-[550px] bg-white relative flex flex-col justify-center items-center rounded-lg">
        <h3 className="text-dark uppercase tracking-[3px] font-medium py-10">
          Nueva Transferencia
        </h3>
        <form
          onSubmit={handleSubmitTransfer}
          ref={from}
          className="grid gap-4 p-3 text-dark"
        >
          <span className="text-left capitalize">
            Contacto: {currentContact?.contactName}
          </span>
          <div className="grid grid-cols-[90px,_1fr]">
            <label className="text-left font-medium" htmlFor="senderAccount">
              Tu cuenta
            </label>
            <select
              onChange={handleChangeCurrentAccount}
              id="account"
              className="bg-gray text-white rounded-md"
            >
              {data?.accounts?.map((account) => (
                <option
                  className="px-3 rounded-md"
                  key={account.id}
                  value={JSON.stringify(account)}
                >
                  {account.accountNumber}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-[90px,_1fr]">
            <label className="text-left font-medium" htmlFor="amount">
              Monto
            </label>
            <input
              className="px-3 rounded-md bg-gray text-white"
              type="number"
              name="amount"
              id="amount"
            />
          </div>
          <div className="grid grid-cols-[90px,_1fr]">
            <label className="text-left font-medium" htmlFor="validation">
              validation
            </label>
            <input
              className="px-3 rounded-md bg-gray text-white uppercase"
              type="text"
              name="validation"
              id="validation"
              value={currentContact?.validation}
            />
          </div>
          <div className="grid grid-cols-[90px,_1fr]">
            <label className="text-left font-medium" htmlFor="validation">
              validationValue
            </label>
            <input
              className="px-3 rounded-md bg-gray text-white"
              type="text"
              name="validationValue"
              id="validationValue"
              value={currentContact?.validationValue}
            />
          </div>
          <button className="w-full mx-2 bg-gray text-white hover:bg-yellow hover:text-dark rounded-md shadow-xl py-3 my-5">
            Realizar transferencia
          </button>
        </form>
        <button
          onClick={handleCloseModal}
          type="button"
          className="right-2 top-2 absolute text-dark text-3xl"
        >
          <FiXCircle />
        </button>
      </article>
    </section>
  );
};
export default ModalForNewTransfer;
