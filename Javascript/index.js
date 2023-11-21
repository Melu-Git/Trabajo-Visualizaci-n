
function openPopup() {
    const popup = document.getElementById('popupContainer');
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popupContainer');
    popup.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const personajeElegido = document.querySelector(".personaje-elegido img");

    // Obtener todas las imágenes del carrousel
    const imagenesCarrousel = document.querySelectorAll(".imagenes-carrousel");

    // Agregar un evento de clic a cada imagen del carrousel
    imagenesCarrousel.forEach(imagen => {
        imagen.addEventListener("click", function () {
            // Obtener la ruta de la imagen de la imagen del carrousel clicada
            const nuevaRuta = imagen.querySelector("img").src;

            // Actualizar la imagen del personaje elegido
            personajeElegido.src = nuevaRuta;
        });
    });
});

function openPopup2() {
    const popup = document.getElementById('popupContainer2');
    popup.style.display = 'block';
}

function closePopup2() {
    const popup = document.getElementById('popupContainer2');
    popup.style.display = 'none';
}



document.addEventListener("DOMContentLoaded", function () {
    const botonCambiar = document.querySelector("#botonCambiar button");
  
    botonCambiar.addEventListener("click", function () {
      // Agrega la clase cambiando al botón al hacer clic
      botonCambiar.classList.add("cambiando");
  
      // Después de un tiempo (puedes ajustar el tiempo según tus necesidades),
      // elimina la clase para detener la animación
      setTimeout(function () {
        botonCambiar.classList.remove("cambiando");
      }, 500);
    });
  });
  