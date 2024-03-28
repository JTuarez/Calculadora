const pantalla = document.querySelector(".pantalla"); // Pantalla donde se traera toda la informacion osea los resultados
const botones = document.querySelectorAll(".btn"); // Seleccionar todos los botones con querySelectorAll

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const BotonApretado = boton.textContent;
        pantalla.textContent =BotonApretado;
    })
})
