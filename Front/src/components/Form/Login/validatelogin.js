export default function validationlogin(input) {

    const errors = {}

    //regex login

    const regexDNI = / [0 - 9]{ 1, 3}\.?[0 - 9]{ 3, 3 } \.?[0 - 9]{ 3, 3 } /;
    const regexUsuario = /^[a-zA-Z0-9_]{6,20}$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (input.dni === "") {
      } else if (!regexDNI.test(input.dni)) {
        errors.dni = "Debe ingresar un numero de documento valido";
      }
   
  
    if (!regexUsuario.test(input.usuario)) {
        errors.usuario = "Ingresa un Usuario alfanumerico"
    };
    if (!regexPassword.test(input.password)) {
        errors.password = "Ingrese una contraseña valida"
    }



    return errors;
}