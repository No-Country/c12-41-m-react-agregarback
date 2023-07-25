import React from "react";
import Boxcontact from "./Box/boxcontact";

const CompoContact = () => {
  const submitEndpoint =
    "https://getform.io/f/61a651b4-d7c2-4d6b-a6b3-3eda4754f4c1"; // Reemplaza con la URL correcta de tu endpoint

  return (
    <div className="flex justify-center items-center w-full relative">
      <div className="bg-gradient-to-t from-dark via-gray to-dark bg-no-repeat bg-cover absolute inset-0 animate-scroll-bg"></div>
      <Boxcontact submitEndpoint={submitEndpoint} />
    </div>
  );
};

export default CompoContact;
