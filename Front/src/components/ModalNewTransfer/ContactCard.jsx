import { useEffect, useState } from "react";
import { Authorization, backEnd } from "../../utils/axiosBackEnd";
import useFetch from "../../utils/useFetch";

const ContactCard = ({ setCurrentContact }) => {
  const Contacts = [
    {
      id: 1,
      validation: "cbu",
      validationValue: "4810394857104928573461",
      contactId: 9,
      userId: 4,
      contactName: "Sergio",
    },
    {
      id: 2,
      validation: "alias",
      validationValue: "ejemplo.alias09",
      contactId: 14,
      userId: 4,
      contactName: "Aron",
    },
    {
      id: 3,
      validation: "cvu",
      validationValue: "4810394857104928570915",
      contactId: 20,
      userId: 4,
      contactName: "Luisa",
    },
    {
      id: 4,
      validation: "cbu",
      validationValue: "1059385968374657385496",
      contactId: 18,
      userId: 4,
      contactName: "Emilio",
    },
  ];

  const userId = 3;
  const { data, loading, error } = useFetch(`users_contacs/${userId}`);

  if (error) {
    console.log(error);
    return <div>{error}</div>;
  }

  return (
    <div className="grid gap-5 py-5">
      {loading ? (
        <div className="text-white">loading...</div>
      ) : (
        data?.contacts?.map((contact) => (
          <div
            onClick={() => setCurrentContact(contact)}
            key={contact.id}
            className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded"
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
        ))
      )}
    </div>
  );
};

export default ContactCard;
