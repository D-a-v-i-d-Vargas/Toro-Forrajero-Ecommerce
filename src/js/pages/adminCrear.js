// =============================
// VALIDACIÓN DEL CAMPO MARCA
// =============================

const marca = document.getElementById("marca");
const alertaMarca = document.getElementById("alertaMarca");

// Validar cuando el usuario cambie la opción
marca.addEventListener("change", validarMarca);

// Validar cuando el usuario salga del campo
marca.addEventListener("blur", validarMarca);

function validarMarca() {
    const valorMarca = marca.value.trim();

    if (valorMarca === "") {
        alertaMarca.classList.remove("d-none");

        marca.classList.remove("is-valid");
        marca.classList.add("is-invalid");

        return false;
    }

    alertaMarca.classList.add("d-none");

    marca.classList.remove("is-invalid");
    marca.classList.add("is-valid");

    return true;
}

//=============================
// VALIDACIÓN DEL COSTO
//=============================

const costo = document.getElementById("costo");
const alertaCosto = document.getElementById("alertaCosto");

// Validar cuando el usuario salga del input
costo.addEventListener("blur", validarCosto);

// Ocultar la alerta mientras escribe
costo.addEventListener("input", function () {

    if (this.value.trim() !== "" && Number(this.value) > 0) {

        alertaCosto.classList.add("d-none");
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");

    } else {

        this.classList.remove("is-valid");
    }

});

function validarCosto() {

    const valor = costo.value.trim();

    if (valor === "" || isNaN(valor) || Number(valor) <= 0) {

        alertaCosto.classList.remove("d-none");

        costo.classList.remove("is-valid");
        costo.classList.add("is-invalid");

        return false;
    }

    alertaCosto.classList.add("d-none");

    costo.classList.remove("is-invalid");
    costo.classList.add("is-valid");

    return true;
}