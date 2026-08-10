document.addEventListener('DOMContentLoaded', () => {
	// Obtener los elementos del DOM
	const inputImagen = document.getElementById('imagen-principal');
	const btnPreview = document.getElementById('btn-preview');
	const btnCerrarModal = document.getElementById('btn-cerrar-modal');
	const imgPreviewTarget = document.getElementById('img-preview-target');
	const nombreArchivo = document.getElementById('nombre-archivo');
	const btnEliminar = document.getElementById('btn-eliminar');

	// Elemento HTML del modal
	const modalElement = document.getElementById('modalImagen');

	// Crear la instancia del modal con la API JS de Bootstrap
	const myModal = new bootstrap.Modal(modalElement, {
		keyboard: true,
		backdrop: true
	});

	// EVENTO CLIC EN EL OJO: Abrir el modal desde JS
	btnPreview?.addEventListener('click', () => {
		// Muestra el modal mediante JavaScript
		myModal.show();
	});

	// EVENTO CLIC EN CERRAR: Cerrar el modal desde JS
	btnCerrarModal?.addEventListener('click', () => {
		myModal.hide();
	});

	// Al seleccionar una nueva imagen desde el input file
	inputImagen?.addEventListener('change', (e) => {
		const file = e.target.files[0];
		if (file) {
			nombreArchivo.textContent = file.name;
			const objectURL = URL.createObjectURL(file);
			imgPreviewTarget.src = objectURL;
		}
	});

	// Limpiar imagen
	btnEliminar?.addEventListener('click', () => {
		if (inputImagen) inputImagen.value = '';
		nombreArchivo.textContent = 'Sin archivo seleccionado';
		imgPreviewTarget.src = 'recursos-graficos/productos/default/default.png';
	});
});