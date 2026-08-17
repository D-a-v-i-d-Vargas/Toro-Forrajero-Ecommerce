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

        // 1. Limpiamos la lista local
        itemsController.items = [];

        // 2. Filtramos solo los productos cuyo estado sea "activo" (o "Activo")
        const productosActivos = productos.filter(producto => 
            String(producto.estado).toLowerCase() === 'activo'
        );

        // 3. Agregamos al controlador únicamente los productos activos
        productosActivos.forEach(producto => {
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

        // 4. Actualizamos el catálogo con los elementos ya filtrados
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

    actualizarBadgeNavegacion();
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

document.addEventListener("DOMContentLoaded", () => {
	cargarProductos();
	renderizarHTML(itemsController.items);
});

//FILTRANDO POR ESPECIE Y MARCA

let marcaSeleccionada = null;
let especieSeleccionada = null;

const mapaEspecies = {
    "bovinos": "Vacas",
    "porcinos": "Cerdos",
    "aves": "Aves",
    "ovinos": "Borregos"
};

// FILTRO POR ESPECIE Y MARCA
function aplicarFiltros() {
    
    const productosFiltrados = itemsController.items.filter(producto => {
        const cumpleMarca = marcaSeleccionada ? producto.marca === marcaSeleccionada : true;
        const cumpleEspecie = especieSeleccionada ? producto.especie === especieSeleccionada : true;

        return cumpleMarca && cumpleEspecie;
    });
    renderizarHTML(productosFiltrados);
}

// BTN MARCA
const botonesMarca = [
    { id: 'adm', marca: 'ADM' },
    { id: 'nogal', marca: 'El Nogal' },
    { id: 'arandas', marca: 'Alimentos Arandas' }
];

botonesMarca.forEach(({ id, marca }) => {
    const btn = document.getElementById(id);
    if (!btn) return;
	//para marcar o desmarcar un btn
    btn.addEventListener('click', () => {
        if (marcaSeleccionada === marca) {
            marcaSeleccionada = null;
            btn.classList.remove('activo');
        } else {
            // Desmarca otros botones de marca cuando se selecciona uno
            botonesMarca.forEach(b => document.getElementById(b.id)?.classList.remove('activo'));
            marcaSeleccionada = marca;
            btn.classList.add('activo');
        }
        aplicarFiltros();
    });
});

// BTN ESPECIE
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
    renderizarHTML(itemsController.items);

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

            aplicarFiltros();
        });
    });
});



/* ====================================================
    NUEVO MOTOR DEL CARRITO (DELEGACIÓN DE EVENTOS)
   ==================================================== */

// 1. Vigilante global para los clics en cualquier botón de carrito
document.addEventListener('click', function(e) {
    // Si el elemento clickeado tiene la clase 'boton-carrito'
    if (e.target.classList.contains('boton-carrito')) {
        const btn = e.target;
        const nombreExacto = btn.getAttribute('data-producto');
        
        // Buscar el producto en nuestro catálogo
        const productoSeleccionado = itemsController.items.find(
            producto => String(producto.nombreProducto).trim() === String(nombreExacto).trim()
        );

        if (productoSeleccionado) {
            // --- A) GUARDAR EL PRODUCTO EN LOCALSTORAGE ---
            let carritoProductos = [];
            try {
                carritoProductos = JSON.parse(localStorage.getItem('carrito')) || [];
            } catch(error) {
                carritoProductos = []; // Si había un error previo en la memoria, empezamos de cero
            }
            
            carritoProductos.push(productoSeleccionado);
            localStorage.setItem('carrito', JSON.stringify(carritoProductos));

            // --- B) ACTUALIZAR EL NÚMERO DEL CONTADOR ---
            let contador = parseInt(localStorage.getItem('contadorCarrito')) || 0;
            contador++;
            localStorage.setItem('contadorCarrito', contador);

            // --- C) REFLEJAR EL CAMBIO EN LA INTERFAZ ---
            actualizarBadgeNavegacion(contador);
        }
    }
});

// 2. Función dedicada exclusivamente a pintar el número en el Navbar
function actualizarBadgeNavegacion(forzarContador = null) {
    const divcarrito = document.querySelector('.cart-icon-wrapper');
    if (!divcarrito) return; // Si no hay carrito en esta página, no hacemos nada

    let carrito = divcarrito.querySelector('.contador-carrito');
    if (!carrito) {
        carrito = document.createElement('P');
        carrito.classList.add('contador-carrito');
        divcarrito.append(carrito);
    }

    // Tomamos el contador forzado (si venimos de un clic) o leemos la memoria
    let contador = forzarContador !== null ? forzarContador : (parseInt(localStorage.getItem('contadorCarrito')) || 0);

    if (contador > 0) {
        carrito.style.display = 'block';
        if (contador >= 100) {
            carrito.innerHTML = `<span class="carrito-mas">+</span>99`;
        } else {
            carrito.textContent = contador;
        }
    } else {
        carrito.style.display = 'none';
    }
}