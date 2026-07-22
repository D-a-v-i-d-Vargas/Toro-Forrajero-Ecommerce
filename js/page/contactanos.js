/*******************************************************************************
 *
 * PÁGINA: CONTÁCTANOS
 *
 ******************************************************************************/

// Objeto que acumulará los datos si todo sale bien
let mensajeValidado = {
    mNombre: "",
    mTelefono: "",
    mCorreo: "",
    mHorario: "", // Pendiente
    mFecha: "",   // Pendiente 
    mMotivo: "",
    mMensaje: ""
};

function reiniciarMensajeValidado() {
    for (let key in mensajeValidado) {
        mensajeValidado[key] = "";
    }
}

/* -----------------------------------------------------------------------------
    FUNCIONES DE VALIDACIÓN INDIVIDUALES
    (Retornan un string con el error, o undefined si todo está correcto)
----------------------------------------------------------------------------- */

// Óscar - Nombre
function validarNombre(inputNombre) {
    if (!inputNombre) return "No se encontró el campo nombre";
    const nombre = inputNombre.value.trim();
    const alertMensaje = `<span class="alerta-titulo">El Nombre </span>`;

    if (nombre === "") return alertMensaje + " no puede estar vacío.";
    if (/\d/.test(nombre)) return alertMensaje + " no puede contener números.";
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(nombre)) return alertMensaje + " solo puede contener letras y espacios.";
    if (nombre.length < 3) return alertMensaje + " debe tener al menos 3 caracteres.";
    
    return undefined;
}

// Karen - Teléfono
function validarTelefono(inputTelefono) {
    if (!inputTelefono) return "Campo teléfono no encontrado";
    const telefono = inputTelefono.value.replace(/[\s-]/g, ""); 
    const alertMensaje = `<span class="alerta-titulo">Teléfono No válido:</span>`;

    if (telefono === "") return `${alertMensaje} Debes llenar el campo`;
    if (!/^\d{10}$/.test(telefono)) return `${alertMensaje} El teléfono debe tener exactamente 10 dígitos`;

    return undefined;
}

// Elias - Correo Electrónico (Actualizado con Regex)
function validarCorreo(inputCorreo) {
    if (!inputCorreo) return "Campo correo no encontrado";
    const correo = inputCorreo.value.trim();
    const alertMensaje = `<span class="alerta-titulo">Correo Electrónico No válido:</span>`;

    if (correo === "") return `${alertMensaje} Debes llenar el campo`;
    
    // Expresión regular universal para correos (permite cualquier dominio válido)
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexCorreo.test(correo)) return `${alertMensaje} El formato del correo es incorrecto`;

    // Evitar usuarios muy genéricos (opcional, pero mantenido de tu lógica)
    const nombreCorreo = correo.split("@")[0].toLowerCase();
    const usuariosGenericos = ["test", "prueba", "admin", "null", "undefined"];
    if (usuariosGenericos.includes(nombreCorreo)) return `${alertMensaje} No uses correos de prueba`;

    return undefined;
}

// Motivo
function validarMotivo(selectMotivo) {
    if (!selectMotivo) return "No se encontró el selector de motivo.";
    if (selectMotivo.value === "") return `<span class="alerta-titulo">Motivo de contacto:</span> Debes seleccionar un motivo.`;
    return undefined;
}

// Natalia - Mensaje
function validarMensaje(inputMensaje) {
    if (!inputMensaje) return "No se encontró la caja de comentarios.";
    const texto = inputMensaje.value.trim();
    
    if (texto.length === 0) return `<span class="alerta-titulo class narnaja-text">Revisa que no exceda 300 caracteres ni sean solo espacios.</span>`;
    if (texto.length > 300) return "Has excedido el límite de 300 caracteres.";
    
    return undefined;
}

// Vane - Horario
function validarHorario(inputInicio, inputFin) {
    if (!inputInicio || !inputFin) return "No se encontró el campo de horario.";

    const horaInicio = inputInicio.value; // formato "HH:MM"
    const horaFin = inputFin.value;
    const HORA_MIN = "08:00";
    const HORA_MAX = "20:00";
    const alertMensaje = `<span class="alerta-titulo">Horario:</span>`;

    if (!horaInicio || !horaFin) return `${alertMensaje} Debes llenar el campo`;
    if (horaFin <= horaInicio) return `${alertMensaje} La hora final debe ser mayor a la hora inicial`;
    if (horaInicio < HORA_MIN || horaInicio > HORA_MAX || horaFin < HORA_MIN || horaFin > HORA_MAX) {
        return `${alertMensaje} Debes seleccionar un horario entre 8:00 a.m. y 8:00 p.m.`;
    }

    return undefined;
}

/* -----------------------------------------------------------------------------
    LÓGICA DEL CONTADOR EN VIVO (Natalia)
----------------------------------------------------------------------------- */
const COMENTARIO = document.getElementById("caja_de_comentarios");
const CONTADOR = document.getElementById("contador");
const longitud_maxima = 300; 

function actualizarContador() {
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

if (COMENTARIO) {
    COMENTARIO.addEventListener("input", actualizarContador);


}





/* -----------------------------------------------------------------------------
    VALIDACIÓN MAESTRA Y ENVÍO DEL FORMULARIO
----------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // Se recomienda ponerle un ID al formulario en tu HTML, ej: id="formulario-contacto"
    const formulario = document.querySelector("#formulario-contacto") || document.querySelector("form");
    
    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita que la página se recargue
            
            reiniciarMensajeValidado();

            // Referencias a los inputs
            const inputNombre = document.getElementById("nombre");
            const inputTelefono = document.getElementById("telefono");
            const inputCorreo = document.getElementById("correo");
            const selectMotivo = document.getElementById("motivo");
            const inputHoraInicio = document.getElementById("hora-inicio");
            const inputHoraFin = document.getElementById("hora-fin");
            const divAlerta = document.querySelector(".alerta");
            
            // Ejecutar validaciones
            const errorNombre = validarNombre(inputNombre);
            const errorTelefono = validarTelefono(inputTelefono);
            const errorCorreo = validarCorreo(inputCorreo);
            const errorMotivo = validarMotivo(selectMotivo);
            const errorMensaje = validarMensaje(COMENTARIO);
            const errorHorario = validarHorario(inputHoraInicio, inputHoraFin);

            // Mostrar u ocultar errores en el DOM
            mostrarError("#error-nombre p", errorNombre);
            mostrarError("#error-telefono p", errorTelefono);
            mostrarError("#error-correo p", errorCorreo);
            mostrarError("#error-motivo p", errorMotivo);
            mostrarError("#error-mensaje p", errorMensaje); // Asegúrate de tener este contenedor en tu HTML
            mostrarError("#error-hora p", errorHorario);

            const hayErrores = errorNombre || errorTelefono || errorCorreo || errorMotivo || errorMensaje || errorHorario;

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

            // Si pasa todas las validaciones, construimos el objeto
            mensajeValidado.mNombre = inputNombre.value.trim();
            mensajeValidado.mTelefono = inputTelefono.value.replace(/[\s-]/g, "");
            mensajeValidado.mCorreo = inputCorreo.value.trim();
            mensajeValidado.mMotivo = selectMotivo.options[selectMotivo.selectedIndex].text;
            mensajeValidado.mMensaje = COMENTARIO.value.trim();
            
            mensajeValidado.mHorario = `${inputHoraInicio.value} - ${inputHoraFin.value}`;
            // Espacio listo para cuando se agregue Fecha
            mensajeValidado.mFecha = "";

            if (divAlerta) {
                divAlerta.innerHTML = `
                <div class="alert bg-success text-white alert-dismissible fade show" role="alert">
                    Formulario enviado <span class="alerta-titulo">Correctamente</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            }

            console.log("¡ÉXITO TOTAL! Objeto listo:", mensajeValidado);

            console.log(mensajeValidado); //vemos que sí esté el mensaje completo

            /* -----------------------------------------------------------------------------
            Usamos EmailJS para enviar la información recopilada en el formulario al mail
            ----------------------------------------------------------------------------- */
            emailjs.init("3KkLupFj0lLfxdHq2"); //Public API Key del EmailJS
            
            emailjs.send(
            "service_i8a49io", //Service Id de EmailJS
            "template_7a53bep", //Template del email que creamos en EmailJS 'Contact US'
            {
                nombre: mensajeValidado.mNombre,
                telefono: mensajeValidado.mTelefono,
                correo: mensajeValidado.mCorreo,
                asunto: `[${mensajeValidado.mMotivo}] Nuevo mensaje de contacto`,
                mensaje: mensajeValidado.mMensaje
            }
            )
            .then(() => {
            formulario.reset();
            actualizarContador();
            })
            .catch(error => {
            console.error(error);
            });
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