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
		marca: "ADM" },
	{ 
		nombreProducto: "Mezcla Ganadera", 
		descripcion: "Alimento balanceado de alta tecnología para la engorda de bovinos. Elaborado con ingredientes de alta calidad.", 
		destacado: false, 
		especie: "Vacas", 
		peso: "20 KG", 
		precio: 279.00, 
		marca: "ADM" },
	{ 
		nombreProducto: "Pollo Especial", 
		descripcion: "Alimento balanceado de alta tecnología para pollitos de engorda. Elaborado con ingredientes de alta calidad.", 
		destacado: false, 
		especie: "Aves", 
		peso: "20 KG", 
		precio: 245.00, 
		marca: "ADM" },
	{ 
		nombreProducto: "Nutridor Pollos", 
		descripcion: "Alimento balanceado de alta tecnología para pollitos de engorda. Elaborado con ingredientes de alta calidad.", 
		destacado: false, 
		especie: "Aves", 
		peso: "20 KG", 
		precio: 245.00, 
		marca: "ADM" },
	{ 
		nombreProducto: "Finalizador® Engorda Cerdos H.L.", 
		descripcion: "Alimento balanceado de alta tecnología para cerdos en finalización de la engorda de 78 a 104 kg.", 
		destacado: true, 
		especie: "Cerdos", 
		peso: "20 KG", 
		precio: 286.00, 
		marca: "ADM" },
	{ 
		nombreProducto: "Growpig!® Desarrollo", 
		descripcion: "Alimento balanceado de alta tecnología para cerdos en engorda de 52 a 76 kg.", 
		destacado: false, 
		especie: "Cerdos", 
		peso: "20 KG", 
		precio: 286.00, 
		marca: "ADM" },
	{ 
		nombreProducto: "Borregos Forte", 
		descripcion: "Alimento balanceado de alta tecnología para ovinos en etapa de engorda y finalización. Elaborado con ingredientes de alta calidad.", 
		destacado: false, 
		especie: "Borregos", 
		peso: "20 KG", 
		precio: 269.00, 
		marca: "ADM" },
	{ 
		nombreProducto: "Borrego Ganador", 
		descripcion: "Alimento balanceado de alta tecnología para ovinos en etapa de crecimiento. Elaborado con ingredientes de alta calidad.", 
		destacado: false, 
		especie: "Borregos", 
		peso: "20 KG", 
		precio: 269.00, 
		marca: "ADM" },
	//Marca El Nogal
	{ 
		nombreProducto: "Engorda Ganado", 
		descripcion: "Alimento balanceado para bovinos de engorda de corral.", 
		destacado: true, 
		especie: "Vacas", 
		peso: "40 KG", 
		precio: 410.00, 
		marca: "El Nogal" },
	{ 
		nombreProducto: "Concentrado para Engorda Ganado", 
		descripcion: "Concentrado alimenticio para ganado bovino de engorda.", 
		destacado: false, 
		especie: "Vacas", 
		peso: "40 KG", 
		precio: 410.00, 
		marca: "El Nogal" },
	{ 
		nombreProducto: "Fortipollo (iniciador)", 
		descripcion: "Alimento completo para pollos de engorda ofrezca desde el nacimiento hasta el final de la tercer semana (del dí­a 1 hasta el dí­a 21 de edad).", 
		destacado: false, 
		especie: "Aves", 
		peso: "40 KG", 
		precio: 438.00, 
		marca: "El Nogal" },
	{ 
		nombreProducto: "Maxipollo (engorda)", 
		descripcion: "Alimento completo para pollos de engorda que se ofrece desde el inicio de la cuarta semana y hasta el final de la sexta semana (del dí­a 22 al hasta el dí­a 42 de edad).", 
		destacado: false, 
		especie: "Aves", 
		peso: "40 KG", 
		precio: 245.00, 
		marca: "El Nogal" },
	{ 
		nombreProducto: "Engorda", 
		descripcion: "Alimento completo para cerdos en finalización.", 
		destacado: true, 
		especie: "Cerdos", 
		peso: "40 KG", 
		precio: 369.00, 
		marca: "El Nogal" },
	{ 
		nombreProducto: "Crecimiento", 
		descripcion: "Alimento completo para cerdos de 30 a 60 kg de peso vivo.", 
		destacado: false, 
		especie: "Cerdos", 
		peso: "40 KG", 
		precio: 644.00, 
		marca: "El Nogal" },
	{ 
		nombreProducto: "Preiniciador Borrego", 
		descripcion: "Alimento balanceado para ofrecer a borregos desde una semana de edad y hasta el destete.", 
		destacado: false, 
		especie: "Borregos", 
		peso: "40 KG", 
		precio: 525.00, 
		marca: "El Nogal" },
	{ 
		nombreProducto: "Borrego Engorda", 
		descripcion: "Alimento integral para ofrecer a libre acceso a borregos en engorda intensiva.", 
		destacado: false, 
		especie: "Borregos", 
		peso: "40 KG", 
		precio: 525.00, 
		marca: "El Nogal" },
	//Marca: Alimentos Arandas
		{ 
		nombreProducto: "Ara H Engorda Ganado 12% Rol", 
		descripcion: "Alimento Balanceado, multiparticula, mezcla de harina y maíz rolado para bovinos de engorda.", 
		destacado: true, 
		especie: "Vacas", 
		peso: "25 KG", 
		precio: 750.00, 
		marca: "Alimentos Arandas" },
	{ 
		nombreProducto: "Ara H Engorda Ganado 14% Rol", 
		descripcion: "Alimento Balanceado, multiparticula, mezcla de harina y maíz rolado para bovinos de engorda.", 
		destacado: false, 
		especie: "Vacas", 
		peso: "25 KG", 
		precio: 750.00, 
		marca: "Alimentos Arandas" },
	{ 
		nombreProducto: "Ara M Inipollo", 
		descripcion: "Alimento Balanceado presentación en migaja para pollitos de engorda desde el nacimiento hasta los 21 días de edad.", 
		destacado: false, 
		especie: "Aves", 
		peso: "25 KG", 
		precio: 770.00, 
		marca: "Alimentos Arandas" },
	{ 
		nombreProducto: "Ara M Finpollo", 
		descripcion: "Alimento Balanceado presentación en migaja para pollos de engorda desde los 21 días de edad al mercado.", 
		destacado: true, 
		especie: "Aves", 
		peso: "25 KG", 
		precio: 770.00, 
		marca: "Alimentos Arandas" },
	{ 
		nombreProducto: "Ara H Crecicerdos", 
		descripcion: "Alimento Balanceado, presentación en harina para Cerdos de 31 kg  a 60 kg.", 
		destacado: false, 
		especie: "Cerdos", 
		peso: "25 KG", 
		precio: 750.00, 
		marca: "Alimentos Arandas" },
	{ 
		nombreProducto: "Ara P Fincerdos", 
		descripcion: "Alimento Balanceado, presentación en pellet para Cerdos de 61 kg al mercado.", 
		destacado: false, 
		especie: "Cerdos", 
		peso: "25 KG", 
		precio: 750.00, 
		marca: "El Nogal" },
	{ 
		nombreProducto: "Ara P Borrego Engorda", 
		descripcion: "Alimento en pellet para Borregos de engorda de producciones intensivas.", 
		destacado: false, 
		especie: "Borregos", 
		peso: "25 KG", 
		precio: 750.00, 
		marca: "El Nogal" },
	{ 
		nombreProducto: "Ara H Borrego Engorda Rol Plus", 
		descripcion: "Alimento multipartícula, mezcla de harina y maíz rolado para borregos de engorda de producciones intensivas.", 
		destacado: false, 
		especie: "Borregos", 
		peso: "25 KG", 
		precio: 750.00, 
		marca: "El Nogal" },
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