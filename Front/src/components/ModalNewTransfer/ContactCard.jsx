import { useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../utils/useFetch";
import { GridLoader } from "react-spinners";

const ContactCard = ({ setCurrentContact }) => {
  const user = useSelector((Storage) => Storage.user);
  const userId = 3;
  const { data, error } = useFetch(`users_contacs/${userId}`);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid gap-5 py-5">
      {data?.contacts?.map((contact) => (
        <div
          onClick={() => setCurrentContact(contact)}
          key={contact.id}
          className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded min-h-[80px]"
        >
          <div className="w-8 text-center py-1">
            <p className="text-3xl p-0 text-green-dark">&bull;</p>
          </div>
          <div className="w-4/5 h-10 py-3 px-1">
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
