import axios from "axios";
import { useEffect, useState } from "react";
import {
  AiOutlineLineChart,
} from "react-icons/ai";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiQuestionnaireFill, RiShakeHandsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { formatearSaldoDelUsuario } from "../../utils/formatSaldo";
import Accesos from "./Accesos";
import CardInfo from "./CardInfo";
import ModalNewAccount from "./ModalNewAccount";
import ModalNewCard from "./ModalNewCard";
import UltimosMovimientos from "./UltimosMovimientos";

const AccountContent = () => {
  const [userData, setUserData] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showNewAccountModal, setShowNewAccountModal] = useState(false);
  const [showNewCardModal, setShowNewCardModal] = useState(false);

  const headers = {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };

  useEffect(() => {
    const getUserbyId = async () => {
      try {
        const response = await axios.get(`https://nocountrybackend.onrender.com/api/v1/users/${sessionStorage.getItem('userId')}
            `, { headers })
        setUserData(response.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    const getAccounts = async () => {
      try {
        const accountsData = await axios.get(
          `https://nocountrybackend.onrender.com/api/v1/account/${sessionStorage.getItem(
            "userId"
          )}`,
          { headers }
        );
        setAccounts(accountsData.data.accounts);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsLoaded(true);
      }
    };

    getUserbyId();
    getAccounts();
  }, []);

  const handleSelectAccount = (e) => {
    setSelectedIndex(e.target.value);
  };

  return isLoaded && userData != null ? (
    <section className="grid lg:grid-cols-2 overflow-hidden p-3 pt-16 gap-4">
      {accounts.length > 0 ? (
        <>
          <div className="">
            <span>Cuenta en:</span>
            <select
              onChange={(e) => handleSelectAccount(e)}
              className="outline-none text-sm text-white rounded-md bg-transparent py-1"
              defaultValue={accounts[0]}
            >
              {accounts.map((account, index) => (
                <option key={account.id} className="bg-gray" value={index}>
                  {account.currency.charAt(0).toUpperCase() +
                    account.currency.slice(1)}
                </option>
              ))}
            </select>
            <div>
              <h2 className="text-xl">
                Saldo: ${formatearSaldoDelUsuario(accounts[selectedIndex].amount)}
              </h2>
            </div>
            <CardInfo account={accounts[selectedIndex]} name={userData.name} />
            <article className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-3 auto-cols-fr py-10">
              <Accesos text={"Inversiones"} icon={<AiOutlineLineChart />} />
              <Accesos text={"prestamos"} icon={<FaHandHoldingDollar />} />
              <NavLink to="/preguntasfrecuentes">
                <Accesos
                  text={"Contactanos"}
                  icon={<RiQuestionnaireFill />}
                />
              </NavLink>
              <Accesos
                text={"Solicitar nueva tarjeta"}
                icon={
                  <BsCreditCard2BackFill
                    onClick={() => setShowNewCardModal(true)}
                  />
                }
              />
              {showNewCardModal && (
                <ModalNewCard
                  setShowNewCardModal={setShowNewCardModal}
                  accounts={accounts}
                />
              )}

              <Accesos
                text={"Solicitar nueva cuenta"}
                icon={
                  <RiShakeHandsFill
                    onClick={() => setShowNewAccountModal(true)}
                  />
                }
              />
              {showNewAccountModal && (
                <ModalNewAccount
                  setShowNewAccountModal={setShowNewAccountModal}
                  accounts={accounts}
                />
              )}
            </article>
            <article className="grid gap-10">
              <h4 className="font-medium">Bienvenido {userData.name}!!</h4>
              <div className="grid sm:grid-cols-2 items-center">
                <p className="text-left">
                  Bienvenido a nuestra plataforma bancaria segura y confiable,
                  donde podrás acceder fácilmente a la información de tus
                  cuentas financieras. Aquí, te brindamos una visión completa y
                  transparente de tus activos y pasivos, poniendo a tu alcance
                  un panorama claro de tus finanzas personales.
                </p>
                <div>
                  <img
                    className="w-[280px] mx-auto"
                    src="/accounts/logocurrency.svg"
                    alt="img bank"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          </div>
          <UltimosMovimientos account={accounts[selectedIndex]} />
        </>
      ) : (
        <div className="col-span-2 flex flex-col gap-10 items-center">
          <h2>No se han encontrado cuentas</h2>
          <div className="w-[150px]">
            <Accesos
              text={"Solicitar nueva cuenta"}
              icon={
                <RiShakeHandsFill
                  onClick={() => setShowNewAccountModal(true)}
                />
              }
            />
            {showNewAccountModal && (
              <ModalNewAccount
                setShowNewAccountModal={setShowNewAccountModal}
                accounts={accounts}
              />
            )}
          </div>
        </div>
      )}
    </section>
  ) : (
    <div className="flex flex-row justify-center items-center h-screen">
      <GridLoader color="white" />
    </div>
  );
};
export default AccountContent;
