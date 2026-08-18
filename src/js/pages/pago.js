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

