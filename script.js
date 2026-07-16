document.addEventListener('DOMContentLoaded', function () {
    biograia();
})

function biograia() {
    const imgs = document.querySelectorAll('.quienesPosible-img');

    imgs.forEach(img => {
        img.addEventListener('click', function () {
            mostrarModal();

        })
    });

    cardIntegrante();
}

function mostrarModal() {
    const modal = document.createElement('DIV');
    modal.classList.add('modal-overlay');


    modal.addEventListener('click', function () {
        cerrarModal()
    })

    const body = document.querySelector('body');
    body.classList.add('overflow-hiden');
    body.appendChild(modal);

}

function cerrarModal() {
    const modal = document.querySelector('.modal-overlay');
    const body = document.querySelector('body');


    if (modal) {
        body.classList.remove('overflow-hiden');
        modal.remove();
    }

}

function cardIntegrante() {

    const datosElias = {
        "id": "elias",
        "imagen": "img/Elias.jpg",
        "linkedin": "https://www.linkedin.com/in/elias-lopez-dev/",
        "gitHub": "https://github.com/DIEGOELIASLOPEZ",
        "nombreCompleto": "Diego Elías López Martínez",
        "nombre": "Elias",
        "acercaDe": "Ingeniero en Computación y Desarrollador Full Stack / Backend especializado en la automatización de procesos y optimización de datos. Cuenta con experiencia en desarrollo de software, control de versiones y metodologías ágiles, destacando su participación en proyectos de automatización de datos clínicos en el IIMAS-UNAM. Domina tecnologías como Java, JavaScript, PHP, Python y MySQL.",
        "rol": "Tester",
        "rolDescripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosDaniela = {
        "id": "Daniela",
        "imagen": "img/Daniela.jpg",
        "linkedin": "https://www.linkedin.com/in/daniela-tobon-perez/",
        "gitHub": "https://github.com/tobdany",
        "nombreCompleto": "Daniela Tobón Pérez",
        "nombre": "Daniela",
        "acercaDe": `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo
                    consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima
                    voluptatum,
                    atque non?`,
        "rolDescripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosOscar = {
        "id": "Oscar",
        "imagen": "img/Oscar.jpg",
        "linkedin": "https://www.linkedin.com/in/oscar-miranda-lopez/",
        "gitHub": "https://github.com/tobdany",
        "nombreCompleto": "Oscar Andres Miranda Lopez",
        "nombre": "Oscar",
        "acercaDe": `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo
                    consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima
                    voluptatum,
                    atque non?`,
        "rolDescripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosEsther = {
        "id": "Esther",
        "imagen": "img/Esther.jpg",
        "linkedin": "https://www.linkedin.com/in/esthernilamiranda/",
        "gitHub": "https://github.com/eanila",
        "nombreCompleto": "Esther Alejandra Nila Miranda",
        "nombre": "Esther",
        "acercaDe": `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo
                    consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima
                    voluptatum,
                    atque non?`,
        "rolDescripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }

    const integrantes = {
        elias: datosElias,
        Daniela: datosDaniela,
        Oscar: datosOscar,
        Esther: datosEsther
    }

    const integrantesIds = document.querySelectorAll('.quienesPosible-img');

    integrantesIds.forEach(integrante => {
        integrante.addEventListener('click', function () {
            const modal = document.querySelector('.modal-overlay');
            const datos = integrantes[integrante.id];

            if (datos) {
                modal.innerHTML = generarCard(datos)
            }
        })

    });

}

function generarCard(datos) {

    return `
        <div class="card-integrante">

            <div class="card-recursos">

                <img src="${datos.imagen}" alt="${datos.nombre}">

                <div class="links">

                    <div class="link-integrante">
                        <a class="link-integrante-2"
                            href="${datos.linkedin}"
                            target="_blank">

                            <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                                    class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />

                                </svg>
                            </div>

                            <p>LinkedIn</p>

                        </a>
                    </div>

                    <hr class="hr-links">

                    <div class="link-integrante">

                        <a class="link-integrante-2"
                            href="${datos.gitHub}"
                            target="_blank">

                            <div>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                                    class="bi bi-github" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                            </div>

                            <p>GitHub</p>

                        </a>

                    </div>

                </div>

            </div>

            <div class="integrante-datos">

                <h3>${datos.nombreCompleto}</h3>

                <h4>Full Stack JAVA Developer</h4>

                <hr class="hr-contenido">

                <h4 class="h4-integrante">

                    <span class="icon-contenido">

                        <!-- SVG Persona -->

                    </span>

                    Acerca de ${datos.nombre}

                </h4>

                <p>${datos.acercaDe}</p>

                <hr class="hr-contenido">

                <h4 class="h4-integrante">

                    <span class="icon-contenido">

                        <!-- SVG Código -->

                    </span>

                    Rol

                </h4>

                <p>${datos.rolDescripcion}</p>

            </div>

        </div>
    `;
}






