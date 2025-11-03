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