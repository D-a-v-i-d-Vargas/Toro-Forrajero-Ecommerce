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

        itemsController.items = [];

        productos.forEach(producto => {
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
        });

        renderizarHTML(itemsController.items);
        eliminarProductoMenu();
        estiloVisibilidad();

    } catch (error) {
        console.error("No se pudo cargar el catálogo ):", error);
    }
}


function estiloVisibilidad() {
    const spans = document.querySelectorAll('.visibilidad-estilo');

    spans.forEach(span => {
        const texto = span.textContent.trim().toLowerCase();
        span.classList.remove("activo")
        span.classList.remove("inactivo")
        if (texto === 'activo' || texto === 'true') {
            span.classList.add("estado-activo")
        } else if (texto === 'inactivo' || texto === 'false') {
            span.classList.add("estado-inactivo")
        }
    });
}

function renderizarHTML(items) {
    const catalogo = document.getElementById('catalogo-productos');
    if (!catalogo) return;

    catalogo.innerHTML = items.map(producto => `
        <article class="tarjeta-producto">
            <img src="${producto.imagen}" alt="${producto.nombreProducto}">

            <div class="contenido-producto">
                <h2 class="text-center">${producto.nombreProducto}</h2>
                <p class="admin-home-descripcion">${producto.descripcion}</p>
                
                <hr>
                <!-- GRID DE 2 COLUMNAS -->
                <div class="grid-productos">
                    <!-- Columna 1 -->
                    <div class="datos-columna">
                        <p>ID:<br> <span class="fw-bold">${producto.id}</span></p>
                        <p>Marca:<br> <span class="fw-bold">${producto.marca}</span></p>
                        <p>Especie:<br> <span class="fw-bold">${producto.especie}</span></p>
                    </div>

                    <!-- Columna 2 -->
                    <div class="datos-columna">
                        <p>Existencia:<br> <span class="fw-bold">${producto.existencia} unidades</span></p>
                        <p>Costo:<br> <span class="fw-bold">$${producto.costo}</span></p>
                        <p>Precio:<br> <span class="fw-bold">$${producto.precio}</span></p>
                    </div>
                </div>
                <hr>

                <!-- Datos adicionales fuera del grid -->
                <div class="datos-extra">
                        <p class="dato-fila">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                            </svg>
                            <span class="etiqueta-texto">Visibilidad:</span>
                            <span class="visibilidad-estilo">${producto.estado}</span>
                        </p>

                        <p class="dato-fila">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <span class="etiqueta-texto">Destacado:</span>
                            <span class="visibilidad-estilo">${producto.destacado}</span>
                        </p>
                </div>

                <div class="d-flex admin-btns">
                    <a href="adminEditar.html" type="button" class="boton-carrito editar" data-id="${producto.id}"
                        data-producto="${producto.nombreProducto}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                        </svg>
                        Editar
                    </a>
                    <button type="button" class="boton-eliminar" data-id="${producto.id}"
                        data-producto="${producto.nombreProducto}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                        Eliminar
                    </button>
                </div>
            </div>
        </article>
    `).join('');
    obtenerInfomacion();
}

/* ====================================================
   ESTADO GLOBAL Y LÓGICA UNIFICADA DE FILTROS
   ==================================================== */
const mapaEspecies = { "bovinos": "Vacas", "porcinos": "Cerdos", "aves": "Aves", "ovinos": "Borregos" };

let filtroMarca = null;
let filtroEspecie = null;

// Función auxiliar para renderizar y reacondicionar la UI
function actualizarCatalogoYEventos(listaProductos) {
    renderizarHTML(listaProductos);
    eliminarProductoMenu();
    estiloVisibilidad();
}

// Función central de filtrado (combina Marca + Especie)
function aplicarFiltros() {
    let productosFiltrados = itemsController.items;

    if (filtroMarca) {
        productosFiltrados = productosFiltrados.filter(item => item.marca === filtroMarca);
    }

    if (filtroEspecie) {
        productosFiltrados = productosFiltrados.filter(item => item.especie === filtroEspecie);
    }

    actualizarCatalogoYEventos(productosFiltrados);
}

/* ====================================================
   LISTENERS: FILTRO POR MARCA
   ==================================================== */
const botonesMarca = [
    { btn: document.getElementById('adm'), marca: 'ADM' },
    { btn: document.getElementById('nogal'), marca: 'El Nogal' },
    { btn: document.getElementById('arandas'), marca: 'Alimentos Arandas' }
];

botonesMarca.forEach(({ btn, marca }) => {
    if (!btn) return;

    btn.addEventListener('click', () => {
        // Toggle: si ya estaba activa esa marca, la quitamos
        if (filtroMarca === marca) {
            filtroMarca = null;
            btn.classList.remove('activo');
        } else {
            // Desactivamos otros botones de marca
            botonesMarca.forEach(b => b.btn?.classList.remove('activo'));
            filtroMarca = marca;
            btn.classList.add('activo');
        }

        aplicarFiltros();
    });
});

/* ====================================================
   LISTENERS: FILTRO POR ESPECIE
   ==================================================== */
const botonesEspecie = document.querySelectorAll(".filtro-especies .especie");

botonesEspecie.forEach(boton => {
    boton.addEventListener("click", () => {
        const especieData = boton.getAttribute("data-especie");
        const especieNombre = mapaEspecies[especieData];

        // Toggle: si ya estaba activa, la quitamos
        if (boton.classList.contains("activo")) {
            boton.classList.remove("activo");
            filtroEspecie = null;
        } else {
            botonesEspecie.forEach(btn => btn.classList.remove("activo"));
            boton.classList.add("activo");
            filtroEspecie = especieNombre;
        }

        aplicarFiltros();
    });
});



document.addEventListener('DOMContentLoaded', function () {
    estiloVisibilidad();
});
/* ====================================================
   MODAL Y PROCESO DE ELIMINACIÓN
   ==================================================== */
function eliminarProductoMenu() {
    const btns = document.querySelectorAll('.boton-eliminar');

    btns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            // Read attributes
            const idBtn = e.target.dataset.id;
            const nombreBtn = e.target.dataset.producto;

            // Buscamos por ID (mencionando String/Number para coincidencia exacta)
            const productoEncontrado = itemsController.items.find(item => String(item.id) === String(idBtn));

            if (!productoEncontrado) {
                console.warn("Producto no encontrado en el controlador local.");
                return;
            }

            const id = productoEncontrado.id;
            const nombre = productoEncontrado.nombreProducto;
            const imagen = productoEncontrado.imagen;

            const modal = document.createElement('DIV');
            modal.classList.add('modal-overlay');

            const contenidoModal = document.createElement('DIV');
            contenidoModal.classList.add('contenido-modal');

            contenidoModal.innerHTML = `
                <h3>¿Deseas eliminar <br><span class="fw-bold">${nombre}</span>?</h3>
                <img class="admin-img-menu" src="${imagen}" alt="imagen del producto">
                <div class="d-flex admin-btns">
                    <button type="button" class="btn-cancelar">No</button>
                    <button type="button" class="btn-confirmar">Sí</button>
                </div>
            `;

            modal.appendChild(contenidoModal);

            modal.addEventListener('click', function (evento) {
                if (evento.target === modal) {
                    cerrarModal();
                }
            });

            const btnCancelar = contenidoModal.querySelector('.btn-cancelar');
            btnCancelar.addEventListener('click', cerrarModal);

            const body = document.querySelector('body');
            body.classList.add('overflow-hiden');
            body.appendChild(modal);

            // Asignamos la acción al botón Confirmar
            const btnConfirmar = contenidoModal.querySelector('.btn-confirmar');
            btnConfirmar.addEventListener('click', function () {
                deleteProduct(id);
            });

            setTimeout(() => {
                modal.classList.add('is-visible');
            }, 10);
        });
    });
}

async function deleteProduct(productId) {
    mostrarModalElimnarProducto();
    try {
        // Petición DELETE a la API pasando el ID directo
        const response = await fetch(`${API_URL}/${productId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        //  1. Filtramos en memoria comparando como String para evitar discrepancias int vs string
        itemsController.items = itemsController.items.filter(item => String(item.id) !== String(productId));

        // 2. Volvemos a pintar el catálogo con la lista actualizada
        renderizarHTML(itemsController.items);

        // 3. Re-enganchamos los eventos de los botones eliminar
        eliminarProductoMenu();

        // 4. Cerramos el modal
        cerrarModal();

        console.log(`Producto con ID ${productId} eliminado correctamente.`);
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
    }

    cerrarModal();
}

function cerrarModal() {
    const modal = document.querySelector('.modal-overlay');
    const body = document.querySelector('body');

    if (modal) {
        modal.classList.remove('is-visible');
        body.classList.remove('overflow-hiden');

        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}




function mostrarModalElimnarProducto() {
    const modal = document.createElement('DIV');
    const carga = document.createElement('DIV');
    carga.innerHTML = `        <div class="contenedor-loader">
  <img class="animacion-carga" src="recursos-graficos/formulario-contactanos/Forrajero-naranja.png" alt="Cargando">
</div>`
    modal.classList.add('modal-overlay');


    // modal.addEventListener('click', function () {
    //     cerrarModal()
    // })

    const body = document.querySelector('body');
    body.classList.add('overflow-hiden');
    body.appendChild(modal);
    modal.appendChild(carga);

    setTimeout(() => {
        modal.classList.add('is-visible');
    }, 10);

}

