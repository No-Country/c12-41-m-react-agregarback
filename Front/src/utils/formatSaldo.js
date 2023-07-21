export const formatearSaldoDelUsuario = (amount = 0) => {
  const libraryOfUnits = {
    3: "K",
    6: "M",
    9: "G",
    12: "T",
  };
  const newAmount = amount?.toString().split(".")[0];
  if (newAmount.length > 4) {
    const unidad = Math.floor((newAmount.length - 1) / 3) * 3;
    let finalAmount =
      newAmount.split("").reverse().splice(unidad).reverse().join("") +
      libraryOfUnits[unidad];
    return finalAmount;
  }
  return amount;
};
