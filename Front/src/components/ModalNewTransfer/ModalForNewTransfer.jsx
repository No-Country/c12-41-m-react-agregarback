import { useEffect, useRef, useState } from "react";
import { FiXCircle } from "react-icons/fi";
import useFetch from "../../utils/useFetch";
import ThrowModalError from "./ThrowModalError";
import { validInputsForTransfer } from "./validInput";
import InputForModal from "./InputForModal";
import { Authorization, backEnd } from "../../utils/axiosBackEnd";
import AWN from "awesome-notifications";
import { formatearSaldoDelUsuario } from "../../utils/formatSaldo";

const ModalForNewTransfer = ({
  setIsModalActive,
  currentContact,
  setCurrentContact,
}) => {
  const [infoForTransfer, setInfoForTransfer] = useState({});
  const [currentAccount, setCurrentAccount] = useState();
  const [errors, setErrors] = useState();
  const from = useRef(null);

  const notifier = new AWN();
  //traer de redux
  const userId = sessionStorage.userId;
  const { data, error } = useFetch(`account/${userId}`);

  useEffect(() => {
    if (data.accounts) {
      setCurrentAccount(data.accounts[0]);
    }
  }, [data]);

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

  const handleChangeCurrentAccount = (selectedAcount) => {
    setCurrentAccount(selectedAcount);
    const { accountNumber, id, currency } = selectedAcount;
    setInfoForTransfer((prev) => ({
      ...prev,
      senderAccount: accountNumber,
      accountId: id,
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

  const assignDefaultAccount = (defaultAccount) => {
    if (!infoForTransfer.senderAccount)
      infoForTransfer.senderAccount = defaultAccount.accountNumber;
    if (!infoForTransfer.accountId)
      infoForTransfer.accountId = defaultAccount.id;
    if (!infoForTransfer.currency)
      infoForTransfer.currency = defaultAccount.currency;
  };

  const handleSubmitTransfer = (e) => {
    e.preventDefault();
    const defaultAccount = JSON.parse(e.target.account.value);
    assignDefaultAccount(defaultAccount);

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
        notifier.modal("Transferencia exitosa");
      })
      .catch((err) => {
        notifier.modal(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <section className="w-full h-[100vh] top-0 bg-dark/40 flex justify-center items-center p-3 left-0 fixed z-[200]">
      <article className="w-full max-w-[400px] min-h-[550px] bg-gray text-white relative flex flex-col justify-center items-center rounded-lg shadow-lg">
        <h3 className="uppercase tracking-[3px] font-medium py-10">
          Nueva Transferencia
        </h3>
        <form
          onSubmit={handleSubmitTransfer}
          ref={from}
          className="grid gap-4 p-3"
        >
          <span className="text-left capitalize font-medium">
            Contacto:{" "}
            {currentContact?.contactName || "transferencia a nuevo destino"}
          </span>
          <div className="text-left">
            <span>Saldo Disponible: </span>
            <span>{formatearSaldoDelUsuario(currentAccount?.amount)}</span>
          </div>
          <div className="grid grid-cols-[90px,_1fr]">
            <label className="text-left font-medium" htmlFor="senderAccount">
              Tu cuenta
            </label>
            <select
              onChange={(e) =>
                handleChangeCurrentAccount(JSON.parse(e.target.value))
              }
              id="account"
              className="bg-gray text-white rounded-md capitalize"
            >
              {data?.accounts?.map((account) => (
                <option
                  className="px-3 rounded-md capitalize text-center"
                  key={account.id}
                  value={JSON.stringify(account)}
                >
                  {account.currency}
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
            label={"Tipo de Id"}
            name={"validation"}
            type={"text"}
            infoForTransfer={infoForTransfer}
            errors={errors?.validation}
          />
          <InputForModal
            handleChangeTransferInfo={handleChangeTransferInfo}
            label={"Valor"}
            name={"validationValue"}
            type={"text"}
            infoForTransfer={infoForTransfer}
            errors={errors?.validationValue}
          />
          <button className="w-full mx-2  bg-orange text-white hover:bg-dark hover:text-yellow rounded-md shadow-xl py-3 my-5">
            Realizar transferencia
          </button>
        </form>
        <button
          onClick={handleCloseModal}
          type="button"
          className="right-2 top-2 absolute text-white text-3xl"
        >
          <FiXCircle />
        </button>
      </article>
    </section>
  );
};
export default ModalForNewTransfer;
