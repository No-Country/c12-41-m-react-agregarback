import useFetch from "../../utils/useFetch";
import ListContactTransfer from "./ListContactTransfer";
import TransferSection from "./newTransferSection";

const TransferContent = () => {
  const userId = sessionStorage.userId;
  const { data, error, refetch } = useFetch(`users_contacs/${userId}`);

  const handleRefetchContacts = async () => {
    refetch();
  };

  return (
    <section className="bg-gray grid lg:grid-cols-2 auto-rows-fr rounded-xl min-h-screen overflow-hidden p-3 gap-14 pt-16">
      <ListContactTransfer
        data={data}
        handleRefetchContacts={handleRefetchContacts}
        error={error}
      />
      <TransferSection
        data={data}
        handleRefetchContacts={handleRefetchContacts}
        error={error}
      />
    </section>
  );
};

export default TransferContent;
