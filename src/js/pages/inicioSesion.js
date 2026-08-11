// ==========================================
// VALIDACIÓN DEL CORREO ELECTRÓNICO
// ==========================================

const correoLogin = document.querySelector("#correoLogin");
const alertaCorreoLogin = document.querySelector("#alertaCorreoLogin");

function validarCorreo() {

    const correo = correoLogin.value.trim();

    // Expresión regular para validar correo
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Campo vacío
    if (correo === "") {

        alertaCorreoLogin.innerHTML =
            '<span class="alerta-titulo">Correo Electrónico No válido:</span> Debes llenar el campo';

        alertaCorreoLogin.classList.remove("d-none");

        return false;
    }

    // Correo con formato incorrecto
    if (!formatoCorreo.test(correo)) {

        alertaCorreoLogin.innerHTML =
            '<span class="alerta-titulo">Correo Electrónico No válido:</span> Ingresa un correo válido';

        alertaCorreoLogin.classList.remove("d-none");

        return false;
    }

    // Correo correcto
    alertaCorreoLogin.classList.add("d-none");

    return true;
}

const btnIniciarSesion = document.querySelector("#btnIniciarSesion");

btnIniciarSesion.addEventListener("click", function () {

    const correoValido = validarCorreo();
    const passwordValido = validarPassword();

    if (!correoValido || !passwordValido) {
        return;
    }

});


// ==========================================
//        VALIDACIÓN DE CONTRASEÑA
// ==========================================

const password = document.querySelector("#password"); //Selecciona la entrada de contraseña con el id = password y lo guerda en la constante password.
const errorPassword = document.querySelector("#errorPassword"); // Selecciona el div con id="errorPassword" y lo guarda en la constante password.

function validarPassword() { //creamos nuestra funcion para validar la contraseña que ingrese el usuario cada que le da click al botón de iniciar sesión.
    password.classList.remove("campo-error", "campo-correcto"); //para limpiar los campos de error y correcto.
    errorPassword.classList.add("d-none"); //oculta el mensaje de error cuando se había ejeuctado de un intento anteior.

    if (password.value.trim().length < 8) { // revisamos que la entrada sea de almenos 8 caracteres.
        errorPassword.classList.remove("d-none"); // Si no cumple la condición, entonces muestra el mensaje de error
        password.classList.add("campo-error"); // marca visualmente el campo como incorrecto
        return false;
    } else {
        password.classList.add("campo-correcto"); // marca visualmente el campo como correcto
        return true;
    }
}
