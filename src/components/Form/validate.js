export default function validation(input) {

    const errors = {}

    //regex login

    const regexDNI = / [0 - 9]{ 1, 3}\.?[0 - 9]{ 3, 3 } \.?[0 - 9]{ 3, 3 } /
    const regexClave = /^\d{4}$/;
    const regexUsuario = /^[a-zA-Z0-9_]{6,20}$/;

    //regex signup
    //{
    const regexName = /^[a-zA-ZÀ-ÿ-]+(\s[a-zA-ZÀ-ÿ-]+)*$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const regexBirth = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    const regexAdress = /^[a-zA-Z0-9\s\.,#-]+$/;
    const regexPhone = /^\d{10}$/;

    //{
    //    "name":"prueba desde server",
    //    "email":"prueb2a@prueba.com",
    //    "password":"hola",
    //    "status":"active",
    //    "date_of_birth":"2023-07-15",
    //    "dni":891357839,
    //    "address":"Calle88",
    //    "username":"prueba1",
    //    "phone_number":123114125
    //}


    if (!regexDNI.test(input.dni)) {
        errors.dni = "Debe ingresar un numero de documento valido"
    }
    if (!regexClave.test(input.clave)) {
        errors.clave = "Ingresá tu clave de 4 dígitos."
    }
    if (!regexUsuario.test(input.usuario)) {
        errors.usuario = "Ingresa un Usuario alfanumerico"
    };
    if (!regexName.test(input.name)) {
        errors.name = "Ingresa un Nombre y Apellido"
    };
    if (!regexEmail.test(input.email)) {
        errors.email = "Ingrese un correo valido"
    }
    if (!regexPassword.test(input.password)) {
        errors.password = "Ingrese una contraseña valida"
    }
    if (!regexAdress.test(input.adress)) {
        errors.adress = "Ingrese una direccion valida";
    }
    if (!regexUsuario.test(input.username)) {
        errors.username = "Ingrese un nombre de usuario valido";
    }
    if (!regexPhone.test(input.phone_number)) {
        errors.phone_number = "Ingrese un numero de telefono valido";
    }

    return errors;
}