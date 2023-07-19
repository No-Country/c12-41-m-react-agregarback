import { useEffect, useRef, useState } from "react";
import { FiXCircle } from "react-icons/fi";
import useFetch from "../../utils/useFetch";
import ThrowModalError from "./ThrowModalError";
import { validInputsForTransfer } from "./validInput";
import InputForModal from "./InputForModal";
import { Authorization, backEnd } from "../../utils/axiosBackEnd";
import AWN from "awesome-notifications";

const ModalForNewTransfer = ({
  setIsModalActive,
  currentContact,
  setCurrentContact,
}) => {
  const [infoForTransfer, setInfoForTransfer] = useState({});
  const [errors, setErrors] = useState();
  const from = useRef(null);

  const notifier = new AWN();
  //traer de redux
  const userId = 3;
  const { data, error } = useFetch(`account/${userId}`);
  
  useEffect(() => {
    if (currentContact) {
      setInfoForTransfer((prev) => ({
        ...prev,
        validation: currentContact.validation,
        validationValue: currentContact.validationValue,
      }));
      setIsModalActive(true);
    }
  }, [currentContact]);

  if (error) {
    return <ThrowModalError error={error} />;
  }

  const handleCloseModal = () => {
    setIsModalActive(false);
    setCurrentContact();
    setInfoForTransfer({});
    setErrors();
    from.current.reset();
  };

  const handleChangeCurrentAccount = (e) => {
    const CurrentAccountInfo = JSON.parse(e.target.value);
    const senderAccount = CurrentAccountInfo.accountNumber;
    const accountId = CurrentAccountInfo.id;
    const currency = CurrentAccountInfo.currency;
    setInfoForTransfer((prev) => ({
      ...prev,
      senderAccount,
      accountId,
      currency,
    }));
  };
  const handleChangeTransferInfo = (value, key) => {
    const objeto = { [key]: value };
    setInfoForTransfer((prev) => ({
      ...prev,
      ...objeto,
    }));
  };

  const handleSubmitTransfer = (e) => {
    e.preventDefault();
    const { error } = validInputsForTransfer(infoForTransfer);
    if (error) {
      return setErrors(error);
    }
    backEnd
      .post(
        `users/${userId}/${infoForTransfer.currency}`,
        infoForTransfer,
        Authorization()
      )
      .then((res) => {
        console.log(res.data);
        handleCloseModal();
        notifier.modal("transferencias exitosa");
      })
      .catch((err) => {
        notifier.modal(err.response.data.message);
        console.log(err);
      });
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
            {
              <span className="h-4 text-[#FF0000] col-span-2">
                {errors?.senderAccount}
              </span>
            }
          </div>
          <InputForModal
            handleChangeTransferInfo={handleChangeTransferInfo}
            label={"Monto"}
            name={"amount"}
            type={"number"}
            infoForTransfer={infoForTransfer}
            errors={errors?.amount}
          />
          <InputForModal
            handleChangeTransferInfo={handleChangeTransferInfo}
            label={"validation"}
            name={"validation"}
            type={"text"}
            infoForTransfer={infoForTransfer}
            errors={errors?.validation}
          />
          <InputForModal
            handleChangeTransferInfo={handleChangeTransferInfo}
            label={"validationValue"}
            name={"validationValue"}
            type={"text"}
            infoForTransfer={infoForTransfer}
            errors={errors?.validationValue}
          />
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
