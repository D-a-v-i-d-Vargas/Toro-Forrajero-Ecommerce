document.addEventListener('DOMContentLoaded', function () {
    cargarProductos();

})
const itemsController = new ItemsController(0);

const API_URL = 'http://localhost:3000/productos'

async function cargarProductos() {

    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Error la optener Productos");
        const productos = await res.json();

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
            )

        });
        renderizarHTML(itemsController.items);
        eliminarProductoMenu();

    }
    catch (error) {
        console.error("No se pudo cargar el catálogo:", error);


    }


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
                <span class="visibilidad">
                Visibilidad: <span class="visibilidad--${producto.estado === 'activo' ? 'activo' : 'inactivo'}">${producto.estado}</span>
                </span>
                <div class="d-flex admin-btns">
                    <button 
                        type="button" 
                        class="boton-carrito" 
                        data-producto="${producto.nombreProducto}" 
                        data-precio="${producto.precio}">
                        Editar
                    </button>
                    <button 
                        type="button" 
                        class="boton-eliminar" 
                        data-producto="${producto.nombreProducto}" 
                        data-precio="${producto.precio}">
                        Eliminar
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}


const filtrarMarcas = (marca) => {
    const productosVisibles = baseDatosProductos.filter(producto => producto.marca === marca)
    renderizarHTML(productosVisibles)

}

const admBtn = document.getElementById('adm');
const nogalBtn = document.getElementById('nogal');
const arandasBtn = document.getElementById('arandas');

admBtn.addEventListener('click', () => {
    filtrarMarcas('ADM');
})

nogalBtn.addEventListener('click', () => {
    filtrarMarcas('El Nogal');
})

arandasBtn.addEventListener('click', () => {
    filtrarMarcas('Alimentos Arandas');
})
/* Filtro por especie */

const mapaEspecies = { "bovinos": "Vacas", "porcinos": "Cerdos", "aves": "Aves", "ovinos": "Borregos" }

let especieSeleccionada = null;

function aplicarFiltro() {
    if (!especieSeleccionada) {
        renderizarHTML(itemsController.items);
    } else {
        const productoFiltrado = itemsController.items.filter(item => item.especie === especieSeleccionada);
        renderizarHTML(productoFiltrado);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarItems();
    renderizarHTML(itemsController.items);
});

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
    })
});

function eliminarProductoMenu() {
    const btns = document.querySelectorAll('.boton-eliminar');

    btns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            // 1. Obtenemos el nombre del producto
            const nombre = e.target.dataset.producto;
            const productoEncontrado = itemsController.items.find(item => item.nombreProducto === nombre);
            const id = productoEncontrado.id;

            // 2. Creación de los elementos
            const modal = document.createElement('DIV');
            modal.classList.add('modal-overlay');

            const contenidoModal = document.createElement('DIV');
            contenidoModal.classList.add('contenido-modal');

            contenidoModal.innerHTML = `
            <h3>¿Deseas eliminar <br><span class="fw-bold">${nombre}</span>?</h3>
            <div class=" d-flex admin-btns ">
            <button type="button" class="btn-cancelar">No</button>
            <button type="button" class="btn-confirmar">Si</button>
                
            </div>
        `;


            // 4. Armamos la jerarquía del DOM
            modal.appendChild(contenidoModal);

            // 5. Cierre del modal solo si cloqueas el fondo (overlay)
            modal.addEventListener('click', function (evento) {
                if (evento.target === modal) {
                    cerrarModal();
                }
            });

            // 6. Asignar funcionalidad al botón "Cancelar" que acabamos de crear
            const btnCancelar = contenidoModal.querySelector('.btn-cancelar');
            btnCancelar.addEventListener('click', cerrarModal);

            // 7. Mostrar en pantalla
            const body = document.querySelector('body');
            body.classList.add('overflow-hiden');
            body.appendChild(modal);
            eliminarProducto(id, contenidoModal)
            // Animación de entrada
            setTimeout(() => {
                modal.classList.add('is-visible');
            }, 10);
        });

    });

}


function eliminarProducto(id, contenedorModal) {
    const btn = contenedorModal.querySelector('.btn-confirmar');
    if (btn) {
        btn.addEventListener('click', function () {
            deleteProduct(id);
        });
    }
}

async function deleteProduct(productId) {
    try {
        const response = await fetch(`${API_URL}/${productId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 1. Quitamos el producto del array en memoria
        itemsController.items = itemsController.items.filter(item => item.id !== productId);

        // 2. Volvemos a pintar el catálogo sin ese producto
        renderizarHTML(itemsController.items);
        eliminarProductoMenu(); // porque renderizarHTML recreó los botones, hay que re-enlazar eventos

        // 3. Cerramos el modal
        cerrarModal();

        console.log('Producto eliminado correctamente');
    } catch (error) {
        console.error('Error al eliminar:', error);
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



