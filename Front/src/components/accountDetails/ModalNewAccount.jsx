import { FiXCircle } from "react-icons/fi";

import AWN from "awesome-notifications";
import axios from "axios";
const notifier = new AWN();

const getRemainingAccounts = (accounts) => {
    let all = ["usd", "soles", "pesos"]
    const remaining = all.filter(currency => !accounts.find(account => account.currency == currency))
    return remaining;
}

const ModalNewAccount = ({ setShowNewAccountModal, accounts }) => {
    const remainingAccounts = getRemainingAccounts(accounts)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            currency: e.target.currencySelector.value
        }
        const headers = {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        await notifier.asyncBlock(
            axios.post("https://nocountrybackend.onrender.com/api/v1/account/create_account", body, { headers }),
            () => {
                notifier.success(`Solicitud aceptada, recargue la página para poder administrar la nueva cuenta`);
                setShowNewAccountModal(false);
            },
            err => {
                console.log(err);
                notifier.alert(`Error al crear cuenta, intentelo de nuevo más tarde`);
                setShowNewAccountModal(false)
            },
            `Preparando nueva cuenta`
        )
    }
    return (
        <>
            <div className="h-screen w-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-[rgba(1,1,1,0.6)]">
                <div className="w-[350px] rounded-lg bg-dark p-3 flex flex-col gap-6">
                    <FiXCircle className="self-end text-3xl" onClick={() => setShowNewAccountModal(false)} />
                    <h3 className="font-semibold">SOLICITUD DE APERTURA DE NUEVA CUENTA</h3>
                    <div className="pb-6">
                        {remainingAccounts.length == 0 ? "Usted ya ha solicitado todos los tipos de cuenta disponibles (cuenta en soles, pesos y dólares)" :
                            <div>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                    <div>
                                        <label htmlFor="accountCurrency"> Seleccione tipo de cuenta: </label>
                                        <select
                                            name="currencySelector"
                                            defaultValue={remainingAccounts[0]}
                                            id="accountCurrency"
                                            className="bg-gray text-white rounded-md p-1"
                                        >
                                            {remainingAccounts.map(currency =>
                                                <option className="px-3 rounded-md" key={currency} value={currency}>
                                                    {currency.charAt(0).toUpperCase() + currency.slice(1)}
                                                </option>
                                            )}
                                        </select>
                                    </div>
                                    <p className="p-3 opacity-50 text-sm">En ocasiones, la solicitud puede tardar varios días en ser aceptada.</p>
                                    <button type="submit" className="w-[50%] p-3 self-center font-medium text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none">
                                        Enviar solicitud
                                    </button>
                                </form>
                            </div>
                        }

                    </div>
                </div>
            </div >
        </>
    )
}

export default ModalNewAccount