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
  chatIconContainer.style.bottom = "4px"; // Espacio desde el borde inferior
  chatIconContainer.style.right = "8px";  // Espacio desde el borde derecho
  chatIconContainer.style.zIndex = "100";   // Asegura que esté en la capa superior

  // Ajusta el tamaño del ícono (90% más pequeño)
  chatIcon.style.width = "62px";  // Ajusta el tamaño aquí
  chatIcon.style.height = "62px"; // Ajusta el tamaño aquí
  chatIcon.style.cursor = "pointer"; // Cambia el cursor al pasar sobre el ícono
});


// Otras funciones o código aquí...

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});


// Espera a que todo el contenido esté cargado antes de aplicar el estilo
window.addEventListener("load", function() {
  const chatIconContainer = document.querySelector(".chat-icon-container");
  const notification = chatIconContainer.querySelector(".notification");
  const closeNotification = notification.querySelector(".close-notification");

  // Mostrar la notificación al cargar la página
  notification.style.display = "block";
  
  // Estilos para la notificación
  notification.style.position = "absolute";
  notification.style.top = "-70px"; // Coloca la notificación arriba del icono
  notification.style.left = "-160px"; // Mueve la notificación hacia la izquierda (ajusta el valor como desees)
  notification.style.backgroundColor = "#ffffff"; // Fondo verde
  notification.style.color = "#32475a";
  notification.style.padding = "15px";
  notification.style.borderRadius = "5px";
  notification.style.textAlign = "center";
  notification.style.fontSize = "14px";
  notification.style.width = "220px";
  notification.style.zIndex = "101"; // Asegura que esté sobre otros elementos

  // Estilo para la X de cerrar
  closeNotification.style.position = "absolute";
  closeNotification.style.top = "3px";
  closeNotification.style.right = "10px";
  closeNotification.style.color = "#32475a";
  closeNotification.style.fontSize = "18px";
  closeNotification.style.cursor = "pointer";

  // Función para cerrar la notificación cuando se hace clic en la X
  closeNotification.addEventListener("click", function() {
    notification.style.display = "none";
  });
});
