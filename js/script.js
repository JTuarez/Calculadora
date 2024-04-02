const pantalla = document.querySelector(".pantalla"); // Variable Pantalla donde se traera toda la informacion osea los resultados
const botones = document.querySelectorAll(".btn"); // Variable Seleccionar todos los botones con querySelectorAll

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if(boton.id === "c"){
            pantalla.textContent = "0";        //Al momento de apretar "c" hara que vuelva a 0 la calculadora
            return;   
        }  

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1){      //al momento de dar click en borrar "<-" eliminara uno por uno los digitos 
                pantalla.textContent = "0";
        } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);    //Al borrar todo llegara al numero 0
            }          
            return;
        }

        if(boton.id === "igual"){
            pantalla.textContent = eval(pantalla.textContent); // Aqui con el metodo "eval" calcula las operaciones
            return;
        }

        if(pantalla.textContent === "0"){
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado; 
            
        }
    })
})