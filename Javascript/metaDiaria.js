  // -------------------------------------------script de las opciones----------------------------------------
function seleccionarOpcion(opcion) {
    if (opcion.classList.contains("seleccionado")) {
      return;
    }
  
    opcion.classList.add("seleccionado");
  
    // Quitar la clase "seleccionado" de los demás div "opciones"
    for (var i = 0; i < document.querySelectorAll(".opciones").length; i++) {
      if (document.querySelectorAll(".opciones")[i] !== opcion) {
        document.querySelectorAll(".opciones")[i].classList.remove("seleccionado");
      }
    }
  }


  // -------------------------------------------script del boton----------------------------------------
  function siguientePagina() {
    // Verificar si hay una opción seleccionada
    var opcionSeleccionada = document.querySelector(".opciones.seleccionado");
    if (!opcionSeleccionada) {
      // No hay una opción seleccionada
      return;
    }
  
    // Pasar a la siguiente página
    window.location.href = "4recordatorios.html";
  }
  
