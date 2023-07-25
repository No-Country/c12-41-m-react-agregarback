
export const calcularTNA = (tea, cuotas) => {
    const tasaInteresDecimal = tea / 100;
    const periodosEnAnio = 12;
    const tasaNominialAnual =
      ((1 + tasaInteresDecimal / periodosEnAnio) ** periodosEnAnio - 1) * 100;
    const tna = tasaNominialAnual * cuotas;
    return tna.toFixed(2);
  };
export  const calcularPrimeraCuota = (
    importe,
    tasaInteres,
    cuotas,
    fechaPrimerCuota
  ) => {
    const tasaInteresDecimal = tasaInteres / 100;
    const interesMensual = tasaInteresDecimal / 12;
    const montoPorCuota =
      importe * (interesMensual / (1 - Math.pow(1 + interesMensual, -cuotas)));

    // Calcular la cantidad de días entre hoy y la fecha de la primera cuota
    const fechaActual = new Date();
    const fechaCuota = new Date(fechaPrimerCuota);
    const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
    const diasDiferencia = Math.round((fechaCuota - fechaActual) / unDia);
    const interesAcumulado =
      (diasDiferencia * (importe * tasaInteresDecimal)) / 360;

    return (montoPorCuota + interesAcumulado).toFixed(2);
  };
export  const calcularInteresCompensatorioSimple = (tasaInteres, capitalInicial, fechaPrimerCuota) => {
    const fechaActual = new Date();
    const fechaCuota = new Date(fechaPrimerCuota);
    const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
    const diasDiferencia = Math.round((fechaCuota - fechaActual) / unDia);

    // Utilizamos el método 30/360 para el cálculo del interés compensatorio
    const interesAcumulado = (capitalInicial * tasaInteres * diasDiferencia) / (360 * 100);

    return interesAcumulado.toFixed(2);
  }
export  const calcularInteresCompensatorioConIVA = (tasaInteres, capitalInicial, fechaPrimerCuota, plazoMeses) => {
    const fechaActual = new Date();
    const fechaCuota = new Date(fechaPrimerCuota);
    const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
    const diasDiferencia = Math.round((fechaCuota - fechaActual) / unDia);
    const tasaInteresMensual = tasaInteres / (12 * 100); // Convertimos la tasa anual a mensual
    const interesAcumulado = (diasDiferencia * (capitalInicial * tasaInteresMensual)) / 30;
    const interesCompensatorio = capitalInicial * tasaInteresMensual * plazoMeses + interesAcumulado;
    const tasaIVA = 0.21; // Tasa de IVA en Argentina (21%)
    const iva = interesCompensatorio * tasaIVA;
    const montoTotalConIVA = interesCompensatorio + iva;
    return montoTotalConIVA.toFixed(2);
  };
export  const calcularImpuestosIBBYSellados = (capitalInicial) => {
  const iibb = capitalInicial * 0.03;
    const sellos = capitalInicial * 0.012;
    const totalImpuestos = iibb + sellos

    return totalImpuestos.toFixed(2);
  };

  export const Exportaciones = {calcularImpuestosIBBYSellados, calcularInteresCompensatorioConIVA, calcularInteresCompensatorioSimple, calcularPrimeraCuota, calcularTNA};
 
