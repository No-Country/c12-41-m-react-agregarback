export function generateCBUAndCVU() {
  const min = 100000000; // Número mínimo de 9 dígitos (10^8)
  const max = 999999999; // Número máximo de 9 dígitos (10^9 - 1)
  const getRamdon = () => {
    const ramdonNumForUser = Math.floor(Math.random() * (max - min + 1)) + min;
    return ramdonNumForUser;
  };
  const accountParam = `${getRamdon()}${getRamdon()}${getRamdon()}`;
  return accountParam.slice(0, 22);
}

export const generateAlias = (name) => {
  const min = 1000; // Número mínimo de 4 dígitos
  const max = 9999; // Número máximo de 4 dígitos
  const numberAlias = Math.floor(Math.random() * (max - min + 1)) + min;
  return `${name}.${numberAlias}`;
};
