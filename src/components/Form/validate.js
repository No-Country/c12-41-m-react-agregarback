export default function validation(input) {

    const error = {}

    const regexDNI = / [0 - 9]{ 1, 3}\.?[0 - 9]{ 3, 3 } \.?[0 - 9]{ 3, 3 } /
    const regexClave = /^\d{4}$/;
    const regexUsuario = /^[a-zA-Z0-9_]{6,20}$/;



    if (!regexDNI.test(input.dni)) {
        error.dni = "Debe ingresar un numero de documento valido"
    }
    if (!regexClave.test(input.clave)) {
        error.clave = "Ingresá tu clave de 4 dígitos."
    }
    if (!regexUsuario.test(input.usuario)) {
        error.usuario = "Ingresa un Usuario alfanumerico"
    };
}