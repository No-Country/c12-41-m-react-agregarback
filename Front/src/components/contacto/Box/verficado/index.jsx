import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Verificado = () => {
  const tokenSite = "6LeGRRonAAAAAOqXiX4SR8RS38KU7nnMj50mFV1G";
  const TokenSecretKey = "6LeGRRonAAAAAIxeqDnJRypM8FW1UXUICNUuPAeW";
  const captchaRef = useRef(null);
  return (
    <div>
         <h4 className="text-left font-extrabold text-orange capitalize">Verficado <b>*</b></h4>
      <ReCAPTCHA sitekey={tokenSite} ref={captchaRef} />
    </div>
  );
};
export default Verificado;
