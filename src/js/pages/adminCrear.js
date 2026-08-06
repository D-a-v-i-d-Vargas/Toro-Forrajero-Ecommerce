/*******************************************************************************
 * PÁGINA: Admin Crear producto
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
    mDestacado: "",
    mEstado: ""
};

function reiniciarMensajeValidado() {
    mensajeValidado.mNombreProducto = "";
    mensajeValidado.mEspecie = "";
    mensajeValidado.mMarca = "";
    mensajeValidado.mPeso = "";
    mensajeValidado.mCosto = "";
    mensajeValidado.mPrecio = "";
    mensajeValidado.mDescripcion = "";
    mensajeValidado.mDestacado = "";
    mensajeValidado.mEstado = "inactivo";
    mensajeValidado.mImagen = "";
}

//=============================================================================
//                              Validaciones
//=============================================================================

// Diana - Validación del Nombre del producto
function validarNombreProducto(inputNombreProducto) {
    if (!inputNombreProducto) return "No se encontró el campo Nombre Producto";
    const nombreProducto = inputNombreProducto.value.trim();
    const alertMensaje = `<span class="alerta-titulo">El nombre del producto </span>`;
    if (nombreProducto === "") return alertMensaje + `<span class="alerta-titulo">no puede estar vacío. </span>`;
    if (nombreProducto.length < 3) return alertMensaje + `<span class="alerta-titulo">debe tener más de 3 caracteres. </span>`;
    return undefined;
}

// Validación de Especie
function validarEspecie(selectEspecie) {
    if (!selectEspecie) return "No se encontró el selector de motivo.";
    if (selectEspecie.value === "") return `<span class="alerta-titulo">Debe seleccionar una especie.</span>`;
    return undefined;
}

// Oscar - VALIDACIÓN DEL CAMPO MARCA
function validarMarca(selectMarca) {
    if (!selectMarca) return "No se encontró el campo Marca";
    const marca = selectMarca.value.trim();
    if (marca === "") {
        return `<span class="alerta-titulo narnaja-text">La marca debe ser seleccionada.</span>`;
    }
    return undefined;
}


// Restringe el input para que solo acepte dígitos y máximo un punto decimal
function restringirSoloNumeros(inputElement) {
    if (!inputElement) return;

    inputElement.addEventListener('keydown', function (e) {
        // 1. Teclas de navegación y control permitidas
        const teclasPermitidas = [
            'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'
        ];

        // Permitir controles del sistema (como Ctrl+C, Ctrl+V, Tab, etc.)
        if (teclasPermitidas.includes(e.key) || e.ctrlKey || e.metaKey) {
            return;
        }

        // 2. BLOQUEO DEL SEGUNDO PUNTO:
        if (e.key === '.') {
            // Si el valor actual del input ya contiene un punto, bloqueamos la tecla
            if (e.target.value.includes('.')) {
                e.preventDefault();
            }
            return;
        }

        // 3. Bloquear cualquier tecla que NO sea un número del 0 al 9
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const eCosto = document.getElementById("costo");
    const ePrecio = document.getElementById("precioVenta");
    const eExsistencia = document.getElementById("existencia");

    restringirSoloNumeros(eCosto);
    restringirSoloNumeros(ePrecio);
    restringirSoloNumeros(eExsistencia);

    // ... el resto de tu código
});

// Validación del campo Costo (MXN)
function validarCosto(eCosto) {

    if (!eCosto) return "No se encontró el campo Costo";
    const costo = eCosto.value.trim();
    const alertMensaje = `<span class="alerta-titulo narnaja-text">El costo </span>`;

    if (costo === "") return `${alertMensaje}<span class="narnaja-text">no puede estar vacío.</span>`;
    if (isNaN(Number(costo))) return `${alertMensaje}<span class="narnaja-text">debe ser un número válido.</span>`;
    if (Number(costo) <= 0) return `${alertMensaje}<span class="narnaja-text">debe ser mayor a $0.00.</span>`;

    return undefined;
}

// Vane - PRECIO DE VENTA
function validarPrecioVenta(ePrecioVenta) {
    if (!ePrecioVenta) return "No se encontró el campo Precio de Venta";
    const precioVenta = ePrecioVenta.value.trim();
    const alertMensaje = `<span class="alerta-titulo narnaja-text">El precio de venta </span>`;

    if (precioVenta === "") return `${alertMensaje} <span class="narnaja-text">no puede estar vacío.</span>`;
    if (Number(precioVenta) <= 0) return `${alertMensaje} <span class="narnaja-text">debe ser mayor a $0.00.</span>`;
    return undefined;
}

// EXISTENCIA
function validarExistencia(eExistencia) {
    if (!eExistencia) return "No se encontró el campo Existencia";
    const existencia = eExistencia.value.trim();
    const alertMensaje = `<span class="alerta-titulo narnaja-text">La existencia </span>`;

    if (existencia === "") return `${alertMensaje} <span class="narnaja-text">no puede estar vacía.</span>`;
    if (Number(existencia) < 0) return `${alertMensaje} <span class="narnaja-text">no puede ser menor que 0.</span>`;
    if (!Number.isInteger(Number(existencia))) return `${alertMensaje} <span class="narnaja-text">debe ser un número entero.</span>`;
    return undefined;
}

/* -----------------------------------------------------------------------------
   INTERACTIVIDAD DE LOS TOGGLES (CAMBIO DE TEXTO VISUAL)
----------------------------------------------------------------------------- */
function visibilidadProducto() {
    const checkVisibilidad = document.querySelector('.toggle-switch input[type="checkbox"]');
    const mensajeVisibilidad = document.querySelector('.estado-texto');

    if (!checkVisibilidad || !mensajeVisibilidad) return;
    checkVisibilidad.addEventListener('change', function (e) {
        if (e.target.checked) {
            mensajeVisibilidad.textContent = "activo";
            mensajeValidado.mEstado = "activo";
        } else {
            mensajeVisibilidad.textContent = "inactivo";
            mensajeValidado.mEstado = "inactivo";
        }
    });
}

// Esther - IMAGEN
function validarImagen(inputImagen) {
    if (!inputImagen) return "No se encuentra el campo de la imagen";

    const archivos = inputImagen.files;
    const alertMensaje = `<span class="alerta-titulo narnaja-text">Imagen principal:</span>`;

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

/**
 * Convierte un archivo de imagen en una cadena de texto en formato Data URL (Base64).
 * 
 * ¿Por qué se utiliza una Promise?
 * La lectura de archivos mediante 'FileReader' en JavaScript es una operación asíncrona.
 * Retornar una Promise permite pausar la ejecución mediante 'await' en el flujo principal
 * hasta que el archivo se haya leído por completo, evitando guardar datos incompletos en el JSON.
 * 
 * @param {File} imagen - Objeto 'File' obtenido desde el input de tipo file.
 * @returns {Promise<string>} Una Promesa que se resuelve devolviendo el string en Base64.
 */
function obtenerBase64(imagen) {
    return new Promise((resolve, reject) => {
        // Instanciamos el lector de archivos de la API nativa de JavaScript
        const reader = new FileReader();

        // Leemos el archivo binario y lo transformamos a una cadena Data URL (base64)
        reader.readAsDataURL(imagen);

        // Evento que se dispara cuando la lectura finaliza exitosamente
        reader.onload = () => resolve(reader.result);

        // Evento que se dispara si ocurre un problema al procesar el archivo
        reader.onerror = error => reject(error);
    });
}

// DESCRIPCIÓN 
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

const COMENTARIO = document.getElementById("descripcion-producto");
const CONTADOR = document.getElementById("contador");
const longitud_maxima = 300;

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

function productoDestacado() {
    const checkDestacado = document.getElementById('check-destacado');
    const mensajeDestacado = document.getElementById('texto-destacado');
    if (!checkDestacado || !mensajeDestacado) return;

    mensajeDestacado.textContent = checkDestacado.checked ? "SÍ" : "NO";

    checkDestacado.addEventListener('change', function (e) {
        if (e.target.checked) {
            mensajeDestacado.textContent = "SÍ";
            mensajeValidado.mDestacado = "activo";
        } else {
            mensajeDestacado.textContent = "NO";
            mensajeValidado.mDestacado = "inactivo";
        }
    });
}

/* -----------------------------------------------------------------------------
   VALIDACIÓN MAESTRA Y ENVÍO DEL FORMULARIO
----------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar interactividad de los toggles y contadores una sola vez
    visibilidadProducto();
    productoDestacado();

    const formulario = document.querySelector("#formulario-adminCrear");
    const COMENTARIO = document.getElementById("descripcion-producto");

    if (COMENTARIO) {
        COMENTARIO.addEventListener("input", actualizarContador);
        actualizarContador();
    }

    // 2. Evento Submit del formulario
    if (formulario) {
        formulario.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Limpiamos el objeto temporal antes de validar
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

            // Referencias a los toggles/checkboxes
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

            // Mostrar u ocultar mensajes de error en el DOM
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

            // Lectura y asignación de datos validados
            mensajeValidado.mNombreProducto = inputNombreProducto.value.trim();
            mensajeValidado.mEspecie = selectEspecie.options[selectEspecie.selectedIndex].text;
            mensajeValidado.mMarca = selectMarca.options[selectMarca.selectedIndex].text;
            mensajeValidado.mCosto = eCosto.value.trim();
            mensajeValidado.mPrecio = ePrecioVenta.value.trim();
            mensajeValidado.mExistencia = eExistencia.value.trim();
            mensajeValidado.mDescripcion = inputDescripcion.value.trim();

            // CAPTURA DIRECTA DE ESTADO Y DESTACADO (Evita que queden vacíos)
            mensajeValidado.mEstado = (checkVisibilidad && checkVisibilidad.checked) ? "activo" : "inactivo";
            mensajeValidado.mDestacado = checkDestacado && checkDestacado.checked ? "activo" : "inactivo";
            // Procesamiento de la Imagen
            const archivoImagen = inputImagen.files[0];
            if (archivoImagen) {
                try {
                    mensajeValidado.mImagen = await obtenerBase64(archivoImagen);
                } catch (error) {
                    console.error("Error al convertir la imagen a Base64:", error);
                    mensajeValidado.mImagen = "recursos-graficos/productos/placeholder.png";
                }
            } else {
                mensajeValidado.mImagen = "recursos-graficos/productos/placeholder.png";
            }

            // Envío de datos al JSON-Server
            await enviarDatos();

            if (divAlerta) {
                divAlerta.innerHTML = `
                <div class="alert bg-success text-white alert-dismissible fade show" role="alert">
                    Formulario enviado <span class="alerta-titulo">Correctamente</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            }

            // Resetear el formulario tras el envío exitoso
            formulario.reset();

            // Reestablecer los textos visuales de los toggles tras el reset
            const mensajeVisibilidad = document.querySelector('.estado-texto');
            const mensajeDestacado = document.getElementById('texto-destacado');
            if (mensajeVisibilidad) mensajeVisibilidad.textContent = "inactivo";
            if (mensajeDestacado) mensajeDestacado.textContent = "NO";

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
    mostrarModal()
    try {
        const resActual = await fetch(API_URL);
        const productosActuales = await resActual.json();

        // Calculamos el ID incremental correctamente
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

    cerrarModal();
}


function mostrarModal() {
    const modal = document.createElement('DIV');
    const carga = document.createElement('DIV');
    carga.innerHTML=  `
        <img class="animacion-carga" src="recursos-graficos/logo/logo-carga.png" alt="">
        
<p class="cargar-producto-p"> Creando Producto...</p>`
    modal.classList.add('modal-overlay');


    // modal.addEventListener('click', function () {
    //     cerrarModal()
    // })

    const body = document.querySelector('body');
    body.classList.add('overflow-hiden');
    body.appendChild(modal);
    modal.appendChild(carga);

    setTimeout(() => {
        modal.classList.add('is-visible');
    }, 10);

}

function cerrarModal() {
    const modal = document.querySelector('.modal-overlay');
    const body = document.querySelector('body');


    if (modal) {
        modal.classList.remove('is-visible');
        body.classList.remove('overflow-hiden');

        setTimeout(() => {
            modal.remove();
        }, 300);
    }

}