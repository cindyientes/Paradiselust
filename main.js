/*Quiero una landing page para el lanzamiento de un producto. 
Tiene que tener primero una confirmación de mayoría de edad para que el usuario pueda seguir navegando.
Le decimos que debe ser mayor de edad. Ponemos un botón habilitado que diga confirmar. 
Luego debe ingresar con número cuántos años tiene. Si es mayor o igual a 18, lo dejamos seguir.
Si es menor a 18, le decimos que no puede continuar. 
Si fue mayor de edad, lo dejamos que explore la página. La página tendrá una imagen y texto hero. 
Una galería de productos con sus características.
Cada producto tendrá un inventario de 5 máximo. 
El usuario podrá añadir al carrito los objetos que desee. El carrito tiene que calcular la suma del costo de cada uno. 
Y decirle que puede pagar a cuotas y calcular intereses para eso.
Uno de los productos estará sin stock, pero podrá anotarse a una lista de espera al proporcionar su nombre, teléfono y correo electrónico. 
Le asignaremos un turno que deberá llegarle al correo registrado.

*/

const confirmarBtn = document.getElementById("confirmar");
const formulario = document.getElementById("formulario");
const asignarTurnoBtn = document.getElementById("asignarTurno");

confirmarBtn.addEventListener("click", () => {
    const edad = prompt("Por favor, ingresa tu edad:");

    if (edad >= 18) {
        alert("¡El paraíso aguarda! Puedes continuar.");
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
        alert(`¡Gracias, ${nombre}! Ya tienes tu lugar en la lista de espera. Te enviaremos tu turno a ${email}.`);
        formulario.style.display = "none";
        mostrarNovedades();
    } else {
        alert("Por favor, escribe tu nombre completo y correo electrónico.");
    }
});

function mostrarNovedades() {
    alert("Mientras, ¡explora las novedades de nuestra página!");
}