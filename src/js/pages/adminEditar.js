document.addEventListener('DOMContentLoaded', function () {

    obtenerId();
    extaerId();

})



function obtenerId() {
    const btnsEditar = document.querySelectorAll('.editar')
    if (btnsEditar) {
        btnsEditar.forEach(btn => {
            btn.addEventListener('click', function () {
                const id = btn.dataset.id
                localStorage.setItem('idProductoEditar', id);


            })

        });
    }
}


async function extaerId() {
    const id = localStorage.getItem('idProductoEditar')
    if (id) {
        console.log(id)
    }
}
