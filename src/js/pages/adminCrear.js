/*******************************************************************************
 *
 * PÁGINA: Admin Crear producto
 *
 ******************************************************************************/

// Objeto que acumulará los datos
const mensajeValidado = {
    mNombreProducto: "",
    mEspecie: "",
    mMarca: "",
    mPeso: "",
    mCosto: "",
    mPrecio: "",
    mDescripcion: "",
    mDestacado: false,
    mEstado: "inactivo",
    mImagen: ""
};

function reiniciarMensajeValidado() {
    mensajeValidado.mNombreProducto = "";
    mensajeValidado.mEspecie = "";
    mensajeValidado.mMarca = "";
    mensajeValidado.mPeso = "";
    mensajeValidado.mCosto = "";
    mensajeValidado.mPrecio = "";
    mensajeValidado.mDescripcion = "";
    mensajeValidado.mDestacado = false;
    mensajeValidado.mEstado = "inactivo";
    mensajeValidado.mImagen = "";
}

//=============================================================================
//                              Validaciones
//=============================================================================

function validarNombreProducto(inputNombreProducto) {
    if (!inputNombreProducto) return "No se encontró el campo Nombre Producto";

    const nombreProducto = inputNombreProducto.value.trim();
    const alertMensaje = `<span class="alerta-titulo">El nombre del producto </span>`;

    if (nombreProducto === "") return alertMensaje + `<span class="alerta-titulo">no puede estar vacío. </span>`;
    if (nombreProducto.length < 3) return alertMensaje + `<span class="alerta-titulo">debe tener más de 3 caracteres. </span>`;

    return undefined;
}

function validarEspecie(selectEspecie) {
    if (!selectEspecie) return "No se encontró el selector de especie.";
    if (selectEspecie.value === "" || selectEspecie.selectedIndex === 0) {
        return `<span class="alerta-titulo">Debe seleccionar una especie.</span>`;
    }
    return undefined;
}

function validarMarca(selectMarca) {
    if (!selectMarca) return "No se encontró el campo Marca";
    if (selectMarca.value.trim() === "" || selectMarca.selectedIndex === 0) {
        return `<span class="alerta-titulo narnaja-text">La marca debe ser seleccionada.</span>`;
    }
    return undefined;
}

function validarCosto(eCosto) {
    if (!eCosto) return "No se encontró el campo Costo";

    const costo = eCosto.value.trim();
    const alertMensaje = `<span class="alerta-titulo narnaja-text">El costo </span>`;

    if (costo === "") return `${alertMensaje}<span class="narnaja-text">no puede estar vacío.</span>`;
    if (isNaN(Number(costo))) return `${alertMensaje}<span class="narnaja-text">debe ser un número válido.</span>`;
    if (Number(costo) <= 0) return `${alertMensaje}<span class="narnaja-text">debe ser mayor a $0.00.</span>`;

    return undefined;
}

function validarPrecioVenta(ePrecioVenta) {
    if (!ePrecioVenta) return "No se encontró el campo Precio de Venta";

    const precioVenta = ePrecioVenta.value.trim();
    const alertMensaje = `<span class="alerta-titulo narnaja-text">El precio de venta </span>`;

    if (precioVenta === "") return `${alertMensaje} <span class="narnaja-text">no puede estar vacío.</span>`;
    if (isNaN(Number(precioVenta))) return `${alertMensaje} <span class="narnaja-text">debe ser un número válido.</span>`;
    if (Number(precioVenta) <= 0) return `${alertMensaje} <span class="narnaja-text">debe ser mayor a $0.00.</span>`;

    return undefined;
}

function validarExistencia(eExistencia) {
    if (!eExistencia) return "No se encontró el campo Existencia";

    const existencia = eExistencia.value.trim();
    const alertMensaje = `<span class="alerta-titulo narnaja-text">La existencia </span>`;

    if (existencia === "") return `${alertMensaje} <span class="narnaja-text">no puede estar vacía.</span>`;
    if (Number(existencia) < 0) return `${alertMensaje} <span class="narnaja-text">no puede ser menor que 0.</span>`;
    if (!Number.isInteger(Number(existencia))) return `${alertMensaje} <span class="narnaja-text">debe ser un número entero.</span>`;

    return undefined;
}

// CORRECCIÓN EN VALIDACIÓN DE IMAGEN
function validarImagen(inputImagen) {
    if (!inputImagen) return "No se encuentra el campo de la imagen";

    const archivos = inputImagen.files;
    const alertMensaje = `<span class="alerta-titulo narnaja-text">Imagen principal:</span>`;

    // Verifica que existan archivos seleccionados
    if (!archivos || archivos.length === 0) {
        return `${alertMensaje} <span class="narnaja-text">Debes seleccionar una imagen.</span>`;
    }

    const archivo = archivos[0];
    const tiposPermitidos = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const maxTamanoBytes = 50 * 1024 * 1024; // 50MB

    if (!tiposPermitidos.includes(archivo.type.toLowerCase())) {
        return `${alertMensaje} <span class="narnaja-text">Formato no válido. Solo JPG, PNG y WEBP.</span>`;
    }

    if (archivo.size > maxTamanoBytes) {
        return `${alertMensaje} <span class="narnaja-text">El archivo supera el tamaño máximo permitido (50MB).</span>`;
    }

    return undefined;
}

function validarMensaje(inputMensaje) {
    if (!inputMensaje) return "No se encontró la caja de comentarios.";
    const texto = inputMensaje.value.trim();

    if (texto.length === 0) {
        return `<span class="alerta-titulo narnaja-text">La descripción no puede estar vacía.</span>`;
    }
    if (texto.length > 300) {
        return `<span class="alerta-titulo narnaja-text">Has excedido el límite de 300 caracteres.</span>`;
    }
    return undefined;
}

/* -----------------------------------------------------------------------------
   INTERACTIVIDAD Y CONTADORES
----------------------------------------------------------------------------- */
function actualizarContador() {
    const COMENTARIO = document.getElementById("descripcion-producto");
    const CONTADOR = document.getElementById("contador");
    const longitud_maxima = 300;

    if (!COMENTARIO || !CONTADOR) return;

    let texto = COMENTARIO.value;
    let texto_sin_espacios = texto.trim();
    let longitud = texto.length;
    let numero_de_palabras = texto_sin_espacios.length > 0 ? texto_sin_espacios.split(/\s+/).length : 0;

    let mensaje = `${longitud} de ${longitud_maxima} caracteres | ${numero_de_palabras} palabras`;

    if (longitud > 0 && texto_sin_espacios.length === 0) {
        mensaje = "¡El texto no puede contener solo espacios en blanco!";
    } else if (longitud > longitud_maxima) {
        mensaje = `¡Has excedido el límite! (${longitud} / ${longitud_maxima})`;
    }

    CONTADOR.textContent = mensaje;
    CONTADOR.style.color = (longitud > longitud_maxima || (longitud > 0 && texto_sin_espacios.length === 0)) ? "red" : "black";
}

function visibilidadProducto() {
    const checkVisibilidad = document.querySelector('.toggle-switch input[type="checkbox"]');
    const mensajeVisibilidad = document.querySelector('.estado-texto');
    if (!checkVisibilidad || !mensajeVisibilidad) return;

    mensajeVisibilidad.textContent = checkVisibilidad.checked ? "activo" : "inactivo";

    checkVisibilidad.addEventListener('change', function (e) {
        mensajeVisibilidad.textContent = e.target.checked ? "activo" : "inactivo";
    });
}

function productoDestacado() {
    const checkDestacado = document.getElementById('check-destacado');
    const mensajeDestacado = document.getElementById('texto-destacado');

    if (!checkDestacado || !mensajeDestacado) return;

    mensajeDestacado.textContent = checkDestacado.checked ? "SÍ" : "NO";

    checkDestacado.addEventListener('change', function (e) {
        mensajeDestacado.textContent = e.target.checked ? "SÍ" : "NO";
    });
}

/* -----------------------------------------------------------------------------
   INICIALIZACIÓN Y MANEJO DEL FORMULARIO (Único Listener)
----------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    visibilidadProducto();
    productoDestacado();

    const formulario = document.querySelector("#formulario-adminCrear");
    const COMENTARIO = document.getElementById("descripcion-producto");

    if (COMENTARIO) {
        COMENTARIO.addEventListener("input", actualizarContador);
        actualizarContador();
    }

    if (formulario) {
        formulario.addEventListener('submit', async function (e) {
            e.preventDefault();

            reiniciarMensajeValidado();

            // Referencias del DOM
            const inputNombreProducto = document.getElementById("nombre-producto");
            const selectEspecie = document.getElementById("especie");
            const selectMarca = document.getElementById("marca");
            const eCosto = document.getElementById("costo");
            const ePrecioVenta = document.getElementById("precioVenta");
            const eExistencia = document.getElementById("existencia");
            const divAlerta = document.querySelector(".alerta");
            const inputImagen = document.getElementById("imagen-principal");
            const inputDescripcion = document.getElementById("descripcion-producto");
            const checkVisibilidad = document.querySelector('.toggle-switch input[type="checkbox"]');
            const checkDestacado = document.getElementById('check-destacado');

            // Ejecutar validaciones
            const errorNombre = validarNombreProducto(inputNombreProducto);
            const errorEspecie = validarEspecie(selectEspecie);
            const errorMarca = validarMarca(selectMarca);
            const errorCosto = validarCosto(eCosto);
            const errorPrecioVenta = validarPrecioVenta(ePrecioVenta);
            const errorExistencia = validarExistencia(eExistencia);
            const errorImagen = validarImagen(inputImagen);
            const errorDescripcion = validarMensaje(inputDescripcion);

            // Mostrar u ocultar errores
            mostrarError("#error-nombre p", errorNombre);
            mostrarError("#error-especie p", errorEspecie);
            mostrarError("#error-marca p", errorMarca);
            mostrarError("#error-costo p", errorCosto);
            mostrarError("#error-venta p", errorPrecioVenta);
            mostrarError("#error-existencia p", errorExistencia);
            mostrarError("#error-imagen", errorImagen);
            mostrarError("#error-mensaje p", errorDescripcion);

            const hayErrores =
                errorNombre ||
                errorEspecie ||
                errorMarca ||
                errorCosto ||
                errorPrecioVenta ||
                errorExistencia ||
                errorImagen ||
                errorDescripcion;

            if (hayErrores) {
                if (divAlerta) {
                    divAlerta.innerHTML = `
                    <div class="alert bg-naranjaFuerte alert-dismissible fade show" role="alert">
                        <span class="alerta-titulo">Parece que hay un detalle:</span> Revisa los campos resaltados para poder continuar.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                }
                console.warn("Envío bloqueado por errores de validación.");
                return;
            }

            // Asignar valores
            mensajeValidado.mNombreProducto = inputNombreProducto.value.trim();
            mensajeValidado.mEspecie = selectEspecie.options[selectEspecie.selectedIndex].text;
            mensajeValidado.mMarca = selectMarca.options[selectMarca.selectedIndex].text;
            mensajeValidado.mCosto = eCosto.value.trim();
            mensajeValidado.mPrecio = ePrecioVenta.value.trim();
            mensajeValidado.mExistencia = eExistencia.value.trim();
            mensajeValidado.mDescripcion = inputDescripcion.value.trim();

            // RUTA DE LA IMAGEN: Nos aseguramos de agregar el ./ relativo si es necesario
            const nombreArchivo = inputImagen.files[0].name;
            mensajeValidado.mImagen = `/recursos-graficos/productos/${nombreArchivo}`;

            mensajeValidado.mEstado = checkVisibilidad && checkVisibilidad.checked ? "activo" : "inactivo";
            mensajeValidado.mDestacado = checkDestacado ? checkDestacado.checked : false;

            // Enviar datos a JSON-Server
            await enviarDatos();

            if (divAlerta) {
                divAlerta.innerHTML = `
                <div class="alert bg-success text-white alert-dismissible fade show" role="alert">
                    Formulario enviado <span class="alerta-titulo">Correctamente</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            }

            formulario.reset();
            actualizarContador();
            console.log("¡ÉXITO TOTAL! Objeto enviado:", mensajeValidado);
        });
    }
});

function mostrarError(selector, mensajeError) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.innerHTML = mensajeError || "";
    }
}

/* -----------------------------------------------------------------------------
   PETICIÓN API / JSON-SERVER
----------------------------------------------------------------------------- */
const API_URL = 'http://localhost:3000/productos';

async function enviarDatos() {
    try {
        const resActual = await fetch(API_URL);
        const productosActuales = await resActual.json();

        // Generar ID numérico consecutivo seguro
        const ultimoId = productosActuales.reduce((max, p) => Number(p.id) > max ? Number(p.id) : max, 0);
        const nuevoId = ultimoId + 1;

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: String(nuevoId), // Se asigna como string o number según tu JSON
                nombreProducto: mensajeValidado.mNombreProducto,
                descripcion: mensajeValidado.mDescripcion || "",
                destacado: mensajeValidado.mDestacado,
                especie: mensajeValidado.mEspecie,
                costo: Number(mensajeValidado.mCosto) || 0,
                precio: Number(mensajeValidado.mPrecio) || 0,
                marca: mensajeValidado.mMarca,
                imagen: mensajeValidado.mImagen || "",
                existencia: Number(mensajeValidado.mExistencia) || 0,
                estado: mensajeValidado.mEstado
            })
        });

        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
        }

        const resultado = await response.json();
        console.log("Producto guardado exitosamente en JSON-Server:", resultado);
    } catch (error) {
        console.error('Fallo al conectar con la API:', error);
    }
}