
/* =========================================
   1. SELECCIÓN DE ELEMENTOS DEL HTML
   ========================================= */

// Seleccionamos el formulario de contacto.
const contactForm = document.querySelector(".contact-form");


/* =========================================
   2. EVENTO DE ENVÍO DEL FORMULARIO
   ========================================= */

contactForm.addEventListener("submit", function (event) {

    // Evita que el formulario recargue la página.
    event.preventDefault();


    /* =====================================
       3. VALIDACIÓN DE LOS CAMPOS
       ===================================== */

    // Comprobamos los campos obligatorios.
    if (!contactForm.checkValidity()) {

        // Muestra los mensajes de validación del navegador.
        contactForm.reportValidity();

        return;
    }


    /* =====================================
       4. OBTENCIÓN DE LOS DATOS
       ===================================== */

    const nombre = document.querySelector("#nombre").value.trim();

    const correo = document.querySelector("#correo").value.trim();

    const disciplina = document.querySelector("#disciplina").value;

    const mensaje = document.querySelector("#mensaje").value.trim();


    /* =====================================
       5. CONFIRMACIÓN DEL ENVÍO
       ===================================== */

    // Creamos un mensaje de confirmación.
    const confirmation = document.createElement("p");

    confirmation.classList.add("form-message");

    confirmation.setAttribute("role", "status");

    confirmation.textContent =
        `¡Gracias, ${nombre}! Tu consulta sobre ${disciplina} ha sido registrada correctamente.`;


    // Eliminamos una confirmación anterior si existe.
    const previousMessage = contactForm.querySelector(".form-message");

    if (previousMessage) {
        previousMessage.remove();
    }

    // Insertamos el mensaje dentro del formulario.
    contactForm.appendChild(confirmation);


    /* =====================================
       6. LIMPIEZA DEL FORMULARIO
       ===================================== */

    contactForm.reset();


    /* =====================================
       7. INFORMACIÓN DE LA CONSULTA
       ===================================== */

    console.log("Datos del formulario:");

    console.log({
        nombre,
        correo,
        disciplina,
        mensaje
    });

});
