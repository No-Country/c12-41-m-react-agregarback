import React from "react";
import BoxCopyright from "./CompFooter/BoxFooter/BoxFooter/BoxCopyright";
import InfoFooter from "./CompFooter";

const Footer = () => {
  return (
    <div className="bg-dark">
    <footer className="w-full text-gray-700 bg-gray-100 body-font">
     <InfoFooter/>
      <BoxCopyright/>
    </footer>
    </div>
  );
};

export default Footer;
