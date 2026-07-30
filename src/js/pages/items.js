const catalogo = document.getElementById('catalogo-productos');
const itemsController = new ItemsController(0);


const baseDatosProductos = [
	{ nombreProducto: "test", descripcion: "descripcion", destacado: "destacado", especie: "especie", peso: "peso", precio: "precio", marca: "marca" },
	{ nombreProducto: "test2", descripcion: "descripcion2", destacado: "destacado2", especie: "especie2", peso: "peso2", precio: "precio2", marca: "marca2" }
];

function cargarItems() {
	baseDatosProductos.forEach(producto => { itemsController.addItem(producto.nombreProducto, producto.descripcion, producto.destacado, producto.especie, producto.peso, producto.marca) });
}


catalogo.innerHTML = baseDatosProductos.map(producto => `
  <!-- Cada iteración SOLO crea un col-* -->
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card h-100">
      <div class="card-body">
        <h5>${producto.nombreProducto}</h5>
        <p>$${producto.descripcion}</p>
		<p>$${producto.destacado}</p>
		<p>$${producto.especie}</p>
		<p>$${producto.peso}</p>
		<p>$${producto.marca}</p>
      </div>
    </div>
  </div>
`).join('');

document.addEventListener("DOMContentLoaded", () => {
	cargarItems();
	addItemCard(itemsController.items);
});
