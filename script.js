/*-----------------------------------
         Acerca de nosotros
------------------------------------*/

// --- Componente : Misión y visión ---
const carruselMisionVIsion = document.getElementById('carouselExampleIndicators');
const textoBotonVaca = document.getElementById('textoBoton');
const iconoBotonVaca = document.getElementById('flechaBoton');

//Para detectar si se desplazó el carrusel y modificar el texto del botón #boton-vaca-carrusel
if (carruselMisionVIsion && textoBotonVaca) {
    //Slid.bs.carousel se dispara cuando se hace clic y la tarjeta se mueve
    carruselMisionVIsion.addEventListener('slid.bs.carousel', function (event) {
        // event.to dice el índice de la diapositiva activa (0 = Misión, 1 = Visión)
        if (event.to === 1) {
            textoBotonVaca.textContent = 'Ver misión';
            iconoBotonVaca.textContent = '🌾';
        } else {
            textoBotonVaca.textContent = 'Ver visión';
            iconoBotonVaca.textContent = '🐄';
        }
    });
}