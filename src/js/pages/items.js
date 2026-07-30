const itemsController = new ItemsController(0);

const baseDatosProductos = [
	{ nombreProducto: "test", descripcion: "descripcion", destacado: "destacado", especie: "especie", peso: "peso", precio: "100", marca: "marca" },
	{ nombreProducto: "test2", descripcion: "descripcion2", destacado: "destacado2", especie: "especie2", peso: "peso2", precio: "200", marca: "marca2" },
	{ nombreProducto: "test3", descripcion: "descripcion3", destacado: "destacado3", especie: "especie3", peso: "peso3", precio: "300", marca: "marca3" }

];

function cargarItems() {
	baseDatosProductos.forEach(producto => {
		itemsController.addItem(
			producto.nombreProducto,
			producto.descripcion,
			producto.destacado,
			producto.especie,
			producto.peso,
			producto.precio,
			producto.marca
		);
	});
}

function renderizarHTML(items) {
	const catalogo = document.getElementById('catalogo-productos');
	if (!catalogo) return;

	catalogo.innerHTML = items.map(producto => `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${producto.nombreProducto}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="text-muted"><small>${producto.especie} - ${producto.marca}</small></p>
            <p><strong>Peso:</strong> ${producto.peso}</p>
            <p class="fw-bold text-success">$${producto.precio}</p>
          </div>
        </div>
      </div>
    `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
	cargarItems();
	renderizarHTML(itemsController.items);
});