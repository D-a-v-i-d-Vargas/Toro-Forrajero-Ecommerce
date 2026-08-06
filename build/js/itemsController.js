// Clase Item Controller
class ItemsController {
	constructor(currentId = 0) {
		this.items = [];
	}

	// Método corregido con el orden exacto del llamado:
	addItem(id, nombreProducto, descripcion, destacado, especie, costo, precio, marca, imagen, estado, existencia) {
		const item = {
			id: id,
			nombreProducto: nombreProducto,
			descripcion: descripcion,
			destacado: destacado,
			especie: especie,
			costo: costo,
			precio: precio,
			marca: marca,
			imagen: imagen,
			estado: estado,
			existencia: existencia
		};

		this.items.push(item);
	}

}