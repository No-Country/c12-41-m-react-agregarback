import React from "react";
import Boxcontact from "./Box/boxcontact";

const CompoContact = () => {
  const submitEndpoint = "https://example.com/submit"; // Reemplaza con la URL correcta de tu endpoint

  return (
    <div className="flex justify-center items-center h-screen w-full relative">
      <div className="bg-gradient-to-t from-dark via-gray to-dark bg-no-repeat bg-cover absolute inset-0 animate-scroll-bg"></div>
      <Boxcontact submitEndpoint={submitEndpoint} />
    </div>
  );
};

export default CompoContact;
