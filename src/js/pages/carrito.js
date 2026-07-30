document.addEventListener('DOMContentLoaded', function () {
    contadorCarrito();
    productosLocalStorage();
});

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

    // * Creacion del elemento contenedor para la cifra del contador
    const carrito = document.createElement('P');
    carrito.classList.add('contador-carrito');

    // * Obtencion del estado previo persistido (Default: 0)
    let contador = parseInt(localStorage.getItem('contadorCarrito')) || 0;

    // ? Inicializacion de la vista al cargar el documento si existen items previos
    if (contador > 0) {
        if (contador >= 100) {
            carrito.innerHTML = `<span class="carrito-mas">+</span>99`;
        } else {
            carrito.textContent = contador;
        }
        divcarrito.append(carrito);
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

            // ! Busqueda en la base de datos comparando por nombre exacto
            const productoSeleccionado = baseDatosProductos.find(
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