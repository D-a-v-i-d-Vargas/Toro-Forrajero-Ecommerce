let mensajeValidado = {
	mNombre: "",
	mApellido: "",
	mTelefono: "",
	mAreaInteres: "",
	mCorreo: "",
	mEstado: "",
	mContrasena: "",
	mConfirmarContrasena: ""
};

function reiniciarMensajeValidado() {
	for (let key in mensajeValidado) {
		mensajeValidado[key] = "";
	}
}

// Función auxiliar para inyectar los errores en el HTML
function mostrarError(selector, mensajeError) {
	const elemento = document.querySelector(selector);
	if (elemento) {
		elemento.innerHTML = mensajeError || "";
	}
}

//Función que revisa el campo de teléfono
function validarTelefono(inputTelefono) {
	if (!inputTelefono) return "Campo teléfono no encontrado";
	const telefono = inputTelefono.value.replace(/[\s-]/g, "");
	const alertMensaje = `<span class="alerta-titulo">Teléfono No válido:</span>`;

	if (telefono === "") {
		console.log("Campo vacío de teléfono")
		return `${alertMensaje} Debes llenar el campo`;
	}
	if (!/^\d{10}$/.test(telefono)) {
		console.log("El número no tiene 10 dígitos");
		return `${alertMensaje} El teléfono debe tener exactamente 10 dígitos`;
	}

	return undefined;
}

//Función que revisa que se haya seleccionado el área de interés
function validarMotivo(selectMotivo) {
	if (!selectMotivo) {
		console.log("No se encontró el selector de motivo");
		return "No se encontró el selector de motivo.";
	}
	if (selectMotivo.value === "") {
		console.log("No se seleccionó el motivo");
		return `<span class="alerta-titulo">Motivo de contacto:</span> Debes seleccionar un motivo.`;
	}
	return undefined;
}


