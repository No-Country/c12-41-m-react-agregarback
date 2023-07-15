import React, { useState } from "react";

const CommentComp = ({ onCommentChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [comment, setComment] = useState("");

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    onCommentChange(option, comment);
  };

  const handleTextareaChange = (e) => {
    const text = e.target.value;
    setComment(text);
    onCommentChange(selectedOption, text);
  };

  const isTextareaDisabled = selectedOption === "";

  const getPlaceholder = () => {
    const placeholderMap = {
      "sitio web": "Comentario sobre el sitio web...",
      productos: "Comentario sobre los productos...",
      servicios: "Comentario sobre los servicios...",
      empleados: "Comentario sobre los empleados...",
      "punto-compras": "Comentario sobre el punto de compras...",
      bancón: "Comentario sobre el bancón...",
      "solicitud de contrato": "Comentario sobre la solicitud de contrato...",
      otros: "Comentario sobre otros temas...",
    };

    return placeholderMap[selectedOption] || "Escribe tu comentario...";
  };

  const isCommentValid =
    /^[a-zA-Z0-9\s.,?!]+$/i.test(comment) && comment.length >= 20;
  const commentValidationMessage =
    "El comentario debe tener al menos 20 caracteres y solo puede contener letras, números, espacios y los siguientes caracteres especiales: . , ? !";

  return (
    <div className="w-96.04 h-7.76">
      <h4 className="font-inter font-semibold text-2xl flex items-center text-orange capitalize">
        Comentario
      </h4>
      <div>
        <select
          name="theme"
          className="w-1/3.2 h-7 bg-white flex items-center px-2 text-gray rounded-md capitalize"
          value={selectedOption}
          onChange={handleOptionChange}
          required
        >
          <option value="">Selecciona un tema *</option>
          <option value="sitio web">Sitio web</option>
          <option value="productos">Productos</option>
          <option value="servicios">Servicios</option>
          <option value="empleados">Empleados</option>
          <option value="punto-compras">Punto de compras</option>
          <option value="bancón">Bancón</option>
          <option value="solicitud de contrato">Solicitud de contrato</option>
          <option value="otros">Otros...</option>
        </select>
        <textarea
          name="message"
          rows="4"
          className={`p-2.5 w-full text-sm text-gray rounded-lg my-2 focus:border-0 resize-none ${
            isTextareaDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          placeholder={getPlaceholder()}
          required
          disabled={isTextareaDisabled}
          value={comment}
          onChange={handleTextareaChange}
          title={!isCommentValid && comment.length > 0 ? commentValidationMessage : ""}
        ></textarea>
        {!isCommentValid && comment.length > 0 && (
          <p className="text-orange text-xs font-bold bg-gray py-2 rounded-xl">{commentValidationMessage}</p>
        )}
      </div>
    </div>
  );
};

export default CommentComp;
