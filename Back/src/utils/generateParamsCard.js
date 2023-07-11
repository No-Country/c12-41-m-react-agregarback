export const generateCVV = () => {
  const min = 100; // Número mínimo de 3 dígitos
  const max = 999; // Número máximo de 3 dígitos
  const CVV = Math.floor(Math.random() * (max - min + 1)) + min;
  return CVV;
};
export const generateCardNumber = () => {
  const min = 1000; // Número mínimo de 4 dígitos
  const max = 9999; // Número máximo de 4 dígitos
  const getRamdon = () => {
    const numbersForCard = Math.floor(Math.random() * (max - min + 1)) + min;
    return numbersForCard;
  };
  const cardNumber = `${getRamdon()}${getRamdon()}${getRamdon()}${getRamdon()}`;
  return cardNumber;
};
