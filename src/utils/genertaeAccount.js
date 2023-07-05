function generarNumeroCuenta() {
  const timestamp = Date.now().toString().slice(0,6);
  const numeroAleatorio = Math.floor(Math.random() * 900) + 100;

  return `${numeroAleatorio}${timestamp}`;
}

export default generarNumeroCuenta;
