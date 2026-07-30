document.addEventListener('DOMContentLoaded', function () {
    contadorCarrito();
})


/**
 * Gestiona el contador visual del carrito en la barra de navegación.
 * Sincroniza la cantidad de productos con el almacenamiento del navegador (localStorage)
 * para mantener el dato persistente al navegar entre páginas.
 */
function contadorCarrito() {
    // Referencias a la interfaz: botones de agregar y contenedor del icono
    const btns = document.querySelectorAll('.boton-carrito');
    const divcarrito = document.querySelector('.cart-icon-wrapper');

    // Si la página actual no tiene la barra con el carrito, detenemos la ejecución
    if (!divcarrito) return;

    // Elemento HTML que contendrá el número del contador
    const carrito = document.createElement('P');
    carrito.classList.add('contador-carrito');

    // ESTADO INICIAL: Recuperamos la cantidad guardada previamente (si no existe, inicia en cero)
    let contador = parseInt(localStorage.getItem('contadorCarrito')) || 0;

    // RENDERIZADO INICIAL: Si ya existen productos guardados, los mostramos al cargar la página
    if (contador > 0) {
        // Formateamos la vista si supera las dos cifras
        if (contador >= 100) {
            carrito.innerHTML = `<span class="carrito-mas">+</span>99`;
        } else {
            carrito.textContent = contador;
        }
        // Insertamos el contador en el icono del Navbar
        divcarrito.append(carrito);
    }

    // INTERACCIÓN DE USUARIO: Escuchamos los clics en los botones de "Agregar al carrito"
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            // 1. Incrementamos la memoria interna
            contador++;

            // 2. Persistimos el nuevo total en el navegador para otras pestañas/páginas
            localStorage.setItem('contadorCarrito', contador);

            // 3. Actualizamos la vista según la cifra alcanzada
            if (contador >= 100) {
                carrito.innerHTML = `<span class="carrito-mas">+</span>99`;
            } else {
                carrito.textContent = contador;
            }

            // 4. Aseguramos que la insignia sea visible en pantalla desde el primer clic
            if (!divcarrito.contains(carrito)) {
                divcarrito.append(carrito);
            }
        });
    });
}