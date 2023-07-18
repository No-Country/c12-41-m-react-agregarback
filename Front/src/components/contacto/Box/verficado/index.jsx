import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Verificado = () => {
  const siteKey = "6LeGRRonAAAAAOqXiX4SR8RS38KU7nnMj50mFV1G";

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  const handleCaptchaError = () => {
    console.log("Error occurred while loading captcha");
  };

  return (
    <div>
      <h4 className="text-left font-extrabold text-orange capitalize">
        Verificado <b>*</b>
      </h4>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={handleCaptchaChange}
        onErrored={handleCaptchaError}
        theme="dark"
        size="normal"
        hl="es"
        className="md:my-2 mt-1"
      />
    </div>
  );
};

export default Verificado;
