const Fechadespuesde30diasHabiles = () => {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() + 30);
    const year = hoy.getFullYear();
    const month = String(hoy.getMonth() + 1).padStart(2, "0");
    const day = String(hoy.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  
  export default Fechadespuesde30diasHabiles;