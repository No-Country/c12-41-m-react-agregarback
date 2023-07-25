import { GridLoader } from "react-spinners";
import useFetch from "../../utils/useFetch";
import ThrowModalError from "./ThrowModalError";

const ContactCard = ({ setCurrentContact, contacts, error }) => {

  if (!contacts) {
    return <GridLoader />;
  }

  if (error) {
    return <ThrowModalError>{error}</ThrowModalError>;
  }

  return (
    <div className="grid gap-5 py-5 min-h-[250px] max-h-[350px] overflow-y-auto">
      {contacts?.map((contact) => (
        <div
          onClick={() => setCurrentContact(contact)}
          key={contact.id}
          className="flex cursor-pointer h-20 my-1 transition-colors hover:bg-gray overflow-hidden rounded shadow-md shadow-[black]/20"
        >
          <div className="w-8 text-center py-1">
            <p className="text-3xl p-0 text-green-dark">&bull;</p>
          </div>
          <div className="w-4/5 py-3 px-1">
            <p className="hover:text-blue-dark font-semibold text-left">
              {contact.contactName}
            </p>
            <p className="text-sm text-grey-dark text-left uppercase">
              {contact.validation}: {contact.validationValue}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
