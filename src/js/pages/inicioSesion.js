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

    validarCorreo();

});



 /*******************************************************************************
 VALIDACION DE CONTRASEÑA
 ******************************************************************************/


 
 /*******************************************************************************
COMPARACION LOCALSTORAGE , DATOS DE GUARDAR DATOS ESTAN EN PAG REGISTRO.JS
 ******************************************************************************/