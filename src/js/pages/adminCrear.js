/*******************************************************************************
 *
 * PÁGINA: Admin Crear producto
 *
 ******************************************************************************/

const { cache } = require("react");

// Objeto que acumulará los datos si todo sale bien, hay que llenarlo!!
const mensajeValidado = {
    mNombreProducto: "",
    mEspecie: "",
    mMarca: "", //Pendiente
    mPeso: "", //Pendiente
    mPrecio: "", //Pendiente
    mDescripcion: "", //Pendiente
    mDestacado: false //Pendiente
};

function reiniciarMensajeValidado() {
    for (let key in mensajeValidado) {
        mensajeValidado[key] = "";
    }
}

//=============================================================================
//                              Validaciones
//=============================================================================

// Diana
//Validación del Nombre del producto
function validarNombreProducto(inputNombreProducto) {
    if (!inputNombreProducto)
        return "No se encontró el campo Nombre Producto"

    const nombreProducto = inputNombreProducto.value.trim();
    const alertMensaje = `<span class="alerta-titulo">El nombre del producto </span>`;

    if (nombreProducto === "")
        return alertMensaje + "no puede estar vacío.";
    if (nombreProducto.length < 3)
        return alertMensaje + "debe tener más de 3 caracteres.";

    return undefined;
}

//Validación de Especie
function validarEspecie(selectEspecie) {
    if (!selectEspecie) return "No se encontró el selector de motivo."
    if (selectEspecie.value === "") return `<span class="alerta-titulo">Especie:</span> Debe seleccionar una especie.`;
    return undefined;
}

// Oscar
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
// ===============================
// Validación del campo Costo (MXN)
// ===============================

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


// Vane




//Esther





/* -----------------------------------------------------------------------------
                VALIDACIÓN MAESTRA Y ENVÍO DEL FORMULARIO
----------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    //Console.log de prueba
    console.log("AdminCrear cargado");
    // Se usa con el ID del formulario en el HTML
    const formulario = document.querySelector("#formulario-adminCrear");
    //console.log de prueba
    console.log(formulario);

    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita que la página se recargue

            //Console.log de prueba
            console.log("Entró al submit");

            reiniciarMensajeValidado();

            // Referencias a los inputs
            const inputNombreProducto = document.getElementById("nombre-producto");
            const selectEspecie = document.getElementById("especie")
            const divAlerta = document.querySelector(".alerta");


            // Ejecutar validaciones
            const errorNombre = validarNombreProducto(inputNombreProducto);
            const errorEspecie = validarEspecie(selectEspecie);


            //Console.log de prueba
            console.log(inputNombreProducto);
            console.log(selectEspecie);

            // Mostrar u ocultar errores en el DOM
            //Console.log de prueba
            console.log(errorNombre);
            console.log(errorEspecie);
            mostrarError("#error-nombre p", errorNombre);
            mostrarError("#error-especie p", errorEspecie);

            //Añadir sus errores a esta línea con más ||
            const hayErrores = errorNombre || errorEspecie;

            if (hayErrores) {
                if (divAlerta) {
                    divAlerta.innerHTML = `
                    <div class="alert bg-naranjaFuerte alert-dismissible fade show" role="alert">
                        <span class="alerta-titulo">Parece que hay un detalle:</span> Revisa los campos resaltados para poder continuar.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                }
                console.warn("Envío bloqueado por errores.");
                return;
            }

            // Si pasa todas las validaciones, llenamos el objeto para que Elías lo use en el JSON!!!
            mensajeValidado.mNombreProducto = inputNombreProducto.value.trim();
            mensajeValidado.mEspecie = selectEspecie.options[selectEspecie.selectedIndex].text;


            if (divAlerta) {
                divAlerta.innerHTML = `
                <div class="alert bg-success text-white alert-dismissible fade show" role="alert">
                    Formulario enviado <span class="alerta-titulo">Correctamente</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            }

            console.log("¡ÉXITO TOTAL! Objeto listo:", mensajeValidado);

            console.log(mensajeValidado); //vemos que sí esté el mensaje completo

        });
    }
});

// Función auxiliar para inyectar los errores en el HTML
function mostrarError(selector, mensajeError) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.innerHTML = mensajeError || "";
    }
}

const API_URL = 'http://localhost:3000/productos';

async function enviarDatos() {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombreProducto: mensajeValidado.mNombreProducto,
                descripcion: mensajeValidado.mDescripcion,
                destacado: mensajeValidado.mDestacado,
                especie: mensajeValidado.mEspecie,
                peso: Number(mensajeValidado.mPeso),    
                precio: Number(mensajeValidado.mPrecio),
                marca: mensajeValidado.mMarca,
                imagen: mensajeValidado.mImagen,
                estado: mensajeValidado.mEstado
            })
        });
        const resultado = await response.json();
        console.log(resultado);
    } catch (error) {
        console.error('Fallo:', error);
    }
}
enviarDatos();

