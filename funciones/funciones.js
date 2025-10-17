/* funciones/funciones.js */

// 1. Para index.html (mensaje de bienvenida)
function mostrarSaludo() {
    alert("¡Bienvenido a la Feria Mundial de Viajes!");
}

// 2. Para destinos.html (Cambia el título de la sección de descuentos)
function cambiarTituloDescuento() {
    // Apunta al <h2> "Descuentos exclusivos" dentro de la sección "rutasprincipales"
    const titulo = document.querySelector('#rutasprincipales h2');
    
    if (titulo) {
        titulo.textContent = '✨ ¡NUEVAS OFERTAS AQUÍ! ✨';
        alert("Título de la sección de descuentos actualizado.");
    }
}

// 3. Para galeria.html 
function alertaGaleria() {
    alert("Mensaje: Las imágenes son un adelanto de tu aventura.");
}

// 4. Para contacto.html 
function validarSimple() {
    return confirm("¿Confirmas el envío de tu consulta?");
}

// 5. Para otros.html (Resaltar texto simple)
function resaltarInfo() {
    const info = document.querySelector('.infoadicional');
    if (info) {
        info.style.backgroundColor = '#FFFF99'; // Fondo amarillo claro
        alert("Información adicional resaltada.");
    }
}