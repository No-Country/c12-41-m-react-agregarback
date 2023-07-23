import ListContactTransfer from "./ListContactTransfer";
import TransferSection from "./newTransferSection";

const TransferContent = () => {
  return (
    <section className="bg-gray grid lg:grid-cols-2 auto-rows-fr rounded-xl min-h-screen overflow-hidden p-3 gap-14 pt-16">
      <ListContactTransfer />
      <TransferSection />
    </section>
  );
};

export default TransferContent;
