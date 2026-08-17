/**
    * ============================================================================
    * LÓGICA DEL CARRITO DE COMPRAS (RENDERIZADO DINÁMICO Y PERSISTENCIA)
    * ============================================================================
    * Descripción: Este script lee el 'localStorage', agrupa productos duplicados,
    * genera el HTML inicial y maneja el incremento/decremento actualizando ÚNICAMENTE
    * los nodos de texto necesarios, evitando re-renderizados que disparen animaciones.
 */

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-productos-carrito');
    const btnPago = document.getElementById('btn-proceder-pago');

    const carritoCrudo = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carritoCrudo.length === 0) {
        mostrarCarritoVacio();
        return;
    }

    let carritoAgrupado = agruparProductos(carritoCrudo);
    renderizarCarrito(carritoAgrupado);

    function agruparProductos(arreglo) {
        const resultado = [];
        arreglo.forEach(producto => {
            const existe = resultado.find(p => p.nombreProducto === producto.nombreProducto);
            if (existe) {
                existe.cantidad += 1;
            } else {
                resultado.push({ ...producto, cantidad: 1 });
            }
        });
        return resultado;
    }

    function renderizarCarrito(productos) {
        contenedor.innerHTML = ''; 

        productos.forEach((producto, index) => {
            const precioTotalArticulo = (parseFloat(producto.precio) * producto.cantidad).toFixed(2);
            const delayClass = `delay-${(index % 3) + 1}`; 
            
            const tarjeta = document.createElement('div');
            tarjeta.className = `card-articulo p-4 mb-5 fade-up ${delayClass}`;
            tarjeta.id = `tarjeta-${index}`;
            
            tarjeta.innerHTML = `
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <h2 class="text-forrajero-orange fw-bold mb-3">Artículo ${index + 1}</h2>
                        <h5 class="fw-bold mb-1">${producto.nombreProducto}</h5>
                        <p class="mb-3" style="color: #D4A373; font-size: 0.9rem; line-height: 1.4;">
                            ${producto.descripcion || 'Producto de alta calidad Toro Forrajero.'}
                        </p>
                        <p class="fw-bold fs-5 mb-3 precio-item js-precio-${index}">$ ${precioTotalArticulo} MXN</p>
                        
                        <div class="d-flex align-items-center gap-2">
                            <div class="d-flex flex-column gap-1">
                                <button class="btn-qty-control btn-sumar" data-nombre="${producto.nombreProducto}" data-index="${index}">+</button>
                                <button class="btn-qty-control btn-restar" data-nombre="${producto.nombreProducto}" data-index="${index}">-</button>
                            </div>
                            <div class="bg-forrajero-orange px-3 py-1 rounded-1 fw-bold fs-5 cantidad-item js-cantidad-${index}">
                                ${producto.cantidad}
                            </div>
                            
                            <!-- NUEVO BOTÓN: Eliminar Artículo -->
                            <button class="btn-eliminar ms-3" data-nombre="${producto.nombreProducto}" data-index="${index}">
                                <i class="bi bi-trash3 me-1"></i> Eliminar artículo
                            </button>
                        </div>
                    </div>
                    
                    <div class="col-md-5 mt-4 mt-md-0 text-center">
                        <div class="img-producto-box h-100 d-flex align-items-center justify-content-center">
                            <img src="${producto.imagen}" alt="${producto.nombreProducto}" class="img-fluid" style="max-height: 250px;">
                        </div>
                    </div>
                </div>
            `;
            contenedor.appendChild(tarjeta);
        });

        asignarEventosBotones(productos);
        if (btnPago) btnPago.style.display = 'block';
    }

    function asignarEventosBotones(productos) {
        const btnSumarList = document.querySelectorAll('.btn-sumar');
        const btnRestarList = document.querySelectorAll('.btn-restar');
        const btnEliminarList = document.querySelectorAll('.btn-eliminar'); // Seleccionamos el nuevo botón

        // Evento Sumar
        btnSumarList.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const nombre = e.target.getAttribute('data-nombre');
                const indexHtml = e.target.getAttribute('data-index');
                const producto = productos.find(p => p.nombreProducto === nombre);
                
                if (producto) {
                    producto.cantidad += 1;
                    actualizarAlmacenamiento(productos);
                    actualizarDOMItem(producto, indexHtml); 
                }
            });
        });

        // Evento Restar
        btnRestarList.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const nombre = e.target.getAttribute('data-nombre');
                const indexHtml = e.target.getAttribute('data-index');
                const productoIndex = productos.findIndex(p => p.nombreProducto === nombre);
                
                if (productoIndex !== -1) {
                    const producto = productos[productoIndex];
                    
                    if (producto.cantidad > 1) {
                        producto.cantidad -= 1;
                        actualizarAlmacenamiento(productos);
                        actualizarDOMItem(producto, indexHtml); 
                    } else {
                        eliminarProductoPorCompleto(productos, productoIndex, indexHtml);
                    }
                }
            });
        });

        // NUEVO EVENTO: Eliminar por completo
        btnEliminarList.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Usamos closest por si el usuario le da clic al ícono de la papelera en lugar del texto
                const boton = e.target.closest('.btn-eliminar'); 
                const nombre = boton.getAttribute('data-nombre');
                const indexHtml = boton.getAttribute('data-index');
                const productoIndex = productos.findIndex(p => p.nombreProducto === nombre);

                if (productoIndex !== -1) {
                    eliminarProductoPorCompleto(productos, productoIndex, indexHtml);
                }
            });
        });
    }

    /**
     * Función auxiliar para borrar un artículo del arreglo y del DOM
     */
    function eliminarProductoPorCompleto(productos, arrayIndex, domIndex) {
        productos.splice(arrayIndex, 1); // Lo quitamos del arreglo
        actualizarAlmacenamiento(productos); // Actualizamos memoria
        
        const tarjetaDOM = document.getElementById(`tarjeta-${domIndex}`);
        if (tarjetaDOM) {
            tarjetaDOM.remove(); // Lo quitamos visualmente sin recargar
        }

        if (productos.length === 0) {
            mostrarCarritoVacio();
        }
    }

    function actualizarDOMItem(producto, index) {
        const precioTotalArticulo = (parseFloat(producto.precio) * producto.cantidad).toFixed(2);
        const elementoPrecio = document.querySelector(`.js-precio-${index}`);
        const elementoCantidad = document.querySelector(`.js-cantidad-${index}`);

        if (elementoPrecio) elementoPrecio.textContent = `$ ${precioTotalArticulo} MXN`;
        if (elementoCantidad) elementoCantidad.textContent = producto.cantidad;
    }

    function actualizarAlmacenamiento(productosAgrupados) {
        const nuevoCarritoCrudo = [];
        productosAgrupados.forEach(prod => {
            for (let i = 0; i < prod.cantidad; i++) {
                const { cantidad, ...productoOriginal } = prod; 
                nuevoCarritoCrudo.push(productoOriginal);
            }
        });
        
        localStorage.setItem('carrito', JSON.stringify(nuevoCarritoCrudo));
        localStorage.setItem('contadorCarrito', nuevoCarritoCrudo.length);
        
        if (typeof actualizarBadgeNavegacion === 'function') {
            actualizarBadgeNavegacion(nuevoCarritoCrudo.length);
        }
    }

    function mostrarCarritoVacio() {
        contenedor.innerHTML = `
            <div class="text-center p-5 fade-up">
                <i class="bi bi-cart-x text-muted" style="font-size: 4rem;"></i>
                <h3 class="mt-3 text-muted">Tu carrito está vacío</h3>
                <a href="productos.html" class="btn btn-outline-dark mt-3">Ir a la tienda</a>
            </div>
        `;
        if (btnPago) btnPago.style.display = 'none';
    }
});