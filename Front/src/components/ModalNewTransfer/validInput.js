export const validInputsForTransfer = (infoForTransfer) => {
  const { accountId, amount, senderAccount, validation, validationValue } = infoForTransfer;
  const error = {}

  // Expresiones regulares para las validaciones
  const accountIdRegex = /^\d+$/; // Solo permite dígitos
  const amountRegex = /^\d+(\.\d+)?$/; // Permite números enteros o decimales
  const senderAccountRegex = /^\d{9}$/; // Debe tener exactamente 9 dígitos
  const validationRegex = /^(cbu|cvu|alias|accountNumber)$/; // Debe ser uno de estos valores

  // Validación de accountId
  const isAccountIdValid = accountIdRegex.test(accountId);

  // Validación de amount
  const isAmountValid = amountRegex.test(amount);

  // Validación de senderAccount
  const isSenderAccountValid = senderAccountRegex.test(senderAccount);

  // Validación de validation
  const isValidationValid = validationRegex.test(validation);

  // Ejemplo de cómo manejar los resultados de validación
  if (!isAccountIdValid) {
    error.accountId = "El accountId no es válido"
  }

  if (!isAmountValid) {
    error.amount =  "debe ingresar un monto";
  }

  if (!isSenderAccountValid) {
    error.senderAccount ="la cuenta remitente no es válido";
  }

  if (!isValidationValid) {
    error.validation = "no es metodo de autenticacion válido";
  }
  if (!validationValue) {
    error.validationValue = "debe ingresar un valor";
  }
  if (Object.keys(error).length) {
    return {error}
  }
  return false
  
  // Resto de la lógica de validación o acciones necesarias
};
