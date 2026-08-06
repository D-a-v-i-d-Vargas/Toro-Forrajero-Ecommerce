/*******************************************************************************
 * PÁGINA: Registro de nuevos usuarios
 ******************************************************************************/

// Objeto que acumulará los datos
const usuarioValidado = {   //const mensajeValidado
    mNombre: "",
    mApellido: "",
    mTelefono: "",
    mAreaInteres: "",
    mCorreo: "",
    mContraseña: "",
    mEstado: "",
};

function reiniciarUsuarioValidado() {  
    usuarioValidado.mNombre: "", 
    usuarioValidado.mApellido: "",
    usuarioValidado.mTelefono: "",
    usuarioValidado.mAreaInteres: "",
    usuarioValidado.mCorreo: "",
    usuarioValidado.mContraseña: "",
    usuarioValidado.mEstado: "",
}

/* -----------------------------------------------------------------------------
    VALIDACIÓN MAESTRA Y ENVÍO DEL FORMULARIO
----------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // ID del formulario en el HTML
    const formulario = document.querySelector("#formulario-registro")
    
    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita que la página se recargue
            
            reiniciarUsuarioValidado();

            // Referencias a los inputs
            const inputNombre = document.getElementById("nombre");
            const inputApellido = document.getElementById("apellido");
            const inputTelefono = document.getElementById("telefono");
            const selectAreaInteres = document.getElementById("area_interes");
            const inputCorreo = document.getElementById("correo");
            const inputContraseña = document.getElementById("password");
            const selectEstado = document.getElementById("estado");
            const divAlerta = document.querySelector(".alerta"); 


            // Ejecutar validaciones
            const errorNombre = validarNombre(inputNombre);
            const errorApellido = validarApellido(inputApellido);
            const errorTelefono = validarTelefono(inputTelefono);
            const errorAreaInteres = validarAreaInteres(selectAreaInteres);
            const errorCorreo = validarCorreo(inputCorreo);
            const errorContraseña = validarContraseña(inputContraseña);
            const errorEstado = validarEstado(selectEstado);
            


            // Mostrar u ocultar errores en el DOM
            mostrarError("#error-nombre p", errorNombre);
            mostrarError("#error-apellido p", errorApellido);
            mostrarError("#error-telefono p", errorTelefono);
            mostrarError("#error-areaInteres p", errorAreaInteres);
            mostrarError("#error-correo p", errorCorreo);
            mostrarError("#error-contraseña p", errorContraseña); 
            mostrarError("#error-estado p", errorEstado);
            
            const hayErrores = errorNombre || errorApellido || errorTelefono || errorAreaInteres || errorCorreo || errorContraseña || errorEstado;

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
            usuarioValidado.mNombre = inputNombre.value.trim();
            usuarioValidado.mApellido = inputApellido.value.trim();
            usuarioValidado.mTelefono = inputTelefono.value.replace(/[\s-]/g, "");
            usuarioValidado.mAreaInteres = selectMotivo.options[selectMotivo.selectedIndex].text;//PENDIENTE
            usuarioValidado.mCorreo = inputCorreo.value.trim();
            usuarioValidado.mContraseña = inputContraseña.value.trim();
            usuarioValidado.mEstado = selectMotivo.options[selectMotivo.selectedIndex].text;//PENDIENTE


            if (divAlerta) {
                divAlerta.innerHTML = `
                <div class="alert bg-success text-white alert-dismissible fade show" role="alert">
                    Datos registrados <span class="alerta-titulo">Correctamente</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            }

            console.log("¡ÉXITO TOTAL! Objeto listo:", usuarioValidado);

            console.log(usuarioValidado); //vemos que sí esté el mensaje completo



// Función auxiliar para inyectar los errores en el HTML
function mostrarError(selector, mensajeError) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.innerHTML = mensajeError || "";
    }
}