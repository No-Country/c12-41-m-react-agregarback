import CardInfo from "./CardInfo"
import UltimosMovimientos from "./UltimosMovimientos"

const AccountContent = () => {

  return (
    <section className="bg-gray grid lg:grid-cols-2 rounded-xl min-h-screen overflow-hidden p-3 pt-16 gap-4">
      <CardInfo />
      <UltimosMovimientos />
    </section>
  )
}
export default AccountContent