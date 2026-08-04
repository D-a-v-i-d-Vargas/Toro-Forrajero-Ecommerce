// Clase Item Controller
class ItemsController {
	constructor(currentId = 0) {
		this.items = [];
		this.currentId = currentId;
	}

	// Metodo para añadir elementos a el objeto
	addItem(nombreProducto, descripcion, destacado, especie, peso, precio, marca, imagen, estado) {
		const item = {
			id: this.currentId++,
			nombreProducto: nombreProducto,
			descripcion: descripcion,
			destacado: destacado,
			especie: especie,
			peso: peso,
			precio: precio,
			marca: marca,
			imagen: imagen,
			estado: estado
		};

		// Ingresa el objeto a la lista
		this.items.push(item);
	}
}

