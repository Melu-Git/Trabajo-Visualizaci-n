document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el elemento de texto
    var textoAnimado = document.getElementById("textoAnimado");
  
    // Función para animar el texto gradualmente
    function animarTexto() {
      var opacidad = 0;
      var intervalo = setInterval(function () {
        // Incrementa la opacidad
        opacidad += 0.1;
        textoAnimado.style.opacity = opacidad;
  
        // Verifica si la opacidad alcanza 1 (totalmente visible)
        if (opacidad >= 1) {
          clearInterval(intervalo); // Detiene la animación
        }
      }, 100); // Ajusta el intervalo de tiempo a 200 milisegundos
    }
  
    // Llama a la función de animación cuando se carga la página
    animarTexto();
  });
  