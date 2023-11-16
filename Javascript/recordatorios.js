document.querySelectorAll(".selector-container li").forEach(function(li) {
    li.addEventListener("click", function() {
      if (li.classList.contains("selected")) {
        li.classList.remove("selected");
      } else {
        li.classList.add("selected");
      }
    });
  });
  

  function siguientePagina() {
    const selectOpciones = document.querySelectorAll('select');
    const ulOpciones = document.querySelectorAll('ul');

    let valid = true;

    // Comprobación de los selects
    selectOpciones.forEach(select => {
        if (select.value === "" || select.value === null) {
            valid = false;
        }
    });

    // Comprobación de las listas
    ulOpciones.forEach(ul => {
        const elementosSeleccionados = ul.querySelectorAll('li.selected');
        if (elementosSeleccionados.length === 0) {
            valid = false;
        }
    });

    if (valid) {
        // Redirigir a la siguiente página
        window.location.href = "05cfgPersonaje.html";
    } else {
        // Hacer algo para indicar que se deben seleccionar opciones
        alert("Por favor, completa todas las selecciones antes de continuar.");
    }
}

    