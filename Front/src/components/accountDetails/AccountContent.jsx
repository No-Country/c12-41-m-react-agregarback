import { useEffect, useState } from "react"
import CardInfo from "./CardInfo"
import UltimosMovimientos from "./UltimosMovimientos"
import axios from 'axios'
import { GridLoader } from "react-spinners"



const AccountContent = () => {
  const headers = {
    Authorization: `Bearer ${sessionStorage.getItem('token')}`
  }
  const [accounts, setAccounts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {

    const getAccounts = async () => {
      try {
        const response = await axios.get(`https://nocountrybackend.onrender.com/api/v1/account/${sessionStorage.getItem('userId')}`, { headers })
        setAccounts(response.data.accounts)
        setIsLoaded(true)
      } catch (error) {
        console.log(error);
        setIsLoaded(true)

      }
    }
    getAccounts();

  }, [])

  const handleSelectAccount = (e) => {
    setSelectedIndex(e.target.value)
  };

  return (

    isLoaded ?
      <section className="grid lg:grid-cols-2 overflow-hidden p-3 pt-16 gap-4">
        {accounts.length > 0 ?
          <>
            <div className="">
              <span>Accounts</span>
              <select

                onChange={(e) => handleSelectAccount(e)}
                className="outline-none text-sm text-white rounded-md bg-transparent py-1"
              >
                {accounts.map((account, index) => (
                  <option key={account.id} className="bg-gray" value={index}>
                    {account.currency}
                  </option>
                ))}
              </select>
              <CardInfo account={accounts[selectedIndex]} />
            </div>
            <UltimosMovimientos account={accounts[selectedIndex]} />
          </>
          :
          <div>No se han encontrado cuentas</div>
        }
      </section>
      : <div className="flex flex-row justify-center items-center h-screen">
        <GridLoader color="white" />
      </div>

  )
}
export default AccountContent