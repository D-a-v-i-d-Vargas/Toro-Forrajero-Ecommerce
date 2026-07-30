const itemsController = new ItemsController(0);

const baseDatosProductos = [
	//Marca ADM
	{
		nombreProducto: "Mezcla Nutridor",
		descripcion: "Alimento balanceado de alta tecnología para vacas altas productoras. Elaborado con ingredientes de alta calidad.",
		destacado: true,
		especie: "Vacas",
		peso: "20 KG",
		precio: 279.00,
		marca: "ADM"
	},
	{
		nombreProducto: "Mezcla Ganadera",
		descripcion: "Alimento balanceado de alta tecnología para la engorda de bovinos. Elaborado con ingredientes de alta calidad.",
		destacado: false,
		especie: "Vacas",
		peso: "20 KG",
		precio: 279.00,
		marca: "ADM"
	},
	{
		nombreProducto: "Pollo Especial",
		descripcion: "Alimento balanceado de alta tecnología para pollitos de engorda. Elaborado con ingredientes de alta calidad.",
		destacado: false,
		especie: "Aves",
		peso: "20 KG",
		precio: 245.00,
		marca: "ADM"
	},
	{
		nombreProducto: "Nutridor Pollos",
		descripcion: "Alimento balanceado de alta tecnología para pollitos de engorda. Elaborado con ingredientes de alta calidad.",
		destacado: false,
		especie: "Aves",
		peso: "20 KG",
		precio: 245.00,
		marca: "ADM"
	},
	{
		nombreProducto: "Finalizador® Engorda Cerdos H.L.",
		descripcion: "Alimento balanceado de alta tecnología para cerdos en finalización de la engorda de 78 a 104 kg.",
		destacado: true,
		especie: "Cerdos",
		peso: "20 KG",
		precio: 286.00,
		marca: "ADM"
	},
	{
		nombreProducto: "Growpig!® Desarrollo",
		descripcion: "Alimento balanceado de alta tecnología para cerdos en engorda de 52 a 76 kg.",
		destacado: false,
		especie: "Cerdos",
		peso: "20 KG",
		precio: 286.00,
		marca: "ADM"
	},
	{
		nombreProducto: "Borregos Forte",
		descripcion: "Alimento balanceado de alta tecnología para ovinos en etapa de engorda y finalización. Elaborado con ingredientes de alta calidad.",
		destacado: false,
		especie: "Borregos",
		peso: "20 KG",
		precio: 269.00,
		marca: "ADM"
	},
	{
		nombreProducto: "Borrego Ganador",
		descripcion: "Alimento balanceado de alta tecnología para ovinos en etapa de crecimiento. Elaborado con ingredientes de alta calidad.",
		destacado: false,
		especie: "Borregos",
		peso: "20 KG",
		precio: 269.00,
		marca: "ADM"
	},
	//Marca El Nogal
	{
		nombreProducto: "Engorda Ganado",
		descripcion: "Alimento balanceado para bovinos de engorda de corral.",
		destacado: true,
		especie: "Vacas",
		peso: "40 KG",
		precio: 410.00,
		marca: "El Nogal"
	},
	{
		nombreProducto: "Concentrado para Engorda Ganado",
		descripcion: "Concentrado alimenticio para ganado bovino de engorda.",
		destacado: false,
		especie: "Vacas",
		peso: "40 KG",
		precio: 410.00,
		marca: "El Nogal"
	},
	{
		nombreProducto: "Fortipollo (iniciador)",
		descripcion: "Alimento completo para pollos de engorda ofrezca desde el nacimiento hasta el final de la tercer semana (del dí­a 1 hasta el dí­a 21 de edad).",
		destacado: false,
		especie: "Aves",
		peso: "40 KG",
		precio: 438.00,
		marca: "El Nogal"
	},
	{
		nombreProducto: "Maxipollo (engorda)",
		descripcion: "Alimento completo para pollos de engorda que se ofrece desde el inicio de la cuarta semana y hasta el final de la sexta semana (del dí­a 22 al hasta el dí­a 42 de edad).",
		destacado: false,
		especie: "Aves",
		peso: "40 KG",
		precio: 245.00,
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/aves/aves-nogal-maxipolla.png",
		estado: "activo"
	},
	{
		nombreProducto: "Engorda",
		descripcion: "Alimento completo para cerdos en finalización.",
		destacado: true,
		especie: "Cerdos",
		peso: "40 KG",
		precio: 369.00,
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/porcino/porcino-nogal-engorda.png",
		estado: "activo"
	},
	{
		nombreProducto: "Crecimiento",
		descripcion: "Alimento completo para cerdos de 30 a 60 kg de peso vivo.",
		destacado: false,
		especie: "Cerdos",
		peso: "40 KG",
		precio: 644.00,
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/porcino/porcino-nogal-crecimiento.png",
		estado: "activo"
	},
	{
		nombreProducto: "Preiniciador Borrego",
		descripcion: "Alimento balanceado para ofrecer a borregos desde una semana de edad y hasta el destete.",
		destacado: false,
		especie: "Borregos",
		peso: "40 KG",
		precio: 525.00,
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/porcino/porcino-nogal-engorda.png",
		estado: "activo"
	},
	{
		nombreProducto: "Borrego Engorda",
		descripcion: "Alimento integral para ofrecer a libre acceso a borregos en engorda intensiva.",
		destacado: false,
		especie: "Borregos",
		peso: "40 KG",
		precio: 525.00,
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/ovino/ovino-borrego-engorda.png",
		estado: "activo"
	},
	//Marca: Alimentos Arandas
	{
		nombreProducto: "Ara H Engorda Ganado 12% Rol",
		descripcion: "Alimento Balanceado, multiparticula, mezcla de harina y maíz rolado para bovinos de engorda.",
		destacado: true,
		especie: "Vacas",
		peso: "25 KG",
		precio: 750.00,
		marca: "Alimentos Arandas",
		imagen: "recursos-graficos/productos/bovino/bovino-aranda-engorda.png",
		estado: "activo"
	},
	{
		nombreProducto: "Ara H Engorda Ganado 14% Rol",
		descripcion: "Alimento Balanceado, multiparticula, mezcla de harina y maíz rolado para bovinos de engorda.",
		destacado: false,
		especie: "Vacas",
		peso: "25 KG",
		precio: 750.00,
		marca: "Alimentos Arandas",
		imagen: "recursos-graficos/productos/bovino/bovino-aranda-engorda.png",
		estado: "activo"
	},
	{
		nombreProducto: "Ara M Inipollo",
		descripcion: "Alimento Balanceado presentación en migaja para pollitos de engorda desde el nacimiento hasta los 21 días de edad.",
		destacado: false,
		especie: "Aves",
		peso: "25 KG",
		precio: 770.00,
		marca: "Alimentos Arandas",
		imagen: "recursos-graficos/productos/aves/aves-aranda-inipollo.png",
		estado: "activo"
	},
	{
		nombreProducto: "Ara Sostenedor",
		descripcion: "Alimento Balanceado presentación en migaja para pollos de engorda desde los 21 días de edad al mercado.",
		destacado: true,
		especie: "Aves",
		peso: "25 KG",
		precio: 770.00,
		marca: "Alimentos Arandas",
		imagen: "recursos-graficos/productos/aves/aves-aranda-sostenedor.png",
		estado: "activo"
	},
	{
		nombreProducto: "Ara H Crecicerdos",
		descripcion: "Alimento Balanceado, presentación en harina para Cerdos de 31 kg  a 60 kg.",
		destacado: false,
		especie: "Cerdos",
		peso: "25 KG",
		precio: 750.00,
		marca: "Alimentos Arandas",
		imagen: "recursos-graficos/productos/porcino/porcino-aranda-crecicerdo.png",
		estado: "activo"
	},
	{
		nombreProducto: "Ara P Fincerdos",
		descripcion: "Alimento Balanceado, presentación en pellet para Cerdos de 61 kg al mercado.",
		destacado: false,
		especie: "Cerdos",
		peso: "25 KG",
		precio: 750.00,
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/porcino/porcino-nogal-crecimiento.png",
		estado: "activo"
	},
	{
		nombreProducto: "Ara P Borrego Engorda",
		descripcion: "Alimento en pellet para Borregos de engorda de producciones intensivas.",
		destacado: false,
		especie: "Borregos",
		peso: "25 KG",
		precio: 750.00,
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/ovino/ovino-nogal-preiniciador.png",
		estado: "activo"
	},
	{
		nombreProducto: "Ara H Borrego Engorda Rol Plus",
		descripcion: "Alimento multipartícula, mezcla de harina y maíz rolado para borregos de engorda de producciones intensivas.",
		destacado: false,
		especie: "Borregos",
		peso: "25 KG",
		precio: 750.00,
		marca: "El Nogal",
		imagen: "recursos-graficos/productos/ovino/ovino-nogal-engorda.png",
		estado: "activo"
	},
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