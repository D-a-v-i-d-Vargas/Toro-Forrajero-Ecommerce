const itemsController = new ItemsController(0);

const baseDatosProductos = [
	{
		nombreProducto: "V-ital Ganado",
		descripcion: "Alimento balanceado para ganado de carne.",
		destacado: "falso",
		especie: "Bovinos",
		peso: "40 kg",
		precio: "225.00",
		marca: "ADM",
		imagen: "recursos-graficos/productos/aves/aves-adm-pollo-especial.png",
		estado: "activo"
	},
	{
		nombreProducto: "V-ital Cerdos Crecimiento",
		descripcion: "Alimento balanceado para cerdos en etapa de crecimiento.",
		destacado: "falso",
		especie: "Porcinos",
		peso: "40 kg",
		precio: "365.00",
		marca: "ADM Nutrición Animal",
		imagen: "recursos-graficos/productos/bovino/bovino-adm-mezcla-nutridor.png",
		estado: "activo"
	},
	{
		nombreProducto: "El Nogal Borregos 2",
		descripcion: "Alimento balanceado para borregos primeros pasos.",
		destacado: "falso",
		especie: "Ovinos",
		peso: "40 kg",
		precio: "295.00",
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/porcino/porcino-nogal-engorda.png",
		estado: "activo"
	},
	{
		nombreProducto: "El Nogal Borregos 3",
		descripcion: "Alimento balanceado para borregos primeros pasos.",
		destacado: "falso",
		especie: "Ovinos",
		peso: "40 kg",
		precio: "295.00",
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/porcino/porcino-adm-growpig.png",
		estado: "activo"
	},
	{
		nombreProducto: "El Nogal Borregos 3",
		descripcion: "Alimento balanceado para borregos primeros pasos.",
		destacado: "falso",
		especie: "Ovinos",
		peso: "40 kg",
		precio: "295.00",
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/bovino/bovino-aranda-engorda.png",
		estado: "activo"
	}
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
			producto.marca,
			producto.imagen,
			producto.estado
		);
	});
}



function renderizarHTML(items) {
	const catalogo = document.getElementById('catalogo-productos');
	if (!catalogo) return;

	// Inyectamos exactamente la maquetación en HTML que creó tu compañero
	catalogo.innerHTML = items.map(producto => `
        <article class="tarjeta-producto">
            <img src="${producto.imagen}" alt="${producto.nombreProducto}">

            <div class="contenido-producto">
                <h2>${producto.nombreProducto}</h2>
                <p>${producto.descripcion}</p>
                <span class="precio">$${producto.precio} MXN</span>

                <button 
                    type="button" 
                    class="boton-carrito" 
                    data-producto="${producto.nombreProducto}" 
                    data-precio="${producto.precio}">
                    Agregar al carrito
                </button>
            </div>
        </article>
    `).join('');
}


document.addEventListener("DOMContentLoaded", () => {
	cargarItems();
	renderizarHTML(itemsController.items);
});