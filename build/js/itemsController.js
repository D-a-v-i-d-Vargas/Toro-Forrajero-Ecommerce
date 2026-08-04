// Clase Item Controller
class ItemsController {
	constructor(currentId = 0) {
		this.items = [];
	}

	// Metodo para añadir elementos a el objeto
	addItem(id, nombreProducto, descripcion, destacado, especie, peso, precio, marca, imagen, estado) {
		const item = {
			id: id,
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




