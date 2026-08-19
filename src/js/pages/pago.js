// APARTADO DE FINALIZAR COMPRA 


// Espera a que el HTML termine de cargar
document.addEventListener('DOMContentLoaded', mostrarResumenPedido);

// Muestra los productos y el total del carrito
function mostrarResumenPedido() {

    // Obtiene los productos guardados en localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Contenedor donde se mostrarán los productos
    const detallePedido = document.getElementById('detalle-pedido');

    // Elemento donde se mostrará el total
    const totalPedido = document.getElementById('total-pedido');

    // Verifica que existan los elementos en el HTML
    if (!detallePedido || !totalPedido) return;

    // Limpia el contenedor antes de agregar contenido
    detallePedido.innerHTML = '';

    // Variable para acumular el total
    let total = 0;

    // Si el carrito está vacío
    if (carrito.length === 0) {
        detallePedido.innerHTML = `
            <p class="mb-0 small">
                No hay productos en el carrito.
            </p>
        `;

        totalPedido.textContent = '$0.00 MXN';
        return;
    }

    // Recorre todos los productos del carrito
    carrito.forEach(producto => {

        // Suma el precio al total
        total += producto.precio;

        // Agrega el producto al resumen
        detallePedido.innerHTML += `
            <div class="d-flex justify-content-between mb-2">
                <span>${producto.nombreProducto}</span>
                <span>$${producto.precio}.00</span>
            </div>
        `;
    });

    // Muestra el total final
    totalPedido.textContent =
        `$${total.toLocaleString('es-MX')}.00 MXN`;
}







// ==========================================
// boton de estado 
// ==========================================

	document.addEventListener('DOMContentLoaded', () => {

    // Sincronizar campo "Ciudad" con el Estado seleccionado
    const selectEstado = document.getElementById('estado');
    const inputCiudad = document.getElementById('ciudad');

    if (selectEstado && inputCiudad) {
        selectEstado.addEventListener('change', () => {
            const textoSeleccionado = selectEstado.options[selectEstado.selectedIndex].text;
            inputCiudad.value = textoSeleccionado;
        });
    }

    // : Envío a domicilio / Retiro en tienda
    const bloqueDireccion = document.getElementById('bloque-direccion');
    const bloqueRetiroTienda = document.getElementById('bloque-retiro-tienda');

    document.querySelectorAll('.delivery-method-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.delivery-method-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.dataset.metodo === 'tienda') {
                bloqueDireccion.style.display = 'none';
                bloqueRetiroTienda.style.display = 'block';
            } else {
                bloqueDireccion.style.display = 'block';
                bloqueRetiroTienda.style.display = 'none';
            }
        });
    });

});




/////////////////////////////////////////////////
// ///////////////////validaciones Dirección (Checkout)
// ==========================================
// VALIDACIONES FORMULARIO DE DIRECCIÓN
// (Mismo estilo/patrón que contactanos.js)
// ==========================================

// Regresa el método de entrega actualmente seleccionado ("domicilio" o "tienda")
function obtenerMetodoEntrega() {
    const btnActivo = document.querySelector(".delivery-method-btn.active");
    return btnActivo ? btnActivo.dataset.metodo : "domicilio";
}

// Estado
function validarEstado(selectEstado) {
    if (!selectEstado) return "No se encontró el campo estado.";
    if (selectEstado.value === "") return `<span class="alerta-titulo">Estado:</span> Debes seleccionar un estado.`;
    return undefined;
}

// Ciudad (se usa para el campo "ciudad" y también para "ciudad-2")
function validarCiudadCheckout(inputCiudad, etiqueta = "Ciudad") {
    if (!inputCiudad) return `No se encontró el campo ${etiqueta.toLowerCase()}.`;
    const ciudad = inputCiudad.value.trim();
    if (ciudad === "") return `<span class="alerta-titulo">${etiqueta}:</span> Debes llenar el campo.`;
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(ciudad)) return `<span class="alerta-titulo">${etiqueta}:</span> Solo puede contener letras.`;
    return undefined;
}

// Dirección
function validarDireccion(inputDireccion) {
    if (!inputDireccion) return "No se encontró el campo dirección.";
    const direccion = inputDireccion.value.trim();
    if (direccion === "") return `<span class="alerta-titulo">Dirección:</span> Debes llenar el campo.`;
    if (direccion.length < 5) return `<span class="alerta-titulo">Dirección:</span> Escribe una dirección más completa.`;
    return undefined;
}

// No. Exterior (obligatorio)
function validarNumeroExterior(inputNumExt) {
    if (!inputNumExt) return "No se encontró el campo No. Exterior.";
    const numero = inputNumExt.value.trim();
    if (numero === "") return `<span class="alerta-titulo">No. Exterior:</span> Debes llenar el campo.`;
    if (!/^[a-zA-Z0-9]+$/.test(numero)) return `<span class="alerta-titulo">No. Exterior:</span> Solo se permiten letras y números.`;
    return undefined;
}

// No. Interior (opcional: solo se valida el formato si el usuario escribió algo)
function validarNumeroInterior(inputNumInt) {
    if (!inputNumInt) return undefined;
    const numero = inputNumInt.value.trim();
    if (numero !== "" && !/^[a-zA-Z0-9]+$/.test(numero)) {
        return `<span class="alerta-titulo">No. Interior:</span> Solo se permiten letras y números.`;
    }
    return undefined;
}

// Código Postal
function validarCodigoPostal(inputCP) {
    if (!inputCP) return "No se encontró el campo Código Postal.";
    const cp = inputCP.value.trim();
    if (cp === "") return `<span class="alerta-titulo">Código Postal:</span> Debes llenar el campo.`;
    if (!/^\d{5}$/.test(cp)) return `<span class="alerta-titulo">Código Postal:</span> Debe tener exactamente 5 dígitos.`;
    return undefined;
}

// Teléfono
function validarTelefonoCheckout(inputTelefono) {
    if (!inputTelefono) return "No se encontró el campo teléfono.";
    const telefono = inputTelefono.value.replace(/[\s-]/g, "");
    if (telefono === "") return `<span class="alerta-titulo">Teléfono No válido:</span> Debes llenar el campo.`;
    if (!/^\d{10}$/.test(telefono)) return `<span class="alerta-titulo">Teléfono No válido:</span> El teléfono debe tener exactamente 10 dígitos.`;
    return undefined;
}

// Correo electrónico
function validarCorreoCheckout(inputCorreo) {
    if (!inputCorreo) return "No se encontró el campo correo.";
    const correo = inputCorreo.value.trim();
    if (correo === "") return `<span class="alerta-titulo">Correo Electrónico No válido:</span> Debes llenar el campo.`;
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexCorreo.test(correo)) return `<span class="alerta-titulo">Correo Electrónico No válido:</span> El formato del correo es incorrecto.`;
    return undefined;
}

// Inyecta (o limpia) el mensaje de error en el <p> correspondiente
function mostrarErrorCheckout(selector, mensajeError) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.innerHTML = mensajeError || "";
    }
}

const formularioCheckout = document.getElementById("formulario-checkout");

if (formularioCheckout) {
    formularioCheckout.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que se recargue la página al dar "Continuar"

        // Referencias a los campos
        const inputEstado = document.getElementById("estado");
        const inputCiudad = document.getElementById("ciudad");
        const inputDireccion = document.getElementById("direccion");
        const inputNumExt = document.getElementById("numero-exterior");
        const inputNumInt = document.getElementById("numero-interior");
        const inputCP = document.getElementById("codigo-postal");
        const inputCiudad2 = document.getElementById("ciudad-2");
        const inputTelefono = document.getElementById("telefono");
        const inputCorreo = document.getElementById("correo");

        const selectoresError = [
            "#error-estado p", "#error-ciudad p", "#error-direccion p",
            "#error-numero-exterior p", "#error-numero-interior p",
            "#error-codigo-postal p", "#error-ciudad-2 p",
            "#error-telefono p", "#error-correo p"
        ];

        const metodoEntrega = obtenerMetodoEntrega();

        // Si el usuario eligió "Retiro en tienda" no se valida la dirección
        if (metodoEntrega === "tienda") {
            selectoresError.forEach(sel => mostrarErrorCheckout(sel, ""));
            console.log("Retiro en tienda: se omite la validación de dirección. Continuando...");
            // Aquí puedes avanzar al siguiente paso del checkout
            return;
        }

        // Ejecutar validaciones (envío a domicilio)
        const errorEstado = validarEstado(inputEstado);
        const errorCiudad = validarCiudadCheckout(inputCiudad, "Ciudad");
        const errorDireccion = validarDireccion(inputDireccion);
        const errorNumExt = validarNumeroExterior(inputNumExt);
        const errorNumInt = validarNumeroInterior(inputNumInt);
        const errorCP = validarCodigoPostal(inputCP);
        const errorCiudad2 = validarCiudadCheckout(inputCiudad2, "Ciudad");
        const errorTelefono = validarTelefonoCheckout(inputTelefono);
        const errorCorreo = validarCorreoCheckout(inputCorreo);

        // Mostrar (o limpiar) los errores en el DOM
        mostrarErrorCheckout("#error-estado p", errorEstado);
        mostrarErrorCheckout("#error-ciudad p", errorCiudad);
        mostrarErrorCheckout("#error-direccion p", errorDireccion);
        mostrarErrorCheckout("#error-numero-exterior p", errorNumExt);
        mostrarErrorCheckout("#error-numero-interior p", errorNumInt);
        mostrarErrorCheckout("#error-codigo-postal p", errorCP);
        mostrarErrorCheckout("#error-ciudad-2 p", errorCiudad2);
        mostrarErrorCheckout("#error-telefono p", errorTelefono);
        mostrarErrorCheckout("#error-correo p", errorCorreo);

        const hayErrores = errorEstado || errorCiudad || errorDireccion || errorNumExt ||
            errorNumInt || errorCP || errorCiudad2 || errorTelefono || errorCorreo;

        if (hayErrores) {
            console.warn("Envío bloqueado: revisa los campos de dirección resaltados.");
            return;
        }

        console.log("Dirección validada correctamente. Continuando al pago...");
        // Aquí continúa la lógica del checkout (ej. avanzar a la sección de pago)
    });
}

/////////////////////////////////////////////////
// ////////////////////////validaciones Tarjeta
// ==========================================
// VALIDACIONES TARJETA
// ==========================================

const formulario = document.getElementById("formularioPago");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    // Limpiar mensajes
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorTarjeta").textContent = "";
    document.getElementById("errorFecha").textContent = "";
    document.getElementById("errorCvv").textContent = "";

    let valido = true;

    // Obtener valores
    const nombre = document.getElementById("nombreTitular").value.trim();

    const tarjeta = document
        .getElementById("numeroTarjeta")
        .value
        .replace(/\s/g, "");

    const mes = document.getElementById("mesExpiracion").value;
    const anio = document.getElementById("anioExpiracion").value;

    const cvv = document.getElementById("cvv").value.trim();


    // ==========================================
    // VALIDAR NOMBRE
    // ==========================================

    if (nombre === "") {

        document.getElementById("errorNombre").textContent =
            "El nombre del titular es obligatorio.";

        valido = false;

    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {

        document.getElementById("errorNombre").textContent =
            "Introduce un nombre válido.";

        valido = false;
    }


    // ==========================================
    // VALIDAR TARJETA
    // ==========================================

    if (!/^\d{16}$/.test(tarjeta)) {

        document.getElementById("errorTarjeta").textContent =
            "La tarjeta debe tener 16 dígitos.";

        valido = false;
    }


    // ==========================================
    // VALIDAR FECHA DE EXPIRACIÓN
    // ==========================================

    if (mes === "" || anio === "") {

        document.getElementById("errorFecha").textContent =
            "Selecciona el mes y año de expiración.";

        valido = false;
    }


    // ==========================================
    // VALIDAR CVV
    // ==========================================

    if (!/^\d{3}$/.test(cvv)) {

        document.getElementById("errorCvv").textContent =
            "El CVV debe tener 3 dígitos.";

        valido = false;
    }


    // ==========================================
    // RESULTADO
    // ==========================================

    if (valido) {

        alert("Pago realizado correctamente");

    }

});