// Espera a que todo el contenido esté cargado antes de aplicar el estilo
window.addEventListener("load", function() {
  const chatIconContainer = document.querySelector(".chat-icon-container");
  const chatIcon = document.querySelector(".chat-icon img");

  // Si no encuentra el ícono, muestra un mensaje de error en consola
  if (!chatIconContainer || !chatIcon) {
    console.error("No se encontró el elemento con la clase .chat-icon o .chat-icon-container.");
    return;
  }

  // Asegura que el contenedor se mantenga siempre fijo al desplazarse
  chatIconContainer.style.position = "fixed";
  chatIconContainer.style.bottom = "2px"; // Espacio desde el borde inferior
  chatIconContainer.style.right = "8px";  // Espacio desde el borde derecho
  chatIconContainer.style.zIndex = "100";   // Asegura que esté en la capa superior

  // Ajusta el tamaño del ícono (90% más pequeño)
  chatIcon.style.width = "61.5px";  // Ajusta el tamaño aquí
  chatIcon.style.height = "61.5px"; // Ajusta el tamaño aquí
  chatIcon.style.cursor = "pointer"; // Cambia el cursor al pasar sobre el ícono
});


// Otras funciones o código aquí...

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});