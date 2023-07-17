import ListContactTransfer from './ListContactTransfer'
import ModalNewTransfer from './ModalNewTransfer'

const TransferContent = () => {
  return (
    <section className="bg-gray grid lg:grid-cols-2 rounded-xl min-h-screen overflow-hidden p-3 pt-16 gap-4">
      <ListContactTransfer />
      <ModalNewTransfer />
    </section>
  )
}

export default TransferContent

