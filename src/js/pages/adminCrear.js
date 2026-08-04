/*******************************************************************************
 *
 * PÁGINA: Admin Crear producto
 *
 ******************************************************************************/

// Objeto que acumulará los datos si todo sale bien, hay que llenarlo!!
const mensajeValidado = {
    mNombreProducto: "",
    mEspecie: "",
    mMarca: "", //Pendiente
    mPeso: "", //Pendiente
    mCosto: "",
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
function validarNombreProducto(inputNombreProducto){
    if (!inputNombreProducto) 
        return "No se encontró el campo Nombre Producto"
    
    const nombreProducto = inputNombreProducto.value.trim();
    const alertMensaje = `<span class="alerta-titulo">El nombre del producto </span>`;

    if (nombreProducto === "") 
        return alertMensaje + `<span class="alerta-titulo">no puede estar vacío. </span>`;
    if (nombreProducto.length < 3) 
        return alertMensaje + `<span class="alerta-titulo">debe tener más de 3 caracteres. </span>`;

    return undefined;
}

//Validación de Especie
function validarEspecie(selectEspecie){
    if (!selectEspecie) return "No se encontró el selector de motivo."
    if (selectEspecie.value === "") return `<span class="alerta-titulo">Debe seleccionar una especie.</span>`;
    return undefined;
}

// Oscar
// =============================
// VALIDACIÓN DEL CAMPO MARCA
// =============================


function validarMarca(selectMarca) {
    if (!selectMarca)
        return "No se encontró el campo Marca";

    const marca = selectMarca.value.trim();

    if (marca === "")
        return `<span class="alerta-titulo narnaja-text">
                    La marca debe ser seleccionada.
                </span>`;

    return undefined;
}



// ===============================
// Validación del campo Costo (MXN)
// ===============================

// COSTO ==========================

function validarCosto(eCosto) {
    if (!eCosto)
        return "No se encontró el campo Costo";

    const costo = eCosto.value.trim();

    const alertMensaje =
        `<span class="alerta-titulo narnaja-text">El costo </span>`;

    if (costo === "")
        return `${alertMensaje}<span class="narnaja-text">no puede estar vacío.</span>`;

    if (isNaN(Number(costo)))
        return `${alertMensaje}<span class="narnaja-text">debe ser un número válido.</span>`;

    if (Number(costo) <= 0)
        return `${alertMensaje}<span class="narnaja-text">debe ser mayor a $0.00.</span>`;

    return undefined;
}


// Vane


//PRECIO DE VENTA ==========================

function validarPrecioVenta(ePrecioVenta){
    if (!ePrecioVenta)
        return "No se encontró el campo Precio de Venta";

    const precioVenta = ePrecioVenta.value.trim();
    const alertMensaje = `<span class="alerta-titulo narnaja-text">El precio de venta </span>`;

    if (precioVenta === "")
        return `${alertMensaje} <span class="narnaja-text">no puede estar vacío.</span>`;

    if (Number(precioVenta) <= 0)
        return `${alertMensaje} <span class="narnaja-text">debe ser mayor a $0.00.</span>`;

    return undefined;
}

//EXISTENCIA =======================
function validarExistencia(eExistencia){
    if (!eExistencia)
        return "No se encontró el campo Existencia";

    const existencia = eExistencia.value.trim();
    const alertMensaje = `<span class="alerta-titulo narnaja-text">La existencia </span>`;

    if (existencia === "")
        return `${alertMensaje} <span class="narnaja-text">no puede estar vacía.</span>`;

    if (Number(existencia) < 0)
        return `${alertMensaje} <span class="narnaja-text">no puede ser menor que 0.</span>`;

    if (!Number.isInteger(Number(existencia)))
        return `${alertMensaje} <span class="narnaja-text">debe ser un número entero.</span>`;

    return undefined;
}





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
            const selectEspecie = document.getElementById("especie");
            const selectMarca = document.getElementById("marca");
            const eCosto = document.getElementById("costo");
            const ePrecioVenta = document.getElementById("precioVenta"); // Vane - Precio de Venta
            const eExistencia = document.getElementById("existencia"); // Vane - Existencia
            const divAlerta = document.querySelector(".alerta");
            
            
            // Ejecutar validaciones
            // Ejecutar validaciones
            const errorNombre = validarNombreProducto(inputNombreProducto);
            const errorEspecie = validarEspecie(selectEspecie);
            const errorMarca = validarMarca(selectMarca);
            const errorCosto = validarCosto(eCosto);
            const errorPrecioVenta = validarPrecioVenta(ePrecioVenta);
            const errorExistencia = validarExistencia(eExistencia);
            

            //Console.log de prueba
            console.log(inputNombreProducto);
            console.log(selectEspecie);

            // Mostrar u ocultar errores en el DOM
            //Console.log de prueba
            console.log(errorNombre);
            console.log(errorEspecie);
            mostrarError("#error-nombre p", errorNombre);
            mostrarError("#error-especie p", errorEspecie);
            mostrarError("#error-marca p", errorMarca);
            mostrarError("#error-costo p", errorCosto);
            mostrarError("#error-venta p", errorPrecioVenta); 
            mostrarError("#error-existencia p", errorExistencia); 

            //Añadir sus errores a esta línea con más ||
            const hayErrores =
                            errorNombre ||
                            errorEspecie ||
                            errorMarca ||
                            errorCosto ||
                            errorPrecioVenta ||
                            errorExistencia;

            

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

            mensajeValidado.mEspecie =
                selectEspecie.options[selectEspecie.selectedIndex].text;

            mensajeValidado.mMarca =
                selectMarca.options[selectMarca.selectedIndex].text;

            mensajeValidado.mCosto = eCosto.value.trim();

            mensajeValidado.mPrecio = ePrecioVenta.value.trim();

            mensajeValidado.mExistencia = eExistencia.value.trim(); // Vane
            

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

