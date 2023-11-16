function validarCampos() {
    // Verifica que los campos no estén vacíos
    const campos = document.querySelectorAll("input[required]");
    for (const campo of campos) {
      if (campo.value === "") {
        alert("Todos los campos son obligatorios");
        return;
      }
    }
  
    // Si se cumplen todas las condiciones, redirige a la página siguiente
    window.location.href = "0index.html";
  }
  
  
  