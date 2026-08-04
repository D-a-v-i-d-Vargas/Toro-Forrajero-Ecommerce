// =============================
// VALIDACIÓN DEL CAMPO MARCA
// =============================

/* const marca = document.getElementById("marca");
const alertaMarca = document.getElementById("alertaMarca");

if (marca && alertaMarca) {

    marca.addEventListener("change", validarMarca);
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
} */




// =============================
// VALIDACIÓN DEL COSTO
// =============================


const costo = document.getElementById("costo");
const alertaCosto = document.getElementById("alertaCosto");

function validarCosto() {
    const valor = costo.value.trim();

    // Campo vacío
    if (valor === "") {
        alertaCosto.textContent = "Debes ingresar un costo.";
        alertaCosto.classList.remove("d-none");
        costo.classList.add("is-invalid");
        return false;
    }

    // Debe ser un número mayor a 0
    if (isNaN(valor) || Number(valor) <= 0) {
        alertaCosto.textContent = "Debes ingresar un costo válido mayor a $0.00.";
        alertaCosto.classList.remove("d-none");
        costo.classList.add("is-invalid");
        return false;
    }

    // Todo correcto
    alertaCosto.classList.add("d-none");
    costo.classList.remove("is-invalid");
    costo.classList.add("is-valid");

    return true;
}

// Validar al salir del campo
costo.addEventListener("blur", validarCosto);

// Validar mientras escribe
costo.addEventListener("input", validarCosto);
