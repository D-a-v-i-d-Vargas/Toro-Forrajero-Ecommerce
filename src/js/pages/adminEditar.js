// build/js/adminEditar.js
const itemsController = new ItemsController(0);

// Se ejecuta automáticamente al cargar adminEditar.html
document.addEventListener('DOMContentLoaded', () => {
    const id = localStorage.getItem('idProductoEditar');
    if (id) {
        cargarProducto(id);
    }
});

export async function cargarProducto(id) {
    if (!id) return;

    const URL = `http://localhost:3000/productos/${id}`;

    try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Error en la respuesta del servidor");

        const producto = await res.json();

        // Limpiamos y agregamos al controller
        itemsController.items = [];
        itemsController.addItem(
            producto.id,
            producto.nombreProducto,
            producto.descripcion,
            producto.destacado,
            producto.especie,
            producto.costo,
            producto.precio,
            producto.marca,
            producto.imagen,
            producto.estado,
            producto.existencia
        );

        

    } catch (error) {
        console.error("Error al cargar producto:", error);
    }
}