const confirmarBtn = document.getElementById("confirmar");
const formulario = document.getElementById("formulario");
const asignarTurnoBtn = document.getElementById("asignarTurno");

confirmarBtn.addEventListener("click", () => {
    const edad = prompt("¿Cuántos años tienes?");

    if (edad >= 18) {
        alert("Puedes continuar tu viaje en el paraíso");
        confirmarBtn.disabled = true;
        formulario.style.display = "block";
    } else {
        alert("Lo sentimos, este lanzamiento es exclusivo para mayores de edad.");
    }
});

asignarTurnoBtn.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (nombre && email) {
        alert(`¡Gracias, ${nombre}! Espera tu número de entrada al paraíso en: ${email}.`);
        formulario.style.display = "none";
    } else {
        alert("El paraíso necesita tus datos para dejarte entrar...");
    }
});