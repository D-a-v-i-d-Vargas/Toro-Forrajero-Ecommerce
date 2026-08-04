document.addEventListener('DOMContentLoaded', function () {
	cargarProductos();
});

const itemsController = new ItemsController(0);
const API_URL = 'http://localhost:3000/productos';

async function cargarProductos() {
	try {
		const res = await fetch(API_URL);
		if (!res.ok) throw new Error("Error al obtener Productos");
		const productos = await res.json();

		// Limpiamos los items por si acaso se vuelve a llamar la función
		itemsController.items = [];

		productos.forEach(producto => {
			itemsController.addItem(
				producto.id,
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

		actualizarCatalogoYEventos(itemsController.items);

	} catch (error) {
		console.error("No se pudo cargar el catálogo ):", error);
	}
}

/**
 * * Función auxiliar para actualizar el DOM y reactivar los escuchadores del carrito
 */
function actualizarCatalogoYEventos(items) {
	renderizarHTML(items);

	contadorCarrito();
	productosLocalStorage();
}

function renderizarHTML(items) {
	const catalogo = document.getElementById('catalogo-productos');
	if (!catalogo) return;

	catalogo.innerHTML = items.map(producto => `
        <article class="tarjeta-producto">
            <img src="${producto.imagen}" alt="${producto.nombreProducto}">

            <div class="contenido-producto">
                <h2>${producto.nombreProducto}</h2>
                <p>${producto.descripcion}</p>
                <p>Marca: ${producto.marca}</p>
                <span class="precio">$${producto.precio} MXN</span>

                <div class="d-flex admin-btns">
                    <button 
                        type="button" 
                        class="boton-carrito" 
                        data-producto="${producto.nombreProducto}" 
                        data-precio="${producto.precio}">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

/* ====================================================
   FILTRO POR MARCA
   ==================================================== */
const filtrarMarcas = (marca) => {
	const productosVisibles = itemsController.items.filter(producto => producto.marca === marca);
	actualizarCatalogoYEventos(productosVisibles);
};

const admBtn = document.getElementById('adm');
const nogalBtn = document.getElementById('nogal');
const arandasBtn = document.getElementById('arandas');

if (admBtn) {
	admBtn.addEventListener('click', () => filtrarMarcas('ADM'));
}

if (nogalBtn) {
	nogalBtn.addEventListener('click', () => filtrarMarcas('El Nogal'));
}

if (arandasBtn) {
	arandasBtn.addEventListener('click', () => filtrarMarcas('Alimentos Arandas'));
}

/* ====================================================
   FILTRO POR ESPECIE
   ==================================================== */
const mapaEspecies = { "bovinos": "Vacas", "porcinos": "Cerdos", "aves": "Aves", "ovinos": "Borregos" };
let especieSeleccionada = null;

function aplicarFiltro() {
	if (!especieSeleccionada) {
		actualizarCatalogoYEventos(itemsController.items);
	} else {
		const productoFiltrado = itemsController.items.filter(item => item.especie === especieSeleccionada);
		actualizarCatalogoYEventos(productoFiltrado);
	}
}

const botonesEspecie = document.querySelectorAll(".filtro-especies .especie");

botonesEspecie.forEach(boton => {
	boton.addEventListener("click", () => {
		const especieData = boton.getAttribute("data-especie");
		const especieNombre = mapaEspecies[especieData];

		if (boton.classList.contains("activo")) {
			boton.classList.remove("activo");
			especieSeleccionada = null;
		} else {
			botonesEspecie.forEach(btn => btn.classList.remove("activo"));
			boton.classList.add("activo");
			especieSeleccionada = especieNombre;
		}

		aplicarFiltro();
	});
});

/* ====================================================
   FUNCIONALIDADES DEL CARRITO (PERSISTENCIA Y BADGE)
   ==================================================== */

/**
 * * Gestiona la insignia y el contador visual del carrito en el Navbar.
 * * Mantiene la cifra sincronizada a traves del almacenamiento local (localStorage).
 */
function contadorCarrito() {
	// ! Referencias al DOM necesarias para montar la interfaz
	const btns = document.querySelectorAll('.boton-carrito');
	const divcarrito = document.querySelector('.cart-icon-wrapper');

	// ? Si la pagina actual no tiene el icono del carrito en el Navbar, se interrumpe la ejecucion
	if (!divcarrito) return;

	// * Obtencion o reutilización del elemento contenedor para la cifra del contador
	let carrito = divcarrito.querySelector('.contador-carrito');
	if (!carrito) {
		carrito = document.createElement('P');
		carrito.classList.add('contador-carrito');
	}

	// * Obtencion del estado previo persistido (Default: 0)
	let contador = parseInt(localStorage.getItem('contadorCarrito')) || 0;

	// ? Inicializacion de la vista al cargar el documento si existen items previos
	if (contador > 0) {
		if (contador >= 100) {
			carrito.innerHTML = `<span class="carrito-mas">+</span>99`;
		} else {
			carrito.textContent = contador;
		}
		if (!divcarrito.contains(carrito)) {
			divcarrito.append(carrito);
		}
	}

	// * Escuchador de eventos para los botones de añadir al carrito
	btns.forEach(btn => {
		btn.addEventListener('click', function () {
			// * Incremento del estado en memoria y sincronizacion con localStorage
			contador++;
			localStorage.setItem('contadorCarrito', contador);

			// * Formateo dinamico según la cifra de articulos acumulada
			if (contador >= 100) {
				carrito.innerHTML = `<span class="carrito-mas">+</span>99`;
			} else {
				carrito.textContent = contador;
			}

			// ? Insercion del badge en el DOM unicamente en la primera adicion
			if (!divcarrito.contains(carrito)) {
				divcarrito.append(carrito);
			}
		});
	});
}

/**
 * * Captura el producto seleccionado mediante interaccion con la tarjeta del DOM
 * * y actualiza la coleccion persitiendola en formato JSON en el localStorage.
 */
function productosLocalStorage() {
	const btns = document.querySelectorAll('.boton-carrito');

	// * Lectura inicial e instanciacion del arreglo persistido en storage
	const carritoProductos = JSON.parse(localStorage.getItem('carrito')) || [];

	btns.forEach(btn => {
		btn.addEventListener('click', function () {
			// * Navegacion en el DOM para extraer la clave de busqueda del producto
			const tarjeta = btn.closest('.tarjeta-producto');
			const tituloH2 = tarjeta.querySelector('h2');

			// ! Busqueda en la colección utilizando itemsController.items
			const productoSeleccionado = itemsController.items.find(
				producto => producto.nombreProducto === tituloH2.textContent
			);

			// ? Si se valida la existencia del registro, se procede a guardar
			if (productoSeleccionado) {
				carritoProductos.push(productoSeleccionado);

				// * Serializacion y escritura final en localStorage
				localStorage.setItem('carrito', JSON.stringify(carritoProductos));
			}
		});
	});
}