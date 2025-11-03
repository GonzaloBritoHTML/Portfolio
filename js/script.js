document.addEventListener("DOMContentLoaded", () => {
    // Referencias a botones
    const btn1 = document.getElementById("BTNpractica1");
    const btn2 = document.getElementById("BTNpractica2");
    const btn3 = document.getElementById("BTNpractica3");

    // Referencias a imágenes
    const imgs = [
        document.getElementById("img1"),
        document.getElementById("img2"),
        document.getElementById("img3"),
        document.getElementById("img4")
    ];

    // Conjuntos de imágenes por práctica
    const practicas = {
        1: [
            "./Img/ISES1.jpg",
            "./Img/ISES2.jpg",
            "./Img/ISES3.jpg",
            "./Img/ISES4.jpg"
        ],
        2: [
            "./Img/JANSSEN1.jpg",
            "./Img/JANSSEN2.jpg",
            "./Img/JANSSEN3.jpg",
            "./Img/JANSSEN4.jpg"
        ],
        3: [
            "./Img/ISES5.jpg",
            "./Img/ISES6.jpg",
            "./Img/ISES7.jpg",
            "./Img/ISES8.jpg"
        ]
    };

    // Función para cambiar imágenes
    function cambiarImagenes(numero,pos) {
        imgs.forEach((img, index) => {
            img.src = practicas[numero][index];
            img.classList.add("fade");
            setTimeout(() => img.classList.remove("fade"), 500);
        });
    }

    // Eventos de clic
    btn1.addEventListener("click", () => cambiarImagenes(1));
    btn2.addEventListener("click", () => cambiarImagenes(2));
    btn3.addEventListener("click", () => cambiarImagenes(3));
});

document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll(".main_unidades a");
    const visor = document.getElementById("visor");
    const mensaje = document.getElementById("mensaje-visor");

    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", (e) => {
        e.preventDefault();
        const url = enlace.href;
        let embedURL = "";

        // ---- Google Docs ----
        if (url.includes("docs.google.com/document")) {
            const id = url.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];
            embedURL = `https://docs.google.com/document/d/${id}/preview`;
        }

        // ---- Canva ----
        else if (url.includes("canva.com")) {
            // Cambiamos el enlace normal a su versión embebida
            embedURL = url.replace("/view", "/view?embed");
        }

        // ---- Genially ----
        else if (url.includes("genially.com")) {
            embedURL = url;
        }

        // ---- Archivos PDF ----
        else if (url.endsWith(".pdf")) {
            embedURL = url;
        }

        // ---- Moodle / Ferozo o sitios bloqueados ----
        else if (url.includes("ferozo.net") || url.includes("moodle")) {
            visor.src = "";
            mensaje.innerHTML = `
            <p style="color:#ff6f61; text-align:center;">
            Este recurso no puede mostrarse dentro del portfolio.<br>
            <a href="${url}" target="_blank" style="color:#00bcd4;">Abrir en una nueva pestaña</a>
            </p>`;
            mensaje.style.display = "block";
            visor.style.display = "none";
            return;
        }

        // ---- Otros enlaces (por defecto) ----
        else {
            embedURL = url;
        }

        // Mostrar en el visor
        if (embedURL) {
            visor.src = embedURL;
            visor.style.display = "block";
            mensaje.style.display = "none";
        }
    });
    });
});