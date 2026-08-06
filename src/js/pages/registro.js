/////////////////////////////////////
//VALIDACION nombre apellido


////////////////////////////////
//VALIDACION telefono e interes


///////////////////////////////
//VALIDACION email ,estado


/////////////////////////////////////////////
//VALIDACION CONTRASEÑA /CONFIRMA CONTRASEÑA
const formularioRegistro = document.querySelector("#formulario-registro");
const password = document.querySelector("#password");
const confirmarPassword = document.querySelector("#confirmarPassword");

const errorPassword = document.querySelector("#errorPassword");
const errorConfirmarPassword = document.querySelector(
    "#errorConfirmarPassword"
);

formularioRegistro.addEventListener("submit", function (event) {
    let formularioValido = true;

    // Limpiar validaciones anteriores
    password.classList.remove("campo-error", "campo-correcto");
    confirmarPassword.classList.remove("campo-error", "campo-correcto");

    errorPassword.classList.add("d-none");
    errorConfirmarPassword.classList.add("d-none");

    // Validación 1: contraseña obligatoria y mínimo 8 caracteres
    if (password.value.trim().length < 8) {
        errorPassword.classList.remove("d-none");
        password.classList.add("campo-error");
        formularioValido = false;
    } else {
        password.classList.add("campo-correcto");
    }

    // Validación 2: confirmar contraseña
    if (
        confirmarPassword.value.trim() === "" ||
        confirmarPassword.value !== password.value
    ) {
        errorConfirmarPassword.classList.remove("d-none");
        confirmarPassword.classList.add("campo-error");
        formularioValido = false;
    } else {
        confirmarPassword.classList.add("campo-correcto");
    }

    // Evita enviar el formulario cuando existen errores
    if (!formularioValido) {
        event.preventDefault();
    }
});