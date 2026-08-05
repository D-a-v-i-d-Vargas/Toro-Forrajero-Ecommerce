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
                producto.peso,
                producto.precio,
                producto.marca,
                producto.imagen,
                producto.estado
            );
        });

        renderizarHTML(itemsController.items);
        eliminarProductoMenu();

    } catch (error) {
        console.error("No se pudo cargar el catálogo ):", error);
    }
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
                <span class="precio">Costo: $${producto.precio} MXN</span>
                <span class="precio">Precio de Venta: $${producto.precio} MXN</span>
                <span class="precio">Marca: ${producto.marca}</span>
                <span class="visibilidad">
                Visibilidad: <span class="visibilidad--${String(producto.estado).toLowerCase() === 'activo' ? 'activo' : 'inactivo'}">${producto.estado}</span>
                </span>
                <span class="visibilidad">
                Destacado: <span class="visibilidad--${String(producto.destacado).toLowerCase() === 'activo' ? 'activo' : 'inactivo'}">${producto.destacado}</span>
                </span>                <div class="d-flex admin-btns">
                    <button 
                        type="button" 
                        class="boton-carrito" 
                        data-id="${producto.id}"
                        data-producto="${producto.nombreProducto}">
                        Editar
                    </button>
                    <!--  Asignamos data-id explícitamente para no depender solo del nombre -->
                    <button 
                        type="button" 
                        class="boton-eliminar" 
                        data-id="${producto.id}"
                        data-producto="${producto.nombreProducto}">
                        Eliminar
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

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