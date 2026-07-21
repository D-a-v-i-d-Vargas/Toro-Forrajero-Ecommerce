
/*******************************************************************************
 * 
 * PÁGINA: ACERCA DE NOSOTROS
 * 
 ******************************************************************************/
/* -----------------------------------------------------------------------------
   SECCION: MISIÓN Y VISIÓN
----------------------------------------------------------------------------- */

/* --- Elemento: Botón que se transforma --- */

const carruselMisionVIsion = document.getElementById('carouselExampleIndicators');
const textoBotonVaca = document.getElementById('textoBoton');
const iconoBotonVaca = document.getElementById('flechaBoton');

//Para detectar si se desplazó el carrusel y modificar el texto del botón #boton-vaca-carrusel
if (carruselMisionVIsion && textoBotonVaca) {
    //Slid.bs.carousel se dispara cuando se hace clic y la tarjeta se mueve
    carruselMisionVIsion.addEventListener('slid.bs.carousel', function (event) {
        // event.to dice el índice de la diapositiva activa (0 = Misión, 1 = Visión)
        switch (event.to) {
            case 0:
                textoBotonVaca.textContent = 'Ver misión';
                iconoBotonVaca.textContent = '🤠';
                break;
            case 1:
                textoBotonVaca.textContent = 'Ver visión';
                iconoBotonVaca.textContent = '🐄';
                break;
            case 2:
                textoBotonVaca.textContent = '¿Quiénes somos?';
                iconoBotonVaca.textContent = '🌾';
                break;
        }
    });
}


/* -----------------------------------------------------------------------------
   SECCION: QUIÉNES LO HACEN POSIBLE
----------------------------------------------------------------------------- */

/* --- Elemento: Tarjetas --- */


document.addEventListener('DOMContentLoaded', function () {
    biografia();
    mensajeCorreo();
    crearAlertsCorreo();
    mensajeNombre();
    mensajeTelefono();

})

function biografia() {
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

    setTimeout(() => {
        modal.classList.add('is-visible');
    }, 10);

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

function cardIntegrante() {


    const datosDaniela = {
        id: "daniela",
        imagen: "recursos-graficos/acerca-nosotros/perfiles-rancho/dani.png",
        linkedin: "https://www.linkedin.com/in/daniela-tobon-perez/",
        gitHub: "https://github.com/tobdany",
        nombreCompleto: "Daniela Tobón Pérez",
        nombre: "Daniela",
        acercaDe: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo
                    consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima
                    voluptatum,
                    atque non?`,
        rol: "Product Owner",
        rolDescripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosOscar = {
        id: "oscar",
        imagen: "recursos-graficos/acerca-nosotros/perfiles-rancho/oscar.jpeg",
        linkedin: "https://www.linkedin.com/in/oscar-miranda-lopez/",
        gitHub: "https://github.com/OscarAndres008",
        nombreCompleto: "Oscar Andres Miranda Lopez",
        nombre: "Oscar",
        acercaDe: `Desarrollo fullstack con formación en ingeniería en sistemas y experiencia en robotic process automation.
                    Orientado a construir soluciones funcionales y escalables ,destacó mi capacidad de aprendizaje y colaborar eficazmente en equipos multidisciplinarios.`,
        rol: "SCRUM Master",
        rolDescripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosEsther = {
        id: "esther",
        imagen: "recursos-graficos/acerca-nosotros/perfiles-rancho/esther2.png",
        linkedin: "https://www.linkedin.com/in/esthernilamiranda/",
        gitHub: "https://github.com/eanila",
        nombreCompleto: "Esther Alejandra Nila Miranda",
        nombre: "Esther",
        acercaDe: `Desarrolladora Java Full Stack con trayectoria en Psicología Organizacional e Ingeniera en Desarrollo de Software en formación. Domina tecnologías como Java, Python, JavaScript, HTML, CSS y Bootstrap. Combina su inventario técnico y metodologías ágiles con comunicación efectiva, adaptabilidad al cambio y orientación al futuro para potenciar la colaboración del equipo y favorecer el logro de los objetivos.`,
        rol: "Tester",
        rolDescripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosElias = {
        id: "elias",
        imagen: "recursos-graficos/acerca-nosotros/perfiles-rancho/elias.jpeg",
        linkedin: "https://www.linkedin.com/in/elias-lopez-dev/",
        gitHub: "https://github.com/DIEGOELIASLOPEZ",
        nombreCompleto: "Diego Elías López Martínez",
        nombre: "Elias",
        acercaDe: "Ingeniero en Computación y Desarrollador Full Stack / Backend especializado en la automatización de procesos y optimización de datos. Cuenta con experiencia en desarrollo de software, control de versiones y metodologías ágiles, destacando su participación en proyectos de automatización de datos clínicos en el IIMAS-UNAM. Domina tecnologías como Java, JavaScript, PHP, Python y MySQL.",
        rol: "Tester",
        rolDescripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosDavid = {
        id: "david",
        imagen: "recursos-graficos/acerca-nosotros/perfiles-rancho/david.png",
        linkedin: "https://www.linkedin.com/in/david-vargas-3700951bb/",
        gitHub: "https://github.com/D-a-v-i-d-Vargas",
        nombreCompleto: "David Vargas Miranda",
        nombre: "David",
        acercaDe: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo
                    consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima
                    voluptatum,
                    atque non?`,
        rol: "Frontend Developer",
        rolDescripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosKaren = {
        id: "karen",
        imagen: "recursos-graficos/acerca-nosotros/perfiles-rancho/Karen.jpeg",
        linkedin: "https://www.linkedin.com/in/karen-luna-dev/",
        gitHub: "https://github.com/KarenLunaS",
        nombreCompleto: "Karen Montserrat Luna Salmerón",
        nombre: "Karen",
        acercaDe: `Desarrolladora Java Full Stack, apasionada por el aprendizaje continuo. Se especializa en el desarrollo web, creando interfaces funcionales, atractivas y centradas en la experiencia del usuario. Enfocada en transformar ideas en soluciones digitales eficientes. 
                     En constante crecimiento profesional para desarrollar proyectos tecnológicos que generen un impacto positivo. Domina tecnologías como Java, Python, JavaScript, HTML, CSS y Bootstrap.`,
        rol: "Frontend Developer",
        rolDescripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosVanessa = {
        id: "vanessa",
        imagen: "recursos-graficos/acerca-nosotros/perfiles-rancho/vane.jpeg",
        linkedin: " https://www.linkedin.com/in/vanessa-estrada-arellano/",
        gitHub: "https://github.com/VanessaEstrada04",
        nombreCompleto: "Ana Vanessa Estrada Arellano",
        nombre: "Vanessa",
        acercaDe: `Full Stack con especialización en Java y experiencia en el desarrollo de aplicaciones Frontend y Backend. Enfocada en crear soluciones web escalables, eficientes y de alta calidad mediante el uso de Java, JavaScript y tecnologías modernas, aplicando buenas prácticas de desarrollo y trabajo colaborativo con metodologías ágiles.`,
        rol: "Frontend Developer",
        rolDescripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosDiana = {
        id: "diana",
        imagen: "recursos-graficos/acerca-nosotros/perfiles-rancho/diana.jpeg",
        linkedin: "https://www.linkedin.com/in/diana-laura-hurtado-ba%C3%B1os/",
        gitHub: "https://github.com/DianaH-314",
        nombreCompleto: "Diana Laura Hurtado Baños",
        nombre: "Diana",
        acercaDe: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?`,
        rol: "Backend Developer",
        rolDescripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }
    const datosNatalia = {
        id: "natalia",
        imagen: "recursos-graficos/acerca-nosotros/perfiles-rancho/Nat.jpeg",
        linkedin: "https://www.linkedin.com/in/nataliasusana/",
        gitHub: "https://github.com/natalia-susana",
        nombreCompleto: "Natalia Susana Cruz Ruíz",
        nombre: "Natalia",
        acercaDe: `Física, Desarrolladora Java Full Stack, con experiencia previa en desarrollo web. Mi formación científica me dio una base sólida en pensamiento lógico, análisis de datos y resolución de problemas, habilidades que aplico directamente en el desarrollo de software: desde el diseño de la lógica de un programa hasta la depuración y optimización del código. Aporto capacidad analítica, atención al detalle y disposición constante para aprender nuevas tecnologías.`,
        rol: "Backend Developer",
        rolDescripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci earum asperiores quod esse nemo consequuntur autem. Cum quia debitis quam ratione totam asperiores, aliquid vel animi minima voluptatum, atque non?",
    }

    const integrantes = {
        elias: datosElias,
        daniela: datosDaniela,
        oscar: datosOscar,
        esther: datosEsther,
        david: datosDavid,
        karen: datosKaren,
        vanessa: datosVanessa,
        diana: datosDiana,
        natalia: datosNatalia
    }

    const integrantesIds = document.querySelectorAll('.quienesPosible-img');


    integrantesIds.forEach(integrante => {
        integrante.addEventListener('click', function () {
            const modal = document.querySelector('.modal-overlay');
            const datos = integrantes[integrante.id];
            console.log(integrante.id);
            console.log(integrantes[integrante.id]);

            if (datos) {
                modal.innerHTML = generarCard(datos)
                const card = modal.querySelector('.card-integrante');

                //El card de la biografia no se cerrara si le das click adentro del mismo
                card.addEventListener('click', function (e) {
                    e.stopPropagation();
                });
            }
        })

    });

}

function generarCard(datos) {

    return `
<div class="card-integrante position-relative">
    <svg onclick="cerrarModal()" class="exit-icon position-absolute"  xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
    </svg>
    

        <div class="card-recursos d-flex flex-column align-items-center justify-content-center">
            <!-- Quitamos img-fluid para que use tus 280px x 280px exactos -->
            <img src="${datos.imagen}" alt="${datos.nombre}">

            <div class="links w-100">
                <div class="link-integrante">
                    <a class="link-integrante-2 d-flex align-items-center text-decoration-none text-reset gap-2"
                        href="${datos.linkedin}"
                        target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                        <p class="m-0">LinkedIn</p>
                    </a>
                </div>

                <hr class="hr-links">

                <div class="link-integrante">
                    <a class="link-integrante-2 d-flex align-items-center text-decoration-none text-reset gap-2"
                        href="${datos.gitHub}"
                        target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                        <p class="m-0">GitHub</p>
                    </a>
                </div>
            </div>
        </div>

        <div class="integrante-datos flex-grow-1 d-flex flex-column p-4 rounded-3 shadow">
            <h3>${datos.nombreCompleto}</h3>
            <h4 class="rol-general naranja-fuerte">Full Stack JAVA Developer</h4>

            <hr class="hr-contenido">

            <h4 class="h4-integrante d-flex align-items-center gap-2 m-0">
                <span class="icon-contenido d-inline-flex justify-content-center align-items-center rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                </span>
                Acerca de ${datos.nombre}
            </h4>
            <p class="mt-3 justificado">${datos.acercaDe}</p>

            <hr class="hr-contenido">

            <h4 class="h4-integrante d-flex align-items-center gap-2 m-0">
                <span class="icon-contenido d-inline-flex justify-content-center align-items-center rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        class="bi bi-code" viewBox="0 0 16 16">
                        <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
                    </svg>
                </span>
                <span>Rol:</span>
                <span class="naranja-fuerte">${datos.rol}</span>
            </h4>
            <p class="mt-3 justificado">${datos.rolDescripcion}</p>
        </div>
    </div>
`;
}



/*******************************************************************************
 *
 * PÁGINA: CONTÁCTANOS
 *
 ******************************************************************************/
/* -----------------------------------------------------------------------------
   SECCION: VALIDACIÓN DE NOMBRE
----------------------------------------------------------------------------- */

//Óscar
// valida los datos que el usuario escribe en el label "Nombre"
// 1. La función que SOLO revisa las reglas y devuelve el texto del error (o undefined si está bien)
function validar(event) {
    if (event) event.preventDefault();
    const alertMensaje = `<span class="alerta-titulo">El Nombre </span> `;
    const nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
        return alertMensaje+ "no puede estar vacío."; // SIN punto y coma tras return
    }

    if (/\d/.test(nombre)) {
        return alertMensaje+ "no puede contener números.";
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(nombre)) {
        return alertMensaje+ "solo puede contener letras y espacios.";
    }

    if (nombre.length < 3) {
        return alertMensaje+ "debe tener al menos 3 caracteres.";
    }

    // Si llegó hasta aquí, todo está correcto
    nombreValidado(nombre);
    return undefined;
}

// 2. La función que se encarga de escuchar el clic o evento y mostrarlo por consola / HTML
function validarNombreMensaje() {
    const pErrorNombre = document.querySelector('.error-nombre');
    const btnEnviar = document.querySelector("#btnEnviar");

    if (btnEnviar) {
        btnEnviar.addEventListener('click', function (e) {
            // Le pasamos el evento 'e' a la función validar
            const mensajeValidado = validar(e);

            // ¡Aquí ya podrás ver los mensajes en la consola!
            console.log(mensajeValidado);

            if (pErrorNombre) {
                pErrorNombre.textContent = mensajeValidado || "";
            }
        });
    }
}

function nombreValidado(nombre) {
    console.log(nombre);
}

function mensajeNombre() {
    const pErrorNombre = document.querySelector("#error-nombre p");
    const btnEnviar = document.querySelector("#btnEnviar");

    btnEnviar.addEventListener('click', function (e) {
        clearTimeout(temporizadorAlerta);

        const errorDelNombre = validar(e);

        if (errorDelNombre) {
            pErrorNombre.innerHTML = errorDelNombre;

            temporizadorAlerta = setTimeout(() => {
                pErrorNombre.innerHTML = "";
            }, 3000);

        } else {
            pErrorNombre.innerHTML = "";
        }
    });
}
/* -----------------------------------------------------------------------------
   SECCION: VALIDACIÓN DE TELÉFONO
----------------------------------------------------------------------------- */

//Karen
function validarTelefono() {

    const inputTelefono = document.querySelector("#telefono") //id telefono
    const btnEnviar = document.querySelector("#btnEnviar") //id del boton enviar

    // Validaciones

    const telefono = inputTelefono.value.replace(/[\s-]/g, "");   //limpiar la cadena de texto, elimina espacios y guiones escritos en el campo de teléfono antes de hacer la validación.
    const alertMensaje = `<span class="alerta-titulo">Teléfono No válido:</span> `;

    // VALIDACION 1: Input con contendio
    if (telefono == "") {
        return (alertMensaje + "Debes llenar el campo")
    }

    // VALIDACION 2: Input sin caracteres raros o menos o mas de 10 digitos
    if (!/^\d{10}$/.test(telefono)) {
        return (alertMensaje + "El teléfono debe tener exactamente 10 dígitos")
    }

    return ("TELEFONO VALIDO")

}

function crearAlertsTelefono() {
    const divAlerta = document.querySelector(".alerta") //clase-división donde va a aparecer la alerta
    const btnEnviar = document.querySelector("#btnEnviar")  //id del boton enviar

    btnEnviar.addEventListener('click', function () {
        divAlerta.innerHTML = `<div class="alert bg-verdeCLaro alert-dismissible fade show" role="alert">${validarTelefono()}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
    })

}

crearAlertsTelefono();

function mensajeTelefono() {
    const pErrorTelefono = document.querySelector("#error-telefono p");
    const btnEnviar = document.querySelector("#btnEnviar");

    btnEnviar.addEventListener('click', function (e) {
        clearTimeout(temporizadorAlerta);

        const errorDelTelefono = validar(e);

        if (errorDelTelefono) {
            pErrorTelefono.innerHTML = errorDelTelefono;

            temporizadorAlerta = setTimeout(() => {
                pErrorTelefono.innerHTML = "";
            }, 3000);

        } else {
            pErrorTelefono.innerHTML = "";
        }
    });
}




/* -----------------------------------------------------------------------------
   SECCION: VALIDACIÓN DE CORREO ELECTRÓNICO
----------------------------------------------------------------------------- */

// Elias

function validacionCorreo() {

    const inputCorreo = document.querySelector("#correo")

    const dominios = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'ymail.com', 'icloud.com', 'me.com']
    const caracteresProhibidos = [
        ',',  // Coma
        ':',  // Dos puntos
        ';',  // Punto y coma
        '(',  // Parenteis
        ')',
        '<',  // Menor/Mayor que
        '>',
        '[',  // Corchetes
        ']',
        '\\', // Barra invertida
        '"',  // Comillas dobles
        '/',  // Diagonal
        '?',  // Signo de interrogación
        '=',  // Signo de igual
        '!',  // Signos de admiración
        '¡',
        '¿',
        '#',  // Numeral
        '$',  // Símbolos monetarios/especiales
        '%',
        '&',
        '*',
        '^',
        '~'
    ];
    const usuariosGenericos = [
        "test",
        "prueba",
        "admin",
        "administrator",
        "correo",
        "email",
        "contacto",
        "hola",
        "user",
        "usuario",
        "123",
        "1234",
        "12345",
        "a",
        "abc",
        "asdf",
        "qwerty",
        "no",
        "noreply",
        "no-reply",
        "ejemplo",
        "example",
        "null",
        "undefined"
    ];

    let validacion = true;
    // Valiaciones
    // Los campos no esten vacios


    const correo = inputCorreo.value
    const alertMensaje = `<span class="alerta-titulo">Correo Electrónico No válido:</span> `;

    // VALIDACION 1: Input con contendio
    if (correo == "") {
        return (alertMensaje + "Debes llenar el campo")
    }

    // VALIDACION 2: Input sin epacios
    if (correo.includes(" ")) {
        return (alertMensaje + "Hay espacios en el correo")
    }
    if (caracteresProhibidos.some(caracter => correo.includes(caracter))) {
        return (alertMensaje + "El correo contiene caracteres no permitidos");
    }

    // VALIDACION 3: solo puede haber un @
    if (correo.split("@").length !== 2) {
        return (alertMensaje + "El correo debe contener exactamente un @");

    }
    const palabras = correo.split("@");
    const doominioCorreo = palabras[1];
    const nombreCorreo = palabras[0];
    const patron = /\.{2,}/;

    // VALIDACION 5: No permitir usuarios genericos
    if (usuariosGenericos.some(generico => nombreCorreo.toLowerCase() == generico)) {
        return (alertMensaje + "Usuario Generico");
    }



    // VALIDACION 6: Multiples puntos en el correo
    if (patron.test(nombreCorreo)) {
        return (alertMensaje + "Multiples puntos en el correo")
    }


    // VALIDACION 7: Iniciar el correo con un punto
    if (nombreCorreo[0] == '.') {
        return (alertMensaje + "Tu correo no puede iniciar con un punto")
    }
    // VALIDACION 8: Finalizar el correo con un punto
    if (correo.endsWith('.')) {
        return (alertMensaje + "Tu correo no puede acabar con un punto")
    }

    // VALIDACION 9: Dominios no valios
    if (!dominios.includes(doominioCorreo)) {
        return (alertMensaje + "Dominio no válido");
    }


    correoValidado(correo);
    return undefined


    // Cumpla con una direccion de correo electronico correcta


    // No sea un ocrreo generico 

}

function correoValidado(correo) {
    console.log(correo)
}



let temporizadorAlerta;
function mostrarValidaciones() {

    let validaciones = [validacionCorreo()]
    let mensaje = "";

    validaciones = validaciones.filter(validacion => validacion != undefined)

    validaciones.forEach(validacion => {
        mensaje = `${mensaje} ${validacion} <br>`
    });

    return mensaje
}


function mensajeCorreo() {
    const pErrorCorreo = document.querySelector("#error-correo p");
    const btnEnviar = document.querySelector("#btnEnviar");

    btnEnviar.addEventListener('click', function () {
        clearTimeout(temporizadorAlerta);

        // Evaluamos SOLO la validación del correo para este párrafo
        const errorDelCorreo = validacionCorreo();

        if (errorDelCorreo) { // Si retorna un string con el error
            pErrorCorreo.innerHTML = errorDelCorreo;

            temporizadorAlerta = setTimeout(() => {
                pErrorCorreo.innerHTML = "";
            }, 3000);

        } else {
            pErrorCorreo.innerHTML = "";
        }
    });
}

function crearAlertsCorreo() {
    const divAlerta = document.querySelector(".alerta");
    const btnEnviar = document.querySelector("#btnEnviar");

    if (btnEnviar && divAlerta) {
        btnEnviar.addEventListener('click', function (e) {
            const errorCorreo = validacionCorreo();
            const errorNombre = validar(e);
            const errorTelefono = validarTelefono();

            if (errorCorreo || errorNombre || errorTelefono) {
                clearTimeout(temporizadorAlerta);

                divAlerta.innerHTML = `<div class="alert bg-verdeCLaro alert-dismissible fade show" role="alert">
                    <span class="alerta-titulo">Parece que hay un detalle:</span> Revisa los campos resaltados para poder continuar.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;

                temporizadorAlerta = setTimeout(() => {
                    divAlerta.innerHTML = "";
                }, 4000);

            } else {
                divAlerta.innerHTML = "";
            }
        });
    }
}

/* -----------------------------------------------------------------------------
   SECCION: VALIDACIÓN DE TELÉFONO
----------------------------------------------------------------------------- */

// Karen







/* -----------------------------------------------------------------------------
   SECCION: VALIDACIÓN DE MENSAJE
----------------------------------------------------------------------------- */
//Natalia
//window.alert("Hello world!"); alert("Hello world!"); esta alerta no funciona.

// Recordemos que tenemos 2 id´s de comentarios y contador:
    
    let COMENTARIO = document.getElementById("caja_de_comentarios");
    
    let CONTADOR = document.getElementById("contador");

    let longitud_maxima = 300; 

    let comentario_valido = false; //empieza vacio

    function contador_de_caracteres(){
        let texto = COMENTARIO.value; // este es el texto que el usuario escribió

        let texto_sin_espacios = texto.trim(); // trim quita espacio en blanco del inicio y final

        let longitud_de_COMENTARIO = texto.length; //cuenta los caracteres 

        let numero_de_palabras = 0;

        

        if (texto_sin_espacios.length > 0 ){
            numero_de_palabras = texto_sin_espacios.split(" ").length; //verifica si hay palabras sin los posibles espacios de antes y despues.

        }

        let mensaje = longitud_de_COMENTARIO + " de " + longitud_maxima + " caracteres | " + numero_de_palabras + " palabras ";

        // cuando se escriba puros espacios en balnco

        if (longitud_de_COMENTARIO > 0 && texto_sin_espacios ==0){
            mensaje = "¡El texto no puede contener solo espacios en blanco!";  
        }

        if (longitud_de_COMENTARIO > longitud_maxima) {
        mensaje = "¡Has excedido el límite de " + longitud_maxima + " caracteres! (" + longitud_de_COMENTARIO + " / " + longitud_maxima + ")";
    }

        CONTADOR.textContent = mensaje; // el usuario ve cuantos elementos va escribiendo

        if (longitud_de_COMENTARIO > longitud_maxima){
            CONTADOR.style.color= "red";
            comentario_valido = false; //porque exedió más de 300 caracteres
        }   else if (texto_sin_espacios.length == 0 && longitud_de_COMENTARIO > 0){
            CONTADOR.style.color = "red";
            comentario_valido = "false"; // espacios en balnco

        }   else {
            CONTADOR.style.color = "black";
            comentario_valido = true // está dentro del rango
        }
    }

COMENTARIO.addEventListener("input", contador_de_caracteres);






/* -----------------------------------------------------------------------------
   SECCION: VALIDACIÓN DE HORARIO
----------------------------------------------------------------------------- */

// David







/* -----------------------------------------------------------------------------
   SECCION: VALIDACIÓN DE MEDIO
----------------------------------------------------------------------------- */

// David
