// ==========================================
// boton de estado 
// ==========================================

	document.addEventListener('DOMContentLoaded', () => {

    // Sincronizar campo "Ciudad" con el Estado seleccionado
    const selectEstado = document.getElementById('estado');
    const inputCiudad = document.getElementById('ciudad');

    if (selectEstado && inputCiudad) {
        selectEstado.addEventListener('change', () => {
            const textoSeleccionado = selectEstado.options[selectEstado.selectedIndex].text;
            inputCiudad.value = textoSeleccionado;
        });
    }

    // : Envío a domicilio / Retiro en tienda
    const bloqueDireccion = document.getElementById('bloque-direccion');
    const bloqueRetiroTienda = document.getElementById('bloque-retiro-tienda');

    document.querySelectorAll('.delivery-method-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.delivery-method-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.dataset.metodo === 'tienda') {
                bloqueDireccion.style.display = 'none';
                bloqueRetiroTienda.style.display = 'block';
            } else {
                bloqueDireccion.style.display = 'block';
                bloqueRetiroTienda.style.display = 'none';
            }
        });
    });

});